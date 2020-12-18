// pages/userdef/userdef.js
var list = { title: "按题型", oprations: 1, signal: [5], max: [5], min: [1], maxplusres: 0, maxres: 0, minres: 0 };
const app=getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    num: 10,
    number1: 0,
    number2: 10,
    number3: 0,
    number4: 10,
    number5: 0,
    number6: 50
  },
  add: function () {
    if (this.data.num + 1 <= 50) {
      this.setData({
        num: this.data.num + 1
      })
    }
  },
  dec: function () {
    if (this.data.num - 1 >= 0) {
      this.setData({
        num: this.data.num - 1
      })
    }
  },
  add1: function () {
    if (this.data.number1 + 1 <= this.data.number2) {
      this.setData({
        number1: this.data.number1 + 1
      })
    }
  },
  dec1: function () {
    if (this.data.number1 - 1 >= 0) {
      this.setData({
        number1: this.data.number1 - 1
      })
    }
  },
  add2: function () {
    this.setData({
      number2: this.data.number2 + 1
    })
  },
  dec2: function () {
    if (this.data.number2 - 1 >= this.data.number1) {
      this.setData({
        number2: this.data.number2 - 1
      })
    }
  },
  add3: function () {
    if (this.data.number3 + 1 <= 20) {
      this.setData({
        number3: this.data.number3 + 1
      })
    }
  },
  dec3: function () {
    if (this.data.number3 - 1 >= 0) {
      this.setData({
        number3: this.data.number3 - 1
      })
    }
  },
  add4: function () {
    this.setData({
      number4: this.data.number4 + 1
    })
  },
  dec4: function () {
    this.setData({
      number4: this.data.number4 - 1
    })
  },
  add5: function () {
    if (this.data.number5 + 1 <= this.data.number6) {
      this.setData({
        number5: this.data.number5 + 1
      })
    }
  },
  dec5: function () {
    if (this.data.number5 - 1 >= 0) {
      this.setData({
        number5: this.data.number5 - 1
      })
    }
  },
  add6: function () {
    this.setData({
      number6: this.data.number6 + 1
    })
  },
  dec6: function () {
    if (this.data.number6 - 1 >= this.data.number5) {
      this.setData({
        number6: this.data.number6 - 1
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    list.signal[0] = parseInt(options.signal);
    console.log(list.signal)
  },
  tocount() {
    app.globalData.inputnum = this.data.num;
    list.oprations = this.data.number3;
    list.max[0] = this.data.number2;
    list.min[0] = this.data.number1;
    list.maxres = this.data.number6;
    list.minres = this.data.number5;
      wx.navigateTo({
        url: '../count/count?json=' + JSON.stringify(list),
      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})