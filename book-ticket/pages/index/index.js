// pages/index/index.js
var app =getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [],
    dates: '出发日期',
    dep:null,
    arr:null,
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
  // search:function(){
  //   wx.navigateTo({
  //     url: '/pages/result/result',
  //   })
  // },
  //  点击日期组件确定事件  
  bindDateChange: function (e) {
    //console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },
  //获取用户输入的用户名
  depInput: function (e) {
    //console.log(e);
    this.setData({
      dep: e.detail.value,
    })
  },
  arrInput: function (e) {
    this.setData({
      arr: e.detail.value,
    })
  },
  change:function(){
    var dep = this.data.arr;
    var arr = this.data.dep;
    this.setData({
      dep: dep,
      arr:arr,
    })
  },
  search:function(e){
    //先到数据库里面查询结果，然后跳转到result页面
    var depcity = e.detail.value.depcity;
    var arrcity = e.detail.value.arrcity;
    var deptime = e.detail.value.deptime;
    app.globalData.dep=depcity;
    app.globalData.arr = arrcity;
    app.globalData.deptime = deptime;
    wx.request({
      url: 'http://localhost:8080/searchWx',
      data: { depCity: depcity, arrCity: arrcity, depTime: deptime },
      success:function(res){
      //console.log(res.data[1]);
      app.globalData.port = res.data[0];
      app.globalData.flight = res.data[1];
      console.log(app.globalData.flight);
      wx.navigateTo({
        url: '/pages/result/result',
      })
      }
    })
  },
})