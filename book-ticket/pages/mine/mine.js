// pages/mine/mine.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    isLogin: false,
    userInfo: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this; //留住this
    //获取缓存的userInfo，判断用户是否已经登录
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        if(res.data!=null){
          _this.setData({
            userInfo: res.data,
            isLogin: true
          })
        }
       
        //app.globalData.userid = res.data[0].userId;
      },
    })
    // wx.getStorage({
    //   key: 'usertype',
    //   success: function(res) {
    //     // console.log(res),
    //     _this.setData({
    //       usertype: res.data,
    //     })
    //   },
    // })
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

  },
  listenerPickerSelected:function(e){
    this.setData({
      index: e.detail.value
    });
  },
  userLogin: function (e) {
    // console.log(e);
    //向jsp发送请求，判断用户是否存在
    var _this = this;
    var id = e.detail.value.user;
    var pwd = e.detail.value.pwd;
   
    wx.request({
      url: 'http://localhost:8080/wxLoginCheckServlet',
      data: { userId: id, password: pwd},
      success: function (res) {
        //console.log(res);
        if (res.data!=null) {
          //设置用户信息数据以及用户登录状态
          _this.setData({
            userInfo: res.data,
            isLogin: true
          });
          app.globalData.userid = res.data.account;
          //使用缓存来存储用户信息
          wx.setStorage({
            key: 'userInfo',
            data: res.data,
            success: function (){
              wx.showToast({
                title: '登录成功！',
              })
            }
          })
        }
        else {
          wx.showToast({
            title: '账号或密码错误！',
          })
        }
      }
    })
  },
  exitLogin: function () {
    //1.清缓存
    var _this = this;
    wx.removeStorage({
      key: 'userInfo',
      success: function (res) {
        //2.userInfo重置为null
        //3.登录状态isLogin=false
        _this.setData({
          userInfo: null,
          isLogin: false
        })
        //给出提示信息
        wx.showToast({
          title: '退出成功！',
        })
      },
    })
  },
  personnal:function(){
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  alterperson:function(){
    wx.navigateTo({
      url: '/pages/person/person',
    })
  },
  alterpwd:function(){
    wx.navigateTo({
      url: '/pages/alterpwd/alterpwd',
    })
  },
})