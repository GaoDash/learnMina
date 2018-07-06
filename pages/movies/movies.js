const app = getApp();
const util = require('../../utils/util.js');  //只支持相对定位

Page({

  /**
   * 页面的初始数据
   * ！!页面异步进行数据绑定时，需要设置默认变量，否则会出现错误。
   */
  data: {
    inTheaters:[],
    comingsoon:[],
    top250: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const inTheatersUrl = app.globalData.G_doubanBaseUrl + '/v2/movie/in_theaters' + '?start=0&count=3'; //正在上映
    const comingsoonUrl = app.globalData.G_doubanBaseUrl + '/v2/movie/coming_soon' + '?start=0&count=3'; //即将上映
    const top250Url     = app.globalData.G_doubanBaseUrl + '/v2/movie/top250' + '?start=0&count=3';      //Top250

    this.getMovieListData(inTheatersUrl, "inTheaters");
    this.getMovieListData(comingsoonUrl, "comingsoon");
    this.getMovieListData(top250Url, "top250");
  },

  getMovieListData: function (url, settedKey){
    const that = this;
    wx.request({
      url: url,
      method: 'GET',
      success: function (res) {
        //console.log(res.data)
        that.handleMovieData(res.data, settedKey);
      },
      fail: function (error) {
        console.log(error);
      }
    });
  },
  //处理豆瓣api数据
  handleMovieData: function(data, settedKey){
    const movieItems = [];
    for (let subject of data.subjects){
      //console.log(subject);
      const temp = {
        title: subject.title,
        average: subject.rating.average,
        coverUrl: subject.images.large,
        stars: util.starsLevel(subject.rating.stars),
        movieId: subject.id
      }
      movieItems.push(temp);
    }
    // console.log(movieItems);
    // movieItems=[{…},{…},{…}]
    // readyData={"inTheaters":{"movies":[{…},{…},{…}]}}
    let readyData = {};
    readyData[settedKey] = {
      "movies": movieItems
    };
    console.log(readyData);
    this.setData(readyData);
  }

})