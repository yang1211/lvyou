// pages/prodetail/prodetail.js
Page({
  data: {
    imgUrls: [
      {
        url: '/common/images/001.png',
        number: '984984844464',
      },
      {
        url: '/common/images/002.png',
        number: '984984844464',
      },
      {
        url: '/common/images/003.png',
        number: '984984844464',
      }
    ],
    group:[
      {
        time:'2019-06-14',
        moeny:'4999',
      },
      {
        time: '2019-06-15',
        moeny: '4999',
      },
      {
        time: '2019-06-16',
        moeny: '4999',
      },
      {
        time: '2019-06-17',
        moeny: '4999',
      },
      {
        time: '2019-06-18',
        moeny: '4999',
      },
    ],
    titleDec: [
      {
        title: '俄罗斯双城记俄罗斯双城记，九天之旅，二十人成团，深圳出发，包餐',
        moeny: '4999',
        out:'深圳出发',
      }
    ],
    chara:[
      {
        dec:'产品描述产品描述产品描述产品描述产品产品描述产品描述产品描述产品描述产品描述描述',
      }
    ],
    con:[
      {
        day: '第一天',
        content: '第一天的描述描述描述描述描述描第一天的描述描述描述描述描述描述描述第一天的描述描述描述描描述描述描述描述描述描述描述',
      },
      {
        day: '第二天',
        content: '第二天的描述描述描述描述描第二天的描述描述描述描述描述第二天的描述描述描描第二天的描述描述描描述描述描述描述描述描述描述描述',
      },
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    idx: 0,

    // 页面配置  
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
  },
  onLoad: function () {
    var that = this;
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },
  // 滑动切换tab
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  // 点击tab切换
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  goIndex(e) {
    let index = e.currentTarget.dataset.index;
    // console.log('每个index',index)
    this.setData({
      idx: index
    })
  },

  tel:function () {
  wx.makePhoneCall({
    phoneNumber: '13800138000',
  })
},

  bindViewTab: function () {
    wx.reLaunch({
      url: "../../index/index"
    })
  }
})
