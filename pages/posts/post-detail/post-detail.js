const postsData = require('../../../data/posts-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    postId: '',
    collected: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const postId = options.id;
    const postData = postsData.postList[postId];

    this.setData(postData); //文章详情内容获取
    this.setData({
      postId: postId      //文章id获取
    });

    //本地缓存获取用户是否收藏的数据
    //{
    //  0: true,
    //  1: false,
    //  2: false
    //  ...
    //}
    const posts_collected = wx.getStorageSync('posts_collected');
    if (posts_collected){
      let temp_collected = posts_collected[postId];
      this.setData({
        collected: temp_collected? temp_collected: false  //collected不能设置为undifined
      });
    }else{
      let posts_collected = {};
      posts_collected[postId] = false;
      wx.setStorageSync('posts_collected', posts_collected);
    }
  },

  //用户收藏的操作
  onCollectedTap: function(){
    //是否收藏取反处理
    this.setData({
      collected: !this.data.collected
    });
  
    //本地缓存更新
    const posts_collected = wx.getStorageSync('posts_collected');
    posts_collected[this.data.postId] = this.data.collected;
    wx.setStorageSync('posts_collected', posts_collected);

    this.tipsToast(this.data.collected);
  },
  //用户toast提示
  tipsToast: function (ctd){
    wx.showToast({
      title: ctd ? '收藏成功' :'取消成功',
      duration: 1000
    })
  }
})