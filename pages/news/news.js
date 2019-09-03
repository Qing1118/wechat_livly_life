Page({

  /**
   * 页面的初始数据
   */
  data: {
    news_list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var th = this;

    wx.request({
      url: 'https://www.apiopen.top/journalismApi',
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.data.toutiao)
        if (res.statusCode == 200) {
          th.setData({

            news_list: res.data.data.toutiao

          })
        }
      }
    })
  }
})