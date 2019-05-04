// pages/healthdata/healthdata.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        headlthitem: [
            {
                id: 0,
                title: "运动",
                imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/healthdataIcons/exercise.png",
                value: "1534",
                unit: "千卡",
                time:"今天",
                input:true
            },
            {
                id: 2,
                title: "睡眠",
                imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/healthdataIcons/sleep.png",
                value: "--",
                unit: ["小时", "分钟"],
                time:"",
                input:false
            },
            {
                id: 3,
                title: "血压",
                imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/healthdataIcons/bloodpressure.png",
                value: "--",
                unit:"千毫米汞柱",
                time:"",
                input:false
            },
            {
                id: 4,
                title: "血糖",
                imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/healthdataIcons/bloodsugar.png",
                value: "--",
                unit:"毫摩尔/升",
                time:"",
                input:false
            },
            {
                id: 5,
                title: "心率",
                imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/healthdataIcons/heartrate.png",
                value: "--",
                unit:"次/分",
                time:"",
                input:false
            },
            {
                id: 6,
                title: "体重",
                imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/healthdataIcons/weight.png",
                value: "--",
                unit:"公斤",
                time:"",
                input:false
            },
            {
                id: 7,
                title: "体脂",
                imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/healthdataIcons/bodyfat.png",
                value: "--",
                unit:"%",
                time:"",
                input:false
            },
            {
                id: 8,
                title: "体温",
                imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/healthdataIcons/temperature.png",
                value: "--",
                unit:"摄氏度",
                time:"",
                input:false
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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