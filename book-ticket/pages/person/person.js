// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     userInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this; //留住this
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        // console.log(res);
        _this.setData({
          userInfo: res.data,
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
  altrReader:function(e){
    var _this = this;
    var id = e.detail.value.id;
    var phone = e.detail.value.phone;
    var email = e.detail.value.email;
    wx.request({
      url: 'http://localhost:8080/wxAlterDataServlet',
      data: { userId: id, phone: phone,email:email },
      success:function(res){
        if(res.data!=null){
            _this.setData({
            //更改成功，重新获取用户信息
              userInfo: res.data,
          });
          //重新设置缓存
          wx.setStorage({
            key: 'userInfo',
            data: res.data,
            success: function () {
              wx.showModal({
                title: '更改成功！',
                success:function(res){
                  if(res.confirm){
                    wx.switchTab({
                      url: '/pages/mine/mine',
                    })
                  }
                }
              })
              
            }
          })
        }
        else{
          wx.showToast({
            title: '更改失败！',
          })
        }
      }
    })
  }
})