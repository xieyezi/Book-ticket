// pages/book/book.js
var app = getApp(); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flightId: null,
    dep:null,
    arr:null,
    flight:null,
    port:null,
    account:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    //console.log(app.globalData.flight);
    this.setData({
      flightId: options.flightId,
      dep: app.globalData.dep,
      arr: app.globalData.arr,
      port: app.globalData.port,
    })
    for (var i = 0; i < app.globalData.flight.length;i++){
      //console.log(app.globalData.flight[i].id);
      if (app.globalData.flight[i].id == this.data.flightId ){
        this.setData({
          flight: app.globalData.flight[i],
        })
      }
    }
  var _this = this; //留住this
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        //console.log(res.data.account);
        _this.setData({
          account: res.data.account,
        })
      },
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
  
  },
  bookTicket:function(e){
    console.log(e.detail.value);
    var flightId = e.detail.value.flightId;
    var name = e.detail.value.name;
    var docnum = e.detail.value.docnum;
    var contact = e.detail.value.contact;
    var tel = e.detail.value.tel;
    var account = e.detail.value.account;
    wx.request({
      url: 'http://localhost:8080/wxBookTicketServlet',
      data: { flightId: flightId, name: name, docnum: docnum, contact: contact, tel:tel,account:account},
      success: function (res){
        console.log(res);
        if(res.data == "1"){
          wx.showModal({
            title: '预订成功！',
            success: function (res) {
              if (res.confirm) {
                wx.switchTab({
                  url: '/pages/index/index',
                })
              }
            }
          })
        }
        else{
          wx.showModal({
            title: '预订失败！',
            success: function (res) {
              if (res.confirm) {
                wx.switchTab({
                  url: '/pages/book/book',
                })
              }
            }
          })
        }
      }
    })
  }
})