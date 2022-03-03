import user_img from '../assets/zohaib.jpg'
import post_img from '../assets/Pakistan.jpg'

const timestamp  = new Date();
const time = timestamp.getHours() + "h";

export const posts = [
  {
    id: 1,
    name: 'Muhammad Zohaib',
    username: '@zohaibkhan',
    profile_img: user_img,
    verified: false,
    post_time: time,
    post_despcription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    post_img: post_img,
    post_coments: 20,
    retweet: 10,
    post_hearts: 200,
    followers: 200,
    following: 300,
    work_desp: 'PTI | Professor UI | PhD in Leadership',
    isFollowing: false,

  },
  {
    id: 2,
    name: 'Muhammad Usman',
    username: '@usman',
    profile_img: '',
    verified: true,
    post_time: time,
    post_despcription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    post_img: '',
    post_coments: 30,
    retweet: 1,
    post_hearts: 200,
    followers: 10,
    following: 20,
    work_desp: 'React js | Frontend | HTML ',
    isFollowing: false,
  },
  {
    id: 3,
    name: 'Muhammad Ibrahim',
    username: '@ibrahim',
    profile_img: '',
    verified: false,
    post_time: time,
    post_despcription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    post_img: post_img,
    post_coments: 40,
    retweet: 10,
    post_hearts: 20,
    followers: 200,
    following: 300,
    work_desp: 'Node js | Backend ',
    isFollowing: false,
  }, {
    id: 4,
    name: 'Muhammad Ismail',
    username: '@ismail',
    profile_img: user_img,
    verified: true,
    post_time: time,
    post_despcription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 20,
    following: 33000,
    work_desp: 'Full stack ',
    isFollowing: false,
  }
  , {
    id: 5,
    name: 'Muhammad Badar',
    username: '@ismailkhan',
    profile_img: "",
    verified: true,
    post_time: time,
    post_despcription: 'I am the python Engieener',
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 3300,
    work_desp: 'Python Eng ',
    isFollowing: true,
  }
  , {
    id: 6,
    name: 'Muhammad Badar',
    username: '@ismailkhan',
    profile_img: post_img,
    verified: true,
    post_time: time,
    post_despcription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 30000,
    work_desp: 'Python Eng ',
    isFollowing: true,
  }
  , {
    id: 7,
    name: 'Muhammad Ishaq',
    username: '@ismailkhan',
    profile_img: user_img,
    verified: false,
    post_time: time,
    post_despcription: 'I am the python Engieener',
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 313,
    work_desp: 'Python Eng ',
    isFollowing: false,
  }
  , {
    id: 8,
    name: 'Muhammad Badar',
    username: '@ismailkhan',
    profile_img: "",
    verified: true,
    post_time: time,
    post_despcription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    post_img: post_img,
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 2000,
    work_desp: 'Python Eng ',
    isFollowing: false,
  }
  , {
    id: 9,
    name: 'Muhammad Badar',
    username: '@ismailkhan',
    profile_img: user_img,
    verified: false,
    post_time: time,
    post_despcription: 'I am the python Engieener',
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 3013,
    work_desp: 'Python Eng ',
    isFollowing: true,
  }
  , {
    id: 10,
    name: 'Muhammad Badar',
    username: '@ismailkhan',
    profile_img: "",
    verified: true,
    post_time: time,
    post_despcription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 30013,
    work_desp: 'Python Eng ',
    isFollowing: true,
  }
  , {
    id: 11,
    name: 'Muhammad Badar',
    username: '@ismailkhan',
    profile_img: "",
    verified: false,
    post_time: time,
    post_despcription: 'I am the python Engieener',
    post_img: post_img,
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 313,
    work_desp: 'Python Eng ',
    isFollowing: false,
  }, {
    id: 12,
    name: 'Muhammad Badar',
    username: '@ismailkhan',
    profile_img: "",
    verified: true,
    post_time: time,
    post_despcription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    post_img: user_img,
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following:30040,
    work_desp: 'Python Eng ',
    isFollowing: false,
  }
  , {
    id: 13,
    name: 'Muhammad Farhan ',
    username: '@farhanasim',
    profile_img: "",
    verified: false,
    post_time: time,
    post_despcription: 'I am the React js Engieener',
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 33333,
    work_desp: 'Python Eng ',
    isFollowing: true,
  }
  , {
    id: 14,
    name: 'Muhammad Farhan',
    username: '@farhankhan',
    profile_img: user_img,
    verified: true,
    post_time: time,
    post_despcription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    post_img: post_img,
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 50000,
    work_desp: 'Python Eng ',
    isFollowing: true,
  }
  , {
    id: 15,
    name: 'Muhammad Umar',
    username: '@umarkhan',
    profile_img: "",
    verified: false,
    post_time: time,
    post_despcription: 'I am the python Engieener',
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 6000,
    work_desp: 'Python Eng ',
    isFollowing: true,
  }
  , {
    id: 16,
    name: 'Muhammad Sohail',
    username: '@sohailkhan',
    profile_img: user_img,
    verified: true,
    post_time: time,
    post_despcription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    post_img: post_img,
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 10000,
    work_desp: 'Python Eng ',
    isFollowing: false,
  }
  , {
    id: 17,
    name: 'Muhammad Ali Agha',
    username: '@alikhan',
    profile_img: "",
    verified: false,
    post_time: time,
    post_despcription: 'I am the python Engieener',
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 2300,
    work_desp: 'Python Eng ',
    isFollowing: false,
  }
  , {
    id: '18',
    name: 'Muhammad Bashir',
    username: '@bashirkhan',
    profile_img: user_img,
    verified: true,
    post_time: time,
    post_despcription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    post_img: post_img,
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 89900,
    work_desp: 'Python Eng ',
    isFollowing: true,
  }
  , {
    id: 19,
    name: 'Muhammad Esa',
    username: '@esakhan',
    profile_img: "",
    verified: false,
    post_time: time,
    post_despcription: 'I am the python Engieener',
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 2033,
    work_desp: 'Python Eng ',
    isFollowing: true,
  }
  , {
    id: 20,
    name: 'Muhammad Usama',
    username: '@usamakhan',
    profile_img: user_img,
    verified: true,
    post_time: time,
    post_despcription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    post_img: post_img,
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 2000,
    work_desp: 'Python Eng ',
    isFollowing: false,
  }
]

export const TrendingPosts = [
  {
    id: 1,
    name: 'Muhammad Zohaib',
    username: '@zohaibkhan',  
    profile_img: user_img,
    verified: false,
    post_time: time,
    post_despcription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    trending_desp:"@ISPR",
    post_img: post_img,
    post_coments: 20,
    retweet: 10,
    post_hearts: 200,
    followers: 200,
    following: 300000,
    work_desp: 'PTI | Professor UI | PhD in Leadership',
    isFollowing: false,
    trend_keyword: 'ISPR'

  },
  {
    id: 2,
    name: 'Muhammad Usman',
    username: '@usman',
    profile_img: '',
    verified: true,
    post_time: time,
    post_despcription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    trending_desp:"@ISPR",
    post_img: '',
    post_coments: 30,
    retweet: 1,
    post_hearts: 200,
    followers: 10000,
    following: 20000,
    work_desp: 'React js | Frontend | HTML ',
    isFollowing: false,
    trend_keyword: 'ISPR'

  },
  {
    id: 3,
    name: 'Muhammad Ibrahim',
    username: '@ibrahim',
    profile_img: '',
    verified: false,
    post_time: time,
    post_despcription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    trending_desp:"@ISPR",
    post_img: post_img,
    post_coments: 40,
    retweet: 10,
    post_hearts: 20,
    followers: 200,
    following: 300,
    work_desp: 'Node js | Backend ',
    isFollowing: false,
    trend_keyword: 'ISPR'

  }, {
    id: 4,
    name: 'Muhammad Ismail',
    username: '@ismail',
    profile_img: user_img,
    verified: true,
    post_time: time,
    post_despcription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    trending_desp:"@ISPR",
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 20,
    following: 1000,
    work_desp: 'Full stack ',
    isFollowing: false,
    trend_keyword: 'ISPR'

  }
  , {
    id: 5,
    name: 'Muhammad Badar',
    username: '@ismailkhan',
    profile_img: "",
    verified: true,
    post_time: time,
    post_despcription: 'I am the python Engieener ',
    trending_desp:"@IMRANKHAN",
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 3000,
    work_desp: 'Python Eng ',
    isFollowing: true,
    trend_keyword: 'IMRANKHAN'

  }
  , {
    id: 6,
    name: 'Muhammad Badar',
    username: '@ismailkhan',
    profile_img: post_img,
    verified: true,
    post_time: time,
    post_despcription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    trending_desp:"@IMRANKHAN",
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 3000,
    work_desp: 'Python Eng ',
    isFollowing: true,
    trend_keyword: 'IMRANKHAN'

  }
  , {
    id: 7,
    name: 'Muhammad Ishaq',
    username: '@ismailkhan',
    profile_img: user_img,
    verified: false,
    post_time: time,
    post_despcription: 'I am the python Engieener ',
    trending_desp:"@IMRANKHAN",
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 30013,
    work_desp: 'Python Eng ',
    isFollowing: false,
    trend_keyword: 'IMRANKHAN'

  }
  , {
    id: 8,
    name: 'Muhammad Badar',
    username: '@ismailkhan',
    profile_img: "",
    verified: true,
    post_time: time,
    post_despcription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    trending_desp:"@IMRANKHAN",
    post_img: post_img,
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 5000,
    work_desp: 'Python Eng ',
    isFollowing: false,
    trend_keyword: 'IMRANKHAN'

  }
  , {
    id: 9,
    name: 'Muhammad Badar',
    username: '@ismailkhan',
    profile_img: user_img,
    verified: false,
    post_time: time,
    post_despcription: 'I am the python Engieener  ',
    trending_desp:"@IMRANKHAN",
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 4000,
    work_desp: 'Python Eng ',
    isFollowing: true,
    trend_keyword: 'IMRANKHAN'

  }
  , {
    id: 10,
    name: 'Muhammad Badar',
    username: '@ismailkhan',
    profile_img: "",
    verified: true,
    post_time: time,
    post_despcription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    trending_desp:"@IMRANKHAN",
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 5000,
    work_desp: 'Python Eng ',
    isFollowing: true,
    trend_keyword: 'IMRANKHAN'

  }
  , {
    id: 11,
    name: 'Muhammad Badar',
    username: '@ismailkhan',
    profile_img: "",
    verified: false,
    post_time: time,
    post_despcription: 'I am the python Engieener ',
    trending_desp:"@IMRANKHAN",
    post_img: post_img,
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 43847,
    work_desp: 'Python Eng ',
    isFollowing: false,
    trend_keyword: 'IMRANKHAN'

  }, {
    id: 12,
    name: 'Muhammad Badar',
    username: '@ismailkhan',
    profile_img: "",
    verified: true,
    post_time: time,
    post_despcription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    trending_desp:"@IMRANKHAN",
    post_img: user_img,
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 74345,
    work_desp: 'Python Eng ',
    isFollowing: false,
    trend_keyword: 'IMRANKHAN'

  }
  , {
    id: 13,
    name: 'Muhammad Farhan ',
    username: '@farhanasim',
    profile_img: "",
    verified: false,
    post_time: time,
    post_despcription: 'I am the React js Engieener',
    trending_desp:"@IMRANKHAN",
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 3744,
    work_desp: 'Python Eng ',
    isFollowing: true,
    trend_keyword: 'IMRANKHAN'

  }
  , {
    id: 14,
    name: 'Muhammad Farhan',
    username: '@farhankhan',
    profile_img: user_img,
    verified: true,
    post_time: time,
    post_despcription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    trending_desp:"@IMRANKHAN",
    post_img: post_img,
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 643826,
    work_desp: 'Python Eng ',
    isFollowing: true,
    trend_keyword: 'IMRANKHAN'

  }
  , {
    id: 15,
    name: 'Muhammad Umar',
    username: '@umarkhan',
    profile_img: "",
    verified: false,
    post_time: time,
    post_despcription: `I am the python Engieener `,
    trending_desp:"@IMRANKHAN",
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 543543,
    work_desp: 'Python Eng ',
    isFollowing: true,
    trend_keyword: 'YoutubeinPakistan'

  }
  , {
    id: 16,
    name: 'Muhammad Sohail',
    username: '@sohailkhan',
    profile_img: user_img,
    verified: true,
    post_time: time,
    post_despcription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    trending_desp:"@YoutubeinPakistan",
    post_img: post_img,
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 364732,
    work_desp: 'Python Eng ',
    isFollowing: false,
    trend_keyword: 'YoutubeinPakistan'

  }
  , {
    id: 17,
    name: 'Muhammad Ali Agha',
    username: '@alikhan',
    profile_img: "",
    verified: false,
    post_time: time,
    post_despcription: 'I am the python Engieener',
    trending_desp:"@YoutubeinPakistan",
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 734723,
    work_desp: 'Python Eng ',
    isFollowing: false,
    trend_keyword: 'YoutubeinPakistan'

  }
  , {
    id: 18,
    name: 'Muhammad Bashir',
    username: '@bashirkhan',
    profile_img: user_img,
    verified: true,
    post_time: time,
    post_despcription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    trending_desp:"@YoutubeinPakistan",
    post_img: post_img,
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 4545,
    work_desp: 'Python Eng ',
    isFollowing: true,
    trend_keyword: 'YoutubeinPakistan'

  }
  , {
    id: 19,
    name: 'Muhammad Esa',
    username: '@esakhan',
    profile_img: "",
    verified: false,
    post_time: time,
    post_despcription: 'I am the python Engieener',
    trending_desp:"@YoutubeinPakistan",
    post_img: "",
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 321435,
    work_desp: 'Python Eng ',
    isFollowing: true,
    trend_keyword: 'YoutubeinPakistan'

  }
  , {
    id: 20,
    name: 'Muhammad Usama',
    username: '@usamakhan',
    profile_img: user_img,
    verified: true,
    post_time: time,
    post_despcription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima idiure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere aliquid dolores placeat vitae accusamus excepturi officiis magnam',
    trending_desp:"@YoutubeinPakistan",
    post_img: post_img,
    post_coments: 20,
    retweet: 15,
    post_hearts: 50,
    followers: 200,
    following: 6867,
    work_desp: 'Python Eng ',
    isFollowing: false,
    trend_keyword: 'YoutubeinPakistan'

  }
]
