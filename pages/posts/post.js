// pages/posts/post.js
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
    var posts_content = [
      {
        date: "Sep 12 2018",
        post_image: "/assets/images/post/crab.png",
        auth_image: "/assets/images/avatar/1.png",
        content: "虎扑7月1日讯 美国媒体Timeless Sports今天在推特上发布了一张勇士前锋凯文-杜兰特和步行者球员赛迪斯-杨在2006年麦当劳全明星赛上的照片。",
        view_num: "115",
        collect_num: "42"
      },
      {
        date: "Oct 06 2018",
        post_image: "/assets/images/post/bl.png",
        auth_image: "/assets/images/avatar/2.png",
        content: "伊拉克战争时期，来自美国德州的19岁技术兵比利·林恩（乔·阿尔文 Joe Alwyn 饰）因为一段偶然拍摄的视频而家喻户晓。那是一次规模不大却激烈非常的遭遇战…",
        view_num: "68",
        collect_num: "12"
      }
    ];
    this.setData({ posts_content, posts_content});
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