//index.js


//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    now:1,
    obj:"",
    obj2:"",
    obj3:"",
    obj4:"",
    ifshow:false

  },
  
  //事件处理函数
  //加载排行版
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  searchshow:function(){
    this.setData({
      ifshow: true
    })
  },

  searchhide:function(){
    this.setData({
      ifshow: false
    })
  },



  buttonclick:function(e){
    var that=this
     that.setData({
        now: e.target.dataset.index
     })
     if(that.data.now==2){
        wx.request({
          url: 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?format=json&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1489214057733',
          // data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            that.setData({
                 obj2:res.data.data
            })

            that.setData({
                obj3:res.data.data.topList
            })
           

          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
     };

    if(that.data.now==3){
      wx.request({
        url: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1489304016192',
        // data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
            that.setData({
              obj4:res.data.data
            })
            console.log(that.data.obj4);
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })

    }

  },



  onLoad: function () {
    var that = this;
    wx.request({
     
      url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1489043017179',
      // data: {},
      method: 'GET', 
      success: function(res){
        that.setData({
          obj: res.data.data
        })
        
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

  }
})
