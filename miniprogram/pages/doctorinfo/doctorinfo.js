// pages/doctorinfo/doctorinfo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrollTop: null,
        title:"皮肤科",
        checked:false,
        doctorinfosort: [
            {
                id: 0,
                title: "综合排序",
            },
            {
                id: 1,
                title: "全国",
            },
            {
                id: 2,
                title: "筛选",
            },
        ],
        doctorinfo: [
            {
                id: 0,
                doctorname: "曾梅华",
                imagePath: "../../images/doctor_1.png",
                position: "主治医生",
                department:"皮肤性病科",
                hospital: " 南华大学附属第二医院",
                skilled: "荨麻疹、湿疹、尖锐湿疣、寻常疣、传染性软疣",
                star: "5.0",
                response: "71155个回答 1011个处方 10分钟响应",
                reputation: "荨麻疹类",
                askway:"图文  |  电话"
            },
            {
                id: 2,
                doctorname: "曾梅华",
                imagePath: "../../images/doctor_1.png",
                position: "主治医生",
                department:"皮肤性病科",
                hospital: " 南华大学附属第二医院",
                skilled: "荨麻疹、湿疹、尖锐湿疣、寻常疣、传染性软疣",
                star: "5.0",
                response: "71155个回答 1011个处方 10分钟响应",
                reputation: "荨麻疹类",
                askway:"图文  |  电话"
            },
            {
                id: 3,
                doctorname: "曾梅华",
                imagePath: "../../images/doctor_1.png",
                position: "主治医生",
                department:"皮肤性病科",
                hospital: " 南华大学附属第二医院",
                skilled: "荨麻疹、湿疹、尖锐湿疣、寻常疣、传染性软疣",
                star: "5.0",
                response: "71155个回答 1011个处方 10分钟响应",
                reputation: "荨麻疹类",
                askway:"图文  |  电话"
            },
            {
                id: 4,
                doctorname: "曾梅华",
                imagePath: "../../images/doctor_1.png",
                position: "主治医生",
                department:"皮肤性病科",
                hospital: " 南华大学附属第二医院",
                skilled: "荨麻疹、湿疹、尖锐湿疣、寻常疣、传染性软疣",
                star: "5.0",
                response: "71155个回答 1011个处方 10分钟响应",
                reputation: "荨麻疹类",
                askway:"图文  |  电话"
            },
        ]
    },

    //滚动条监听
    scroll: function (e) {
        console.log(e.detail.scrollTop);
        this.setData({ scrollTop: e.detail.scrollTop })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: this.data.title
          })
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