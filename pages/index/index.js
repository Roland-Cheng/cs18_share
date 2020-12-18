// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  togra(){
    wx.navigateTo({
      url: '../choosegra/choosegra',//跳转选择年级
    })
  },
  totype(){
    wx.navigateTo({
      url: '../choosetype/choosetype',//跳转定制题目类型
    })
  },
  towrong(){
    wx.navigateTo({
      url: '../wrongset/wrongset',//跳转错题本
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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