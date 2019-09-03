Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: '',
    weather: {

    },
    forecast: [],
    focus: false ,
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
  ,
  cityInput:function(e){
    // this.setData({
    //   city: e.detail.value
    // });
    var th = this;

    wx.request({
      url: 'https://www.apiopen.top/weatherApi?' + this.city,
      data: {
        city: e.detail.value
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        console.log(res.data.data.forecast)
        if (res.statusCode == 200) {
          th.setData({

            weather: res.data,
            
          });
          th.setData({
            forecast: res.data.data.forecast
          })
        }
      }
    })
  }
})