const posts_content = require('../../data/posts-data.js'); //必须是相对路径

Page({

  /**
   * 页面的初始数据
   */
  data: {
    posts_content: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      posts_content: posts_content.postList
    });
  },
  onPostTap: function(event){
    const postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: './post-detail/post-detail?id=' + postId
    })
  },
  //轮播组件的跳转，使用冒泡机制
  onSwiperTap: function(event){
    const postId = event.target.dataset.postid;
    wx.navigateTo({
      url: './post-detail/post-detail?id=' + postId
    })
  }
})