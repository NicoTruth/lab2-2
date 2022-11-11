Page({
  /**
   * Initial data of the page
   */
  data: {
    resultList: [],
    rank: "", //Result of judgment
    img: [],
    // Dice picture address
    dices: [
      '../../image/playDice.gif',
      '../../image/dice1.png',
      '../../image/dice2.png',
      '../../image/dice3.png',
      '../../image/dice4.png',
      '../../image/dice5.png',
      '../../image/dice6.png',
    ],

    //bobing result
    dicelist: [],

    result: {
      result: {
        name: '一秀',
        score: 0
      }
    }
  },

  click() {
    console.log("点击投掷")
    this.setData({
      img: "/image/playDice.gif",
      dicelist: [],
      rank: ""
    })
    setTimeout(() => {
      this.setData({
        img: ""
      })
      this.result()
    }, 1000)
  },

  random(min, max) { //Generate random number
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  result() {
    var list = [];
    var listsrc = [];
    var one = 0; //Statistical throwing results
    var two = 0;
    var three = 0;
    var four = 0;
    var five = 0;
    var six = 0;
    for (var i = 0; i < 6; i++) {
      var t = this.random(1, 6);
      list.push(t);
      if (t == 1) one++;
      if (t == 2) two++;
      if (t == 3) three++;
      if (t == 4) four++;
      if (t == 5) five++;
      if (t == 6) six++;
    }
    this.setData({
      resultList: list
    })
    for (var i = 0; i < 6; i++) {
      var dicesrc = "/image/dice" + this.data.resultList[i] + ".png"
      listsrc.push(dicesrc)
    }
    this.setData({
      dicelist: listsrc,
    })
    var flag = 0;
    if (one == 1 && two == 1 && three == 1 && four == 1 && five == 1 && six == 1) {
      this.setData({
        rank: "对堂~",
      })
      flag = 1
    } else {
      if (four == 1) {
        this.setData({
          rank: "一秀~",
        })
        flag = 1
      }
      if (four == 2) {
        this.setData({
          rank: "二举~",
        })
        flag = 1
      }
      if (four == 3) {
        this.setData({
          rank: "三红~",
        })
        flag = 1
      }
      if (four == 4) {
        if (one == 2) {
          this.setData({
            rank: "状元插金花，寿命-10",
          })
          flag = 1
        } else {
          this.setData({
            rank: "状元！！！",
          })
          flag = 1
        }
      }
      if (four == 6) {
        this.setData({
          rank: "六杯红，有狗运",
        })
        flag = 1
      }
      if (three == 4) {
        this.setData({
          rank: "四进~",
        })
        flag = 1
      }
      if (three == 5) {
        this.setData({
          rank: "五王，有狗运",
        })
        flag = 1
      }
      if (six == 6) {
        this.setData({
          rank: "六杯黑，有狗运",
        })
        flag = 1
      }
    }
    if (flag == 0) {
      this.setData({
        rank: "啥也不是，懂？",
      })
    }
    console.log("输出投掷结果:", this.data.rank)
  },
  toFirstPage() { //junp main page
    wx.switchTab({
      url: '/pages/index/index'
    });
  },

  /**
   * Life cycle function -- listening for page loading
   */
  onLoad: function () {

  },

  /**
   *Life cycle function -- monitor the completion of the first rendering of the page
   */
  onReady: function () {

  },

  /**
   * Life cycle function -- monitor page display
   */
  onShow: function () {

  },

  /**
   * Life cycle function -- listening for page hiding
   */
  onHide: function () {

  },

  /**
   * Life cycle function -- listen for page unloading
   */
  onUnload: function () {

  },

  /**
   * Page related event handler -- listen to user drop-down actions
   */
  onPullDownRefresh: function () {

  },

  /**
   * Page related event handler -- listen to user drop-down actions
   */
  onReachBottom: function () {

  },

  /**
   * Users click the upper right corner to share
   */
  onShareAppMessage: function () {

  }
})