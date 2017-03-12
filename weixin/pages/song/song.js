// pages/song/song.js
const appid=33463;
const appselect="e77cdf96c75446509d0db58347a7af52";
const topid=16;
Page({
  data:{
    arr:[],
    start:""
  },




  onLoad:function(options){
    var that = this;
    wx.request({
      url: "http://route.showapi.com/213-4",
      data: {
        showapi_appid:appid,
        showapi_sign:appselect,
        topid:topid
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res.data.showapi_res_body.pagebean.songlist
);
        that.setData({
          arr:res.data.showapi_res_body.pagebean.songlist
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
    // 页面关闭
  }
})