//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/common/images/001.png',
      '/common/images/002.png',
      '/common/images/003.png'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    fristList: [{
      bindtap: 'list/list',
      imageSrc: '/common/images/003.png',
      title: '出境'
    },
    {
      bindtap: 'list/list',
      imageSrc: '/common/images/003.png',
      title: '国内'
    },
    {
      bindtap: 'list/list',
      imageSrc: '/common/images/003.png',
      title: '港澳'
    },
    {
      bindtap: 'list/list',
      imageSrc: '/common/images/003.png',
      title: '省内'
    },
    {
      bindtap: 'list/list',
      imageSrc: '/common/images/003.png',
      title: '游轮'
    }
    ],
    pro:[
      {
        bindtap: 'prodetail/prodetail',
        imageSrc: '/common/images/002.png',
        title: '五日游五日游五日游五日游五日游五日游五日游五日游',
        price:'成人199元',
        dec:"九州风行 俄国风行"
      },
      {
        bindtap: 'prodetail/prodetail',
        imageSrc: '/common/images/002.png',
        title: '三日游三日游三日游三日游三日游三日游三日游三日游',
        price: '成人599元',
        dec: "九州风行 俄国风行"
      }, {
        bindtap: 'prodetail/prodetail',
        imageSrc: '/common/images/002.png',
        title: '七天游七天游七天游七天游七天游七天游七天游',
        price: '成人1999元',
        dec: "九州风行 俄国风行"
      }
    ],
  },
  goPage(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },
  tel: function () {
    wx.makePhoneCall({
      phoneNumber: '13800138000',
    })
  },
})
