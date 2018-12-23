const fs = require('fs')
const path = require('path')
require('app-module-path').addPath(__dirname)
const orango = require('orango')
require('colors')

let Identity, User, UserQuery
let sampleDB = orango.get('sample')

function formatJSON(data, indent = false) {
  return JSON.stringify(data, null, indent ? 2 : 0)
}

function read(dir, ...injections) {
  let files = fs.readdirSync(dir)
  for (var i = 0; i < files.length; i++) {
    let file = files[i]
    if (file.match(/.js$/)) {
      let item = require(path.join(dir, file))
      if (typeof item === 'function') {
        item.apply(item, injections)
      }
    }
  }
}

async function parseQuery(query, execute = false) {
  console.log('===================================================')
  console.log('connected'.magenta, o.name, o.connection.connected)
  console.log()
  console.log(formatJSON(query).green)
  console.log()

  // fs.writeFileSync('query.json', formatJSON(query, true), 'utf-8')

  let json = query.toJSON ? query.toJSON() : query
  let aql = await sampleDB.queryToAQL(json, true)
  console.log(aql.cyan)
  if (execute) {
    let cursor = await o.connection.db.query(aql)
    let result
    if (json.one) {
      result = await cursor.next()
    } else {
      result = await cursor.all()
    }
    if (result) {
      console.log()
      console.log(formatJSON(result).grey)
    }
    return result
  }
  return aql
}

function test1() {
  let query = Identity.update({ verified: true, bogus: true })
    .one()
    .where({ _key: '217388' })
    .name('ident')
    // .query('user', UserQuery)
    .select('name')
    .return(sampleDB
        .Return()
        .append('user', 'myUser')
        .append('user', 'myUser2')
        .merge('user')
        .one())

  // let results = orango.unmarshal(data, Identity)

  // console.log(formatJSON(result).green)
  // fs.writeFileSync('query.json', formatJSON(result, true), 'utf-8')
  parseQuery(query)
}

function test2() {
  let result = User.insert({
    firstName: 'John',
    lastName: 'Smith',
    bogus: true
  })
    .query(
      'id1',
      Identity.update({
        provider: 'hello',
        verified: true
      }).where({
        _key: '123'
      })
    )
    .return()

  console.log(formatJSON(result).green)
  fs.writeFileSync('query.json', formatJSON(result, true), 'utf-8')
}

function test3() {
  let result = User.remove()
    .one()
    .where({
      active: true
    })
    .return()

  console.log(formatJSON(result).green)
  fs.writeFileSync('query.json', formatJSON(result, true), 'utf-8')
}

function test4() {
  let result = User.find()
    .one()
    .where({
      active: true
    })
    .return()

  console.log(formatJSON(result).green)
  fs.writeFileSync('query.json', formatJSON(result, true), 'utf-8')
}

function test5() {
  let result = User.count()
    .where({
      active: true
    })
    .return()

  console.log(formatJSON(result).green)
  fs.writeFileSync('query.json', formatJSON(result, true), 'utf-8')
}

function test6() {
  let result = User.upsert(
    {
      name: 'user',
      firstName: 'John',
      bogus: true
    },
    {
      lastName: 'Smith',
      bogus: true
    }
  )
    .one()
    .withDefaults()
    .where({
      name: 'user'
    })
    .return()

  console.log(formatJSON(result).green)
  fs.writeFileSync('query.json', formatJSON(result, true), 'utf-8')
}

function test7() {
  let result = User.find()
    .one()
    .let('num', 1)
    .let('str', 'Hello')
    .let('bool', true)
    .let('arr', [1, 'two', true])
    .let('obj', {
      foo: 'bar'
    })
    .return(
      User.return()
        .append('num', 'num1')
        .append('bool')
        .merge('arr')
        .id()
        .computed()
    )

  // console.log(formatJSON(result).green)
  fs.writeFileSync('query.json', formatJSON(result, true), 'utf-8')
}

function test8() {
  let result = User.import([
    {
      firstName: 'Jane',
      lastName: 'Doe',
      bogus: true
    },
    {
      firstName: 'Fred',
      lastName: 'Flintstone',
      bogus: true
    }
  ])
    .one()
    .return()

  console.log(formatJSON(result).green)
  fs.writeFileSync('query.json', formatJSON(result, true), 'utf-8')
}

function test9() {
  let result = Like.link('a', 'b', { bogus: true, notes: 'This is a test' })

  console.log(formatJSON(result).green)
  fs.writeFileSync('query.json', formatJSON(result, true), 'utf-8')
}

function test10() {
  let result = Like.unlink(null, 'b')
  console.log(formatJSON(result).green)
  fs.writeFileSync('query.json', formatJSON(result, true), 'utf-8')
}

function test11() {
  let result = User.find().byId('12345')

  console.log(formatJSON(result).green)
  fs.writeFileSync('query.json', formatJSON(result, true), 'utf-8')
}

function test12() {
  let user = new User({ _key: '123', lastName: 'Doe' })
  user.firstName = 'Jane'
  let query = user.toQuery()
  console.log(formatJSON(query).green)
  fs.writeFileSync('query.json', formatJSON(query, true), 'utf-8')
}

async function test13() {
  let result = Identity.update({
    verified: true,
    bogus: true
  })
    .one()
    .where({
      _key: '217388'
    })
    .name('ident')
    .query('user', UserQuery)
    .select('name')
    .return(
      Identity.return('ident')
        .append('user', 'myUser')
        .append('user', 'myUser2')
        .merge('user')
        .as('model')
    )

  console.log(formatJSON(result, false).green)
  let aql = await result.toAQL(true)
  console.log(aql.cyan)
}

async function test14() {
  let query = User.insert({
    firstName: 'Eddie',
    lastName: 'VanHalen',
    bogus: true
  }).return()

  parseQuery(query)
}

async function test15() {
  let query = await User.insert({
    firstName: 'Eddie',
    lastName: 'VanHalen',
    bogus: true
  }).return()

  let result = await parseQuery(query, true)
  let users = User.fromJSON(result)
  console.log(users[0].isHuman)
  console.log(JSON.stringify(users))
}

async function test16() {
  let user = new User()
  await user.save()
  console.log('Name:'.green, user.fullName)
  user.firstName = 'Rob'
  user.lastName = 'Taylor'
  user.bogus = true
  await user.save()
  console.log('Name:'.green, user.fullName)
}

async function test17() {
  let result = await User.find().byId(56941)
  let user = User.fromJSON(result)
  console.log(user)
}

async function main() {

  await sampleDB.connect()

  read(__dirname + '/models', sampleDB)

  Identity = sampleDB.model('Identity')
  User = sampleDB.model('User')

  UserQuery = User.update({
    firstName: 'John'
  })
    .one()
    .where({
      _key: '@{^.user}'
    })
    // .name('u')
    .return()

  // test1()
  // test2()
  // test3()
  // test4()
  // test5()
  // test6()
  // test7()
  // test8()
  // test9()
  // test10()
  // test11()
  // test12() // TODO: new Model().save()
  // test13()
  // test14()
  // test15()
  // test16()
  test17()
}

main()
