let app = getApp()
Page({

  data: {
    state: 0,
    _num: '0',

    currentIndex: 0,
    "firstList": [{
      bindtap: '../prodetail/prodetail',
      imageSrc: '/common/images/002.png',
      title: '通讯录',
      price: '￥199',
      leave: '从深圳出发'
    }
    ],
    "secondList": [
      {
        bindtap: '../prodetail/prodetail',
        imageSrc: '/common/images/002.png',
        title: '通讯录',
        price: '￥199',
        leave: '从深圳出发'
      },
      {
        bindtap: '',
        imageSrc: '/common/images/002.png',
        title: '商会活动',
        price: '￥199',
        leave: '从深圳出发'
      }
    ],
    "three": [
      {
        bindtap: '../prodetail/prodetail',
        imageSrc: '/common/images/002.png',
        title: '通讯录',
        price: '￥199',
        leave: '从深圳出发'
      },
      {
        bindtap: '',
        imageSrc: '/common/images/002.png',
        title: '商会活动',
        price: '￥199',
        leave: '从深圳出发'
      },
      {
        bindtap: '',
        imageSrc: '/common/images/002.png',
        title: '爱心捐款',
        price: '￥199',
        leave: '从深圳出发'
      }
    ],
    "four": [
      {
        bindtap: '../prodetail/prodetail',
        imageSrc: '/common/images/002.png',
        title: '通讯录',
        price: '￥199',
        leave: '从深圳出发'
      },
      {
        bindtap: '',
        imageSrc: '/common/images/002.png',
        title: '商会活动',
        price: '￥199',
        leave: '从深圳出发'
      },
      {
        bindtap: '',
        imageSrc: '/common/images/002.png',
        title: '爱心捐款',
        price: '￥199',
        leave: '从深圳出发'
      }
    ],
    "five": [
      {
        bindtap: '../prodetail/prodetail',
        imageSrc: '/common/images/002.png',
        title: '游玩项目游玩项目游玩项目游玩项目游玩项目游玩项目游玩项目游玩项目游玩项目游玩项目游玩项目游玩项目',
        price: '￥199',
        leave: '从深圳出发'
      },
      {
        bindtap: '',
        imageSrc: '/common/images/002.png',
        title: '商会活动',
        price: '￥199',
        leave: '从深圳出发'
      },
      {
        bindtap: '',
        imageSrc: '/common/images/002.png',
        title: '爱心捐款',
        price: '￥199',
        leave: '从深圳出发'
      }
    ]
  },


  /** 
 * 点击tab切换 
 */
  toggle(e) {
    if (this.data._num === e.currentTarget.dataset.index) {
      return false;
    } else {
      this.setData({
        _num: e.currentTarget.dataset.index
      })
    }
  },
  goPage(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },

  bindChange: function (e) {
    var that = this;
    that.setData({
      _num: e.detail.current
    });
    switch (e.detail.current) {
      case 0:
        that.data.state = 0
        break;
      case 1:
        that.data.state = 1
        break;
      case 2:
        that.data.state = 2
        break;
      case 3:
        that.data.state = 3
        break;
      case 4:
        that.data.state = 4
        break;
    }
  },
})