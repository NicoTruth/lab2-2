// pages/home/home.js
  
Page({

    /**
     * Initial data of the page
     */
    data: {
       
    },

    /**
     * Life cycle function -- listening for page loading
     */
    onLoad: function (options) {

    },

    goToSingle:function(){
        wx.navigateTo({
          url: '../single_game/single_game',
        })
      },

      goToGroup:function(){
        wx.navigateTo({
          url: '../group_game/group_game',
        })
      },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * Life cycle function -- monitor the completion of the first rendering of the page
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
     * Handler for bottom pull event on page
     */
    onPullDownRefresh: function () {

    },

    /**
     * Handler for bottom pull event on page
     */
    onReachBottom: function () {

    },

    /**
     * Users click the upper right corner to share
     */
    onShareAppMessage: function () {
    }
})
