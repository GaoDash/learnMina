var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const inTheatersUrl = app.globalData.G_doubanBaseUrl + '/v2/movie/in_theaters'; //正在上映
    const comingsoonUrl = app.globalData.G_doubanBaseUrl + '/v2/movie/coming_soon'; //即将上映
    const top250        = app.globalData.G_doubanBaseUrl + '/v2/movie/top250';      //Top250

    this.getMovieListData(inTheatersUrl);
    this.getMovieListData(comingsoonUrl);
    this.getMovieListData(top250);
  },

  getMovieListData: function(url){
    wx.request({
      url: url,
      method: 'GET',
      // header: {
      //   'content-type': 'application/json'
      // },
      success: function (res) {
        console.log(res.data)
      },
      fail: function (error) {
        console.log(error);
      }
    });
  }
})