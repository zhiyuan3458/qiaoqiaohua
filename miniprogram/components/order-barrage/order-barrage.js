// components/order/order.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    height: {
      type: 'Number',
      value: 400
    },
    /** 弹幕数组 */
    barrageArr: {
      type: Array
    },
    /** 分成多少行 */
    row: {
      type: Number,
      value: 3
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _barrageArr: [],
    _speeds: []
  },

  lifetimes: {
    attached () {
      this.generateSpeed();
      const barrageArr = this.toTwoDimension(this.data.barrageArr);
      this.setData({
        _barrageArr: barrageArr
      });
      console.log(this.data._speeds);
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /** 变为二维数组 */
    toTwoDimension () {
      const arr = [];
      const sizeEachRow = this.data.barrageArr.length % this.data.row === 0 ? this.data.barrageArr.length / this.data.row : Math.floor(this.data.barrageArr.length / this.data.row) + 1;
      for (var i = 0; i < this.data.row; i++) {
        arr.push(this.data.barrageArr.slice(i * sizeEachRow, (i + 1) * sizeEachRow));
      }
      return arr;
    },
    /** 随机生成每组的移动速度 */
    generateSpeed () {
      var arr = [];
      for (var i = 0; i < this.data.row; i++) {
        const temp = Math.floor(20 * Math.random() * i) + 20;
        arr.push(temp);
      }
      this.setData({
        _speeds: arr
      });
    }
  }
})
