// pages/end/end.js
const app = getApp();
var checks = [];//chexkbox是否勾选
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: {},
    choose:0,//根据选择出现成绩单或奖状
    score:0,
    len:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for (var i = 0; i < app.globalData.wrongPaper.rights.length;i++){
      if (app.globalData.wrongPaper.rights[i]==1){
        this.data.score = this.data.score+1;
      }
    }
    this.setData({
      score: Math.floor(this.data.score / app.globalData.wrongPaper.rights.length*100),
      len: app.globalData.wrongPaper.rights.length 
    })
    this.data.list = app.globalData.wrongPaper;
    this.setData({
      list: this.data.list,
    })
    checks = this.data.list.rights;
  },
  change(e){
    this.setData({
      choose: e.currentTarget.dataset.n
    })
  },
  changCheck(e) {
    //console.log(e)
    if (checks[e.currentTarget.dataset.n] == 0) {
      checks[e.currentTarget.dataset.n] = 1;
    } else {
      checks[e.currentTarget.dataset.n] = 0;
    }
  },
  /**存储错题*/
  storage() {
    var wrongtitles = [];
    var that = this;
    wx.getStorage({
      key: 'wrongtitles',
      success: function (res) {
        wrongtitles = res.data;
        console.log(wrongtitles)
        for (var i = 0; i < checks.length; i++) {
          if (checks[i] == 0) {
            wrongtitles.unshift(that.data.list.equations[i] + that.data.list.results[i])
          }
        }
        console.log(wrongtitles)
        wx.setStorage({
          key: 'wrongtitles',
          data: wrongtitles,
        })
      },
      fail: function (res) {
        console.log(res)
        for (var i = 0; i < checks.length; i++) {
          if (checks[i] == 0) {
            wrongtitles.unshift(that.data.list.equations[i] + that.data.list.results[i])
          }
        }
        console.log(wrongtitles)
        wx.setStorage({
          key: 'wrongtitles',
          data: wrongtitles,
        })
      }
    })
  },
  toindex() {
    this.storage();
    wx.reLaunch({
      url: '../index/index',
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