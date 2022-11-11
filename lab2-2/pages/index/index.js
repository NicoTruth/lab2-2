// pages/home/home.js
Page({

  /**
   * Initial data of the page
   */
  data: {
     
  },
  goToHome:function(){
    wx.navigateTo({
      url: '../home/home',
    })
  },
})
