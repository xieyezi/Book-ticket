// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrSwiper: [
      {
        url: "/pages/index/index",
        src: "/images/index3.jpg"
      },
      {
        url: "/pages/books/books",
        src: "/images/index2.jpg"
      },
      {
        url: "/pages/login/login",
        src: "/images/index1.jpg"
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //向服务器发送请求
    //http://news-at.zhihu.com/api/4/news/latest
    var that = this;
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      success: function (res) {
        // console.log(res.data);
        that.setData({
          arr: res.data.stories
        })
      }
    })
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