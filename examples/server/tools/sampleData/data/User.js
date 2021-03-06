const users = {
  rob: {
    authId: 'rob',
    role: 'admin',
    screenName: 'roboncode',
    firstName: 'Rob',
    lastName: 'Taylor',
    avatar: 'http://facetheforce.today/yoda/200',
    settings: {
      banner:
        'https://cdn.player.one/sites/player.one/files/2016/09/20/yodas-hut-star-wars-episode-8.jpeg'
    },
    created: Date.now()
  },
  john: {
    authId: 'john',
    screenName: 'dagger',
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'http://facetheforce.today/greedo/200',
    desc: '#golang #jobs only. Bringing companies and developers together that like #go. 99% Go jobs tweets and 1% other stuff. Created by @EdlinOrg',
    settings: {
      banner:
        'https://milnersblog.files.wordpress.com/2016/02/disneyland-60-star-wars-land-new-concept-art-hi-res-milnersblog-12.jpg'
    },
    created: Date.now()
  },
  jane: {
    authId: 'jane',
    screenName: 'ibjane',
    firstName: 'Jane',
    lastName: 'Doe',
    avatar: 'http://facetheforce.today/amidala/200',
    settings: {
      banner:
        'http://1.bp.blogspot.com/-QujDR96QWaE/Utx2fORgDTI/AAAAAAAAClM/x1qqvTTCFT8/s1600/Palais+de+Theed.jpg'
    },
    created: Date.now()
  },
  mark: {
    authId: 'mark',
    screenName: 'ibmark',
    firstName: 'Mark',
    lastName: 'Price',
    created: Date.now()
  },
  sam: {
    authId: 'sam',
    screenName: 'ibsam',
    firstName: 'Sam',
    lastName: 'Odel',
    created: Date.now()
  },
  bella: {
    authId: 'bella',
    screenName: 'ibbella',
    firstName: 'Bella',
    lastName: "O 'Reilly",
    created: Date.now()
  },
  blake: {
    authId: 'blake',
    screenName: 'ibblake',
    firstName: 'Blake',
    lastName: 'Lively',
    created: Date.now()
  }
}

module.exports = users
