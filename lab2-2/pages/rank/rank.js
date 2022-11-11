const app = getApp()
Page({
    toFirstPage(){ //Jump to home page
      wx.switchTab({  
        url: '/pages/index/index'  
      });  
    },
    toGift(){   //Jump to gift page
      wx.switchTab({  
        url: '/pages/gift/gift'  
      });  
    },
})