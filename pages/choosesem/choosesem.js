// pages/choosesem/choosesem.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list11: [{
      title: "5以内加减法",
      oprations: 1,//运算符数
      signal: [5],//运算符类型，5表示+-
      max: [5],
      min: [1],//操作数范围
      maxplusres: 0,//乘法最大结果
      maxres: 0,
      minres: 0//最终结果限制
    },
    {
      title: "10以内加减法",
      oprations: 1,//运算符数
      signal: [5],//运算符类型，5表示+-
      max: [10],
      min: [1],//操作数范围
      maxplusres: 0,//乘法最大结果
      maxres: 0,
      minres: 0//最终结果限制
    },
    {
      title: "15以内加减法",
      oprations: 1,//运算符数
      signal: [5],//运算符类型，5表示+-
      max: [5],
      min: [1],//操作数范围
      maxplusres: 0,//乘法最大结果
      maxres: 0,
      minres: 0//最终结果限制
    },
    {
      title: "20以内加减法",
      oprations: 1,//运算符数
      signal: [5],//运算符类型，5表示+-
      max: [5],
      min: [1],//操作数范围
      maxplusres: 0,//乘法最大结果
      maxres: 0,
      minres: 0//最终结果限制
    }
    ],
    list12: [
      {
        title: "20以内非退位减法",
        oprations: 1,//运算符数
        signal: [2],//运算符类型，5表示+-
        max: [19, 9],
        min: [10, 1],//操作数范围
        maxplusres: 0,//乘法最大结果
        maxres: 0,
        minres: 10//最终结果限制
      },
      {
        title: "20以内退位减法",
        oprations: 1,//运算符数
        signal: [2],//运算符类型，5表示+-
        max: [19, 9],
        min: [10, 1],//操作数范围
        maxplusres: 0,//乘法最大结果
        maxres: 9,
        minres: 0//最终结果限制
      },
      {
        title: "20以内的三数连加",
        oprations: 2,//运算符数
        signal: [1],//运算符类型，5表示+-
        max: [19],
        min: [1],//操作数范围
        maxplusres: 0,//乘法最大结果
        maxres: 20,
        minres: 0//最终结果限制
      },
      {
        title: "大于20的两位数加1位数",
        oprations: 1,//运算符数
        signal: [1],//运算符类型，5表示+-
        max: [99, 9],
        min: [20, 1],//操作数范围
        maxplusres: 0,//乘法最大结果
        maxres: 99,
        minres: 0//最终结果限制
      },
      {
        title: "大于20的两位数减1位数",
        oprations: 1,//运算符数
        signal: [2],//运算符类型，5表示+-
        max: [99, 9],
        min: [20, 1],//操作数范围
        maxplusres: 0,//乘法最大结果
        maxres: 99,
        minres: 0//最终结果限制
      }
    ],
    list21: [{
      title: "100以内加法",
      oprations: 1,//运算符数
      signal: [1],//运算符类型，5表示+-
      max: [99],
      min: [1],//操作数范围
      maxplusres: 0,//乘法最大结果
      maxres: 100,
      minres: 0//最终结果限制
    },
    {
      title: "100以内减法",
      oprations: 1,//运算符数
      signal: [2],//运算符类型，5表示+-
      max: [99],
      min: [1],//操作数范围
      maxplusres: 0,//乘法最大结果
      maxres: 0,
      minres: 0//最终结果限制
    },
    {
      title: "100以内三数连加",
      oprations: 2,//运算符数
      signal: [1],//运算符类型，5表示+-
      max: [99],
      min: [1],//操作数范围
      maxplusres: 0,//乘法最大结果
      maxres: 100,
      minres: 0//最终结果限制
    },
    {
      title: "100以内的三数连减",
      oprations: 2,//运算符数
      signal: [2],//运算符类型，5表示+-
      max: [99],
      min: [1],//操作数范围
      maxplusres: 0,//乘法最大结果
      maxres: 0,
      minres: 0//最终结果限制
    },
    {
      title: "100减一两位数",
      oprations: 1,//运算符数
      signal: [2],//运算符类型，5表示+-
      max: [100, 99],
      min: [100, 10],//操作数范围
      maxplusres: 0,//乘法最大结果
      maxres: 0,
      minres: 10//最终结果限制
    },
    ],
    list22: [
      {
        title: "乘法口诀",
        oprations: 1,//运算符数
        signal: [3],//运算符类型，5表示+-
        max: [9],
        min: [1],//操作数范围
        maxplusres: 0,//乘法最大结果
        maxres: 0,
        minres: 0//最终结果限制
      },
      {
        title: "乘法和加减混合运算",
        oprations: 2,//运算符数
        signal: [3, 5],//运算符类型，5表示+-
        max: [99, 9, 99],
        min: [1, 1,],//操作数范围
        maxplusres: 0,//乘法最大结果
        maxres: 0,
        minres: 0//最终结果限制
      },
      {
        title: "除法和加减混合运算",
        oprations: 2,//运算符数
        signal: [4, 5],//运算符类型，5表示+-
        max: [99, 9, 99],
        min: [1, 1, 1],//操作数范围
        maxplusres: 0,//乘法最大结果
        maxres: 0,
        minres: 0//最终结果限制
      },
      {
        title: "除法口诀",
        oprations: 1,//运算符数
        signal: [4],//运算符类型，5表示+-
        max: [99, 9],
        min: [1, 1],//操作数范围
        maxplusres: 0,//乘法最大结果
        maxres: 0,
        minres: 0//最终结果限制
      }
    ],
    list31: [{
      title: "20以内的两位数乘以个位数",
      oprations: 1,//运算符数
      signal: [3],//运算符类型，5表示+-
      max: [20, 9],
      min: [1, 1],//操作数范围
      maxplusres: 0,//乘法最大结果
      maxres: 0,
      minres: 0//最终结果限制
    },
    {
      title: "三位数乘一位数",
      oprations: 1,//运算符数
      signal: [3],//运算符类型，5表示+-
      max: [999, 9],
      min: [100, 1],//操作数范围
      maxplusres: 0,//乘法最大结果
      maxres: 0,
      minres: 0//最终结果限制
    },
    {
      title: "三位数与两位数加减法",
      oprations: 1,//运算符数
      signal: [5],//运算符类型，5表示+-
      max: [999, 99],
      min: [100, 10],//操作数范围
      maxplusres: 0,//乘法最大结果
      maxres: 100,
      minres: 0//最终结果限制
    },
    {
      title: "三位数与三位数加减法",
      oprations: 1,//运算符数
      signal: [5],//运算符类型，5表示+-
      max: [999],
      min: [100],//操作数范围
      maxplusres: 0,//乘法最大结果
      maxres: 0,
      minres: 0//最终结果限制
    }
    ],
    list32: [{
      title: "两位数除以一位数",
      oprations: 1,//运算符数
      signal: [4],//运算符类型，5表示+-
      max: [99, 9],
      min: [10, 1],//操作数范围
      maxplusres: 0,//乘法最大结果
      maxres: 0,
      minres: 0//最终结果限制
    },
    {
      title: "三位数除以一位数",
      oprations: 1,//运算符数
      signal: [4],//运算符类型，5表示+-
      max: [999, 9],
      min: [100, 1],//操作数范围
      maxplusres: 0,//乘法最大结果
      maxres: 0,
      minres: 0//最终结果限制
    },
    {
      title: "两位数乘两位数",
      oprations: 1,//运算符数
      signal: [3],//运算符类型，5表示+-
      max: [99],
      min: [10],//操作数范围
      maxplusres: 0,//乘法最大结果
      maxres: 0,
      minres: 0//最终结果限制
    }
    ],
    list: [],
    sem: 1,//页面初始默认上学期
    grade: 2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.inputnum = 10;
    this.data.grade = options.grade;
    this.judge();
  },
  /**判断年级学期刷新页面 */
  judge() {
    if (this.data.grade == 1) {
      switch (this.data.sem) {
        case 1:
          {
            this.setData({
              list: this.data.list11
            })
            break;
          }
        case 2:
          {
            this.setData({
              list: this.data.list12
            })
            break;
          }
      }
    }
    if (this.data.grade == 2) {
      switch (this.data.sem) {
        case 1:
          {
            this.setData({
              list: this.data.list21
            })
            break;
          }
        case 2:
          {
            this.setData({
              list: this.data.list22
            })
            break;
          }
      }
    }
    if (this.data.grade == 3) {
      switch (this.data.sem) {
        case 1:
          {
            this.setData({
              list: this.data.list31
            })
            break;
          }
        case 2:
          {
            this.setData({
              list: this.data.list32
            })
            break;
          }
      }
    }
  },
  choose(e) {
    //console.log(e);
    this.data.sem = e.currentTarget.dataset.n;
    this.judge();
  },//改变学期，刷新页面
  tocount(e) {
    // console.log(e)
    // console.log(this.data.list[e.currentTarget.dataset.n])
    wx.navigateTo({
      url: '../count/count?json=' + JSON.stringify(this.data.list[e.currentTarget.dataset.n]),
      //将json转换为字符串传递
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