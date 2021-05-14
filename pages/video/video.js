Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'http://7xjmzj.com1.z0.glb.clouddn.com/20171026175005_JObCxCE2.mp4',
    danmuList:[
      {text:'第1s出现的弹幕',color:'#ff0000',time:1},
      {text:'第3s出现的弹幕',color:'#ff00ff',time:3}
    ],
    movieList:[{
      create_time:1532519734589,
      //create_time:'2018-7-25 19:55:54',
      title:'海边随拍',
      src:'http://9890.vod.myqcloud.com/9890_4e292f9a3dd011e6b4078980237cc3d3.f20.mp4'
    },{
      create_time:1532519777690,
      //create_time:'2018-7-25 19:56:17',
      title:'勿忘心安',
      src:'http://7xjmzj.com1.z0.glb.clouddn.com/20171026175005_JObCxCE2.mp4'
    },{
      create_time:1532519794991,
      //create_time:'2018-7-25 19:56:34',
      title:'点滴记忆',
      src:'http://7xjmzj.com1.z0.glb.clouddn.com/20171026175005_JObCxCE2.mp4'
    }]
  },
  videoContext:null,
  inputValue:'',



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //this.videoContext=wx.createVideoContext('myVideo')
    //const TxvContext= requirePlugin('tencentvideo')
    //var txvContext=TxvContext.getTxvContext('txv1')
    //txvContext.play() //播放
    //txvContext.pause() //暂停


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
  bindInputBlur:function(e){
    this.inputValue=e.detail.value
  },
  bindSendDanmu:function(){
    this.videoContext.sendDanmu({
      text:this.inputValue,
      color:'#f90'
    })
  },
  bindButtonTap:function(){
    wx.chooseVideo({
      sourceType:['album','camera'],//视频选择的来源，相册和相机
      maxDuration:60, //拍摄视频最长拍摄时间(s)
      camera:'back', //默认拉起的是前置(front)或者后置(back)
      success:res=>{ //成功时执行的回调函数
        this.setData({
          src:res.tempFilePath  //选定视频的临时文件路径
        })
      }
    })
  }
})
