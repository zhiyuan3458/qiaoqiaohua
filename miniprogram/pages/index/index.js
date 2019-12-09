//index.js
const app = getApp()

Page({
  data: {
    messages: [
      { id: 1, content: '的事发生了'},
      { id: 2, content: 'ngfnfgh' },
      { id: 3, content: '12345' },
      { id: 4, content: '12dfsasd' },
      { id: 5, content: 'FDSAFdfa' },
      { id: 6, content: '的说法阿斯顿' },
      { id: 7, content: 'v不敢发你今天' },
      { id: 8, content: '的发言稿' },
      { id: 9, content: '宁国府' },
      { id: 10, content: '大睡特一号' },
      { id: 11, content: '倒萨犯得上' },
      { id: 12, content: '爱国会和' }
    ],
    barragePool: [],
    MAX_ROAD_SIZE: 3,
    content: 'dsfsd',
    tips: [
      { id: 1, content: '帅哥美女！！' },
      { id: 2, content: '你真的超有正义感！' },
      { id: 3, content: '我喜欢你' },
      { id: 4, content: '好帅哦!' }
    ]
  },

  onShow () {
  },

  init () {
    var pool = [];
    for (var i = 0; i < MAX_ROAD_SIZE; i++) {
      var roads = [];
      for (var j = 0; j < EACH_ROAD_MAX_BARRAGE_SIZE; j++) {
        roads[i]
      }
    }
  }
})
