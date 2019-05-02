var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        defaultPortrait: "../../icons/login.png",
        state:false,
        userinfo: {},
        myinfo_functions: [
            {
                id: 0,
                imagePath: "../../icons/recovery.png",
                title:"康复任务"
            },
            {
                id: 1,
                imagePath: "../../icons/prescription.png",
                title:"我的处方"
            },
            {
                id: 2,
                imagePath: "../../icons/bill.png",
                title:"预约会诊单"
            },
            {
                id: 3,
                imagePath: "../../icons/report.png",
                title:"诊后报到"
            },
            {
                id: 4,
                imagePath: "../../icons/medicine1.png",
                title:"用药日记"
            },
            {
                id: 5,
                imagePath: "../../icons/disease1.png",
                title:"疾病日记"
            },
            {
                id: 6,
                imagePath: "../../icons/volunteerbasis.png",
                title:"免费义诊"
            },
            {
                id: 7,
                imagePath: "../../icons/register.png",
                title:"预约挂号"
            },
        ],
        myfunctions: [
            {
                id: 0,
                title:"患者管理",
            },
            {
                id: 1,
                title:"我的诊后评价",
            },
            {
                id: 2,
                title:"我的暖心",
            },
            {
                id: 3,
                title:"我的收藏",
            },
            {
                id: 4,
                title:"我关注的医生",
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 查看是否授权
        var that = this;
        wx.getSetting({
            success: function(res){
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                    wx.getUserInfo({
                        success: function(res) {
                            that.setData({
                                userinfo : res.userInfo,
                                state : true
                            })
                        }
                    })
                }
            }
        })
    },
    bindGetUserInfo: function(e) {
        console.log(e.detail.userInfo)
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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

    }
})