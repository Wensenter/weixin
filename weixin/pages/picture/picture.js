const APPselcet="e4e72acfdbbf414d9bb3a744ba423532";
const APPid=33390;
// pages/picture/picture.js
Page({
  data:{
    arr:[],
  },

  content:function(e){
      var that=this;
      console.log(e.target.dataset.id);
    wx.request({
      url: 'http://route.showapi.com/1177-2',
      data: {
        showapi_sign:APPselcet,
        showapi_appid:APPid,
        id:e.target.dataset.id
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res.data.showapi_res_body);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  onReachBottom(){
    console.log("触底了")
  },
  

  onLoad:function(){
    var that=this;
      wx.request({
      url: 'http://route.showapi.com/1177-1',
      data: {
        showapi_sign:APPselcet,
        showapi_appid:APPid,
        page:1
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res.data.showapi_res_body.pagebean.contentlist)
        that.setData({
          arr:res.data.showapi_res_body.pagebean.contentlist
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
  
  }
})