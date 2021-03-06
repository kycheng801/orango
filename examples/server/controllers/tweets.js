/**
 * This represents a basic REST implementation of a retweet using Orango.
 * The Tweet model is in "strict" mode and will filter out all undeclared.
 */
const orango = require('orango')
const checkJWT = require('express-jwt')
const app = require('../app')
const config = require('../config')
const Tweet = orango.model('Tweet')
const Like = orango.model('Like')
const Comment = orango.model('Comment')
const CONSTS = orango.CONSTS

/**
 * Get tweets
 */
app.get('/tweets', (req, res, next) => {
  // if no specific user is rested auth user and return their tweets
  if(!req.query.user) {
    checkJWT({ secret: config.JWT_SECRET })(req, res, next)
  } else {
    next()
  }
}, async (req, res) => {
  try {
    let tweets
    if (req.query.user) {
      tweets = await Tweet.getUserTweets(req.query.user)
    } else {
      tweets = await Tweet.getTweets(
        req.user.id,
        req.query.limit,
        req.query.offset
      )
    }
    res.send(tweets)
  } catch (e) {
    res.status(500).send(e.message)
  }
})

/**
 * Get tweet
 */
app.get('/tweets/:id', async (req, res) => {
  try {
    let tweet = Tweet.getTweet(req.params.id)
    if (tweet) {
      res.status(200).send(tweet)
    } else {
      res.status(404).send('Not found')
    }
  } catch (e) {
    res.status(500).send(e)
  }
})

/**
 * Create tweet
 */
app.post('/tweets', async (req, res) => {
  try {
    let tweet = new Tweet({
      user: req.user.id,
      text: req.body.text,
      created: Date.now()
    })
    await tweet
      .save({ returnNew: true })
      .id()
      .defaults(true)
    res.status(201).json(tweet)
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
})

/**
 * Update tweet
 */
app.put('/tweets/:id', async (req, res) => {
  try {
    let result = await Tweet.findOneAndUpdate({
      id: req.params.id,
      user: req.user.id
    })
    if (result.modified) {
      res.status(200).send('Ok')
    } else {
      res.status(404).send('Not found')
    }
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
})

/**
 * Delete tweet
 */
app.delete('/tweets/:id', async (req, res) => {
  try {
    let result = await Tweet.findOneAndDelete({
      id: req.params.id,
      user: req.user.id
    })
    if (result.deleted) {
      res.status(200).send('Ok')
    } else {
      res.status(404).send('Not found')
    }
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
})

Like.on(CONSTS.HOOKS.LINKED, ({ data }) => {
  Tweet.findByIdAndUpdate(data.to, {
    stats: {
      likes: '++1'
    }
  }).exec()
})

Like.on(CONSTS.HOOKS.UNLINKED, ({ data }) => {
  Tweet.findByIdAndUpdate(data.to, {
    stats: {
      likes: '--1'
    }
  }).exec()
})

Comment.on(CONSTS.HOOKS.CREATED, ({ data }) => {
  Tweet.findByIdAndUpdate(data.tweet, {
    stats: {
      comments: '++1'
    }
  }).exec()
})

Comment.on(CONSTS.HOOKS.DELETED, ({ data }) => {
  Tweet.findByIdAndUpdate(data.tweet, {
    stats: {
      comments: '--1'
    }
  }).exec()
})
