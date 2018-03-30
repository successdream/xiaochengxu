//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  //切换页面的时候触发
  onHide:function(){
  	console.log("监听页面隐藏")
  },
  onShow:function(){
  	console.log("监听页面显示")
  },
  onUnload:function(){
  	console.log("监听页面卸载")
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
