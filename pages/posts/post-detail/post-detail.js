const postsData = require('../../../data/posts-data.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postId: null,
    collected: false,
    isPlayMusic: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const postId = options.id;
    const postData = postsData.postList[postId];

    this.setData(postData); //文章详情内容获取
    this.setData({
      postId: postId //文章id获取
    });

    //本地缓存获取用户是否收藏的数据
    //{
    //  0: true,
    //  1: false,
    //  2: false
    //  ...
    //}
    const posts_collected = wx.getStorageSync('posts_collected');
    if (posts_collected) {
      let temp_collected = posts_collected[postId];
      this.setData({
        collected: temp_collected ? temp_collected : false //collected不能设置为undifined
      });
    } else {
      let posts_collected = {};
      posts_collected[postId] = false;
      wx.setStorageSync('posts_collected', posts_collected);
    }

    this.handlePlayingMusicStatus();
  },

  //监听音乐播放的状态，改变播放器状态
  handlePlayingMusicStatus: function() {
    const _this = this;
    //通过全局变量记录播放器状态
    _this.setData({
      isPlayMusic: app.globalData.G_playingMusic && app.globalData.G_playingMusicId ===               _this.data.postId
    });

    //监听微信内置播放器的操作状态
    wx.onBackgroundAudioPlay(function () {
      _this.setData({
        isPlayMusic: true
      });
      app.globalData.G_playingMusic = true;
      //记录当前播放的音乐ID
      app.globalData.G_playingMusicId = _this.data.postId;
    });
    wx.onBackgroundAudioPause(function() {
      _this.setData({
        isPlayMusic: false
      });
      app.globalData.G_playingMusic = false;
      //记录当前播放的音乐ID
      app.globalData.G_playingMusicId = null;
    });
    wx.onBackgroundAudioStop(function(){
      _this.setData({
        isPlayMusic: false
      });
      app.globalData.G_playingMusic = false;
      //记录当前播放的音乐ID
      app.globalData.G_playingMusicId = null;
    });

  },
  //用户收藏的操作
  onCollectedTap: function() {
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
  tipsToast: function(ctd) {
    wx.showToast({
      title: ctd ? '收藏成功' : '取消成功',
      duration: 1000
    })
  },

  //播放背景音乐
  onPlayMusic: function() {
    //播放处理
    if (this.data.isPlayMusic) {
      wx.pauseBackgroundAudio();
    } 
    else {
      let music = this.data.music;
      wx.playBackgroundAudio({
        dataUrl: music.url,
        title: music.title,
        coverImgUrl: music.coverImg
      })
    }
  }
})