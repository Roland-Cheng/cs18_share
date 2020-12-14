// pages/count/count.js
const app = getApp();
var inputRes = "";
Page({

  /**
   * 页面的初始数据
   */
  data: {

    res: 0, //结果
    rem: {}, //对生成算式的要求
    formula: "", //生成的算式
    val: "", //输入框数据
    hid: true,
    source: "/img/true.png",
    opt: 1 //父级页面，默认从年级选择进来，决定使用哪个produce函数
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.num = 0;
    app.globalData.wrongPaper.equations = [];
    app.globalData.wrongPaper.results = [];
    app.globalData.wrongPaper.rights = [];//更新全局变量
    this.setData({
      rem: JSON.parse(options.json) //将字符串转换成json
    })
    //console.log(this.data.rem)
    var result = -1;
    var formu = "";
    while (result == -1 || result < this.data.rem.minres || (this.data.rem.maxres > 0 && result > this.data.rem.maxres)) {
      formu = this.produce();
      result = this.getResult(formu);
    }
    this.setData({
      res: result,
      formula: formu
    })
  },
  random(max, min) {
    //console.log(Math.floor((Math.random()) * (max - min + 1) + min))
    return Math.floor((Math.random()) * (max - min + 1) + min);
  },
  /**生成算式 */
  produce() {
    //console.log("produce");
    var a = 0;
    var b = 0;
    var formu = "";
    a = this.random(this.data.rem.max[0], this.data.rem.min[0]);
    formu = formu + a;
    //console.log(formu);
    for (var i = 1; i < this.data.rem.oprations + 1; i++) {
      if (this.data.rem.max.length == 1) {
        a = this.random(this.data.rem.max[0], this.data.rem.min[0]);
      } else {
        a = this.random(this.data.rem.max[i], this.data.rem.min[i]);
      }
      if (this.data.rem.signal.length == 1) {
        b = this.getopra(this.data.rem.signal[0]); //每个操作数和运算符的要求都一样
      } else {
        b = this.getopra(this.data.rem.signal[i - 1]);
      }
      formu = formu + b + a;
    }
    return formu;
  },
  /**得到结果 */
  getResult(equation) {
    //console.log(equation)
    equation = equation.replace(/×/g, '*').replace(/÷/g, '/'); //将乘除替换
    //console.log(equation)
    return this.evalRpn(this.dal2Rpn(equation));
  },
  /**判断是否是运算符 */
  isOperator(cur) {
    var operatorString = "+-*/()";
    return operatorString.indexOf(cur) > -1
  },
  /**获得运算符优先级 */
  getPrioraty(cur) {
    if (cur == '+' || cur == '-') {
      return 1;
    } else if (cur == '*' || cur == '/') {
      return 2;
    } else return 0;
  },
  /**比较运算符优先级 */
  prioraty(o1, o2) {
    return this.getPrioraty(o1) <= this.getPrioraty(o2);
  },
  /**将中缀表达式转化成波兰表达式 */
  dal2Rpn(exp) {
    var inputStack = [];
    var outputStack = [];
    var outputQueue = [];
    for (var i = 0, len = exp.length; i < len; i++) {
      var cur = exp[i];
      if (cur != ' ') {
        inputStack.push(cur);
      }
    }
    //console.log(inputStack);
    //console.log('step one');
    while (inputStack.length > 0) {
      var cur = inputStack.shift();
      var val = '';
      while (!this.isOperator(cur) && inputStack.length > 0) {
        val = val + cur;
        cur = inputStack.shift();
      }//得到操作数
      if (inputStack.length == 0 && !this.isOperator(cur)) val = val + cur;//单独处理最后一个数字
      //console.log(val)
      outputQueue.push(parseInt(val));//将操作数压栈
      if (this.isOperator(cur)) {//处理运算符
        if (cur == '(') {
          outputStack.push(cur);
        } else if (cur == ')') {
          var opra = outputStack.pop();
          while (opra != '(' && outputStack.length > 0) {
            outputQueue.push(opra);
            opra = outputStack.pop();
          }
          if (opra != '(') {
            throw "error: unmatched ()";
          }
        } else {
          while (this.prioraty(cur, outputStack[outputStack.length - 1]) && outputStack.length > 0) {
            outputQueue.push(outputStack.pop());
          }
          outputStack.push(cur);
          //console.log(outputStack)
        }
      }
    }
    //console.log('step two');
    if (outputStack.length > 0) {
      if (outputStack[outputStack.length - 1] == ')' || outputStack[outputStack.length - 1] == '(') {
        throw "error: unmatched ()";
      }
      while (outputStack.length > 0) {
        outputQueue.push(outputStack.pop());
      }
    }
    //console.log('step three');
    //console.log("波兰表达式：")
    //console.log(outputQueue)
    return outputQueue;
  },
  evalRpn(rpnQueue) {
    var outputStack = [];
    while (rpnQueue.length > 0) {
      var cur = rpnQueue.shift();

      if (!this.isOperator(cur)) {
        outputStack.push(cur);
      } else {
        if (outputStack.length < 2) {
          //throw "unvalid stack length";
        }
        var sec = outputStack.pop();
        var fir = outputStack.pop();
        var res1 = this.getRes(fir, sec, cur);
        if (res1 == -1) return -1;
        else {
          outputStack.push(res1);
        }
      }
    }
    if (outputStack.length != 1) {
      //throw "unvalid expression";
    } else {
      console.log("结果")
      console.log(outputStack[0])
      return outputStack[0];
    }
  },
  /**只有一个运算符结果 */
  getRes(fir, sec, cur) {
    switch (cur) {
      case '+':
        {
          return parseInt(fir) + parseInt(sec);
          break;
        }
      case '-':
        {
          if (parseInt(fir) - parseInt(sec) >= 0) {
            return parseInt(fir) - parseInt(sec);
          }
          else return -1;
          break;
        }
      case '*':
        {
          if (this.data.rem.maxplusres > 0 && parseInt(fir) * parseInt(sec) > this.data.rem.maxplusres) {
            return -1;
          } else return parseInt(fir) * parseInt(sec);
          break;
        }
      case '/':
        {
          if (parseInt(fir) / parseInt(sec) % 1 === 0 && parseInt(sec) != 0) {
            return parseInt(fir) / parseInt(sec);
          }
          else return -1;
          break;
        }
    }
  },
  /**判断是否重复 */
  isRepeat(formula){
    for(var i=0;i<app.globalData.wrongPaper.equations.length;i++){
      if ((formula+'=') == app.globalData.wrongPaper.equations[i]){
        return -1;
      }
    }
  },
  /**根据传过来的参数确定运算符 */
  getopra(sig) {
    var signals = "+-×÷";
    if (sig < 5) {
      return signals[sig - 1];
    } else {
      switch (sig) {
        case 5:
          {
            var signals1 = "+-";
            return signals1[this.random(1, 0)];
            break;
          }
        case 6:
          {
            var signals1 = "+×";
            return signals1[this.random(1, 0)];
            break;
          }
        case 7:
          {
            var signals1 = "+÷";
            return signals1[this.random(1, 0)];
            break;
          }
        case 8:
          {
            var signals1 = "-×";
            return signals1[this.random(1, 0)];
            break;
          }
        case 9:
          {
            var signals1 = "-÷";
            return signals1[this.random(1, 0)];
            break;
          }
        case 10:
          {
            var signals1 = "×÷";
            return signals1[this.random(1, 0)];
            break;
          }
        case 11:
          {
            var signals1 = "+-×";
            return signals1[this.random(2, 0)];
            break;
          }
        case 12:
          {
            var signals1 = "+-÷";
            return signals1[this.random(2, 0)];
            break;
          }
        case 13:
          {
            var signals1 = "+×÷";
            return signals1[this.random(2, 0)];
            break;
          }
        case 14:
          {
            var signals1 = "-×÷";
            return signals1[this.random(2, 0)];
            break;
          }
        case 15:
          {
            var signals1 = "+/×÷";
            return signals1[this.random(3, 0)];
            break;
          }
      }
    }
  },
  /**input组件触发事件 */
  input(e) {
    //console.log(e)
    this.setData({
      val: e.detail.value
    })
  },
  /**计算器按键触发事件 */
  input2(e) {
    //console.log(e)
    this.setData({
      val: this.data.val + e.currentTarget.dataset.n
    })
  },
  /**计算器删除键触发事件 */
  delete1() {
    var str = this.data.val;
    this.setData({
      val: str.substring(0, str.length - 1)
    })
  },
  /**计算器清空键触发事件 */
  clear() {
    this.setData({
      val: ""
    })
  },
  /**计算器确认键触发事件 */
  confirm() {
    var a = 0;
    if (parseInt(this.data.val) == this.data.res) {
      a = 1;
      this.setData({
        hid: false,
        source: "/img/true.png"
      })
    } //答案正确
    else {
      this.setData({
        hid: false,
        source: "/img/false.png"
      })
    }
    inputRes = this.data.val;
    app.globalData.num = app.globalData.num + 1;
    app.globalData.wrongPaper.equations[app.globalData.num - 1] = this.data.formula + '=';
    app.globalData.wrongPaper.input[app.globalData.num - 1] = inputRes;
    app.globalData.wrongPaper.results[app.globalData.num - 1] = this.data.res;
    app.globalData.wrongPaper.rights[app.globalData.num - 1] = a;
    if (app.globalData.num < app.globalData.inputnum ) {
      var that = this;
      setTimeout(function () {
        that.setData({
          val: ""
        })
        that.setData({
          hid: true
        })
        var result = -1;
        var formu = "";
        while (result == -1 || result < that.data.rem.minres || (that.data.rem.maxres > 0 && result > that.data.rem.maxres)||that.isRepeat(formu)==-1) {
          formu = that.produce();
          result = that.getResult(formu);
        }
        that.setData({
          res: result,
          formula: formu
        })
      }, 1300) //画面暂停1.3s后更新
    } else {
      //console.log(app.globalData.wrongPaper.equations)
      wx.reLaunch({
        url: '../end/end',
      })
    }
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