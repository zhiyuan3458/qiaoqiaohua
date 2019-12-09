// components/music/music.js
Component({
  externalClasses: ['custom-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    /** 音乐播放器地址 */
    musicUrl: {
      type: String,
      value: 'http://sc1.111ttt.cn:8281/mp3/6872c9c5f84ac8a0444574c3dffc0cea/2017/1/11/11/304112002347.mp3'
    },
    /** 音乐标题 */
    title: {
      type: String,
      value: '此时此刻'
    }
  },

  lifetimes: {
    attached () {
      this.autoplay();
      // this.playMusic();
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isOn: true,
    innerAudio: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    playMusic () {
      this.setData({
        isOn: !this.data.isOn
      });
      if (this.data.isOn) {
        this.data.innerAudio.play();
      } else {
        this.data.innerAudio.pause();
      }
    },
    /**
  * 自动循环播放音乐
  */
    autoplay () {
      const innerAudio = wx.createInnerAudioContext();
      this.setData({
        innerAudio: innerAudio
      });
      innerAudio.title = this.data.title;
      innerAudio.src = this.data.musicUrl;
      innerAudio.loop = true;
      innerAudio.play();
    }
  }
})
