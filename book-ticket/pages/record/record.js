// pages/borrow/borrow.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [],
    book: null,
    userInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(app.globalData.userid);
    var id = app.globalData.userid;
    var _this = this; //留住this
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        // console.log(res);
        _this.setData({
          userInfo: res.data,
        })
      },
    }),
      //向本地服务器发送请求
      wx.request({
      url: 'http://localhost:8080/wxReaderBorrowedServlet',
        data: { userId: id },
        success: function (res) {
          //console.log(res.data)
          if (res.data != null) {
            _this.setData({
              book: res.data,
            })
          }
          else {
            wx.showToast({
              title: '查询失败！',
            })
          }
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