Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  
  start: function(){
    //跳转到子页面，子页面自动添加返回按钮
    // wx.redirectTo({
    //    url: '/pages/posts/post'
    // });

    //跳转到平行页面
    // wx.redirectTo({
    //   url: '/pages/posts/post',
    // })

    // 跳转到带有Tab的页面
    wx.switchTab({
      url: '/pages/posts/post',
    })
  }
})