// pages/healthdata/healthdata.js
import Toast from '../../dist/toast/toast';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputTxt: "",
        dialogState: true,
        newInput: 0,
        dialog_unit: [],
        inputboolean: true,
        headlthitem: [
            {
                pageInfo: [
                    {
                        id: 0,
                        title: "运动",
                        imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/healthdataIcons/exercise.png",
                        data: [
                            "千卡"
                        ],
                        inputing: false,
                        inputed: false
                    },
                    {
                        id: 1,
                        title: "睡眠",
                        imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/healthdataIcons/sleep.png",
                        data: [
                            "小时", "分钟"
                        ],
                        inputing: false,
                        inputed: false
                    },
                    {
                        id: 2,
                        title: "血压",
                        imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/healthdataIcons/bloodpressure.png",
                        data: [
                            "千毫米汞柱"
                        ],
                        inputing: false,
                        inputed: false
                    },
                    {
                        id: 3,
                        title: "血糖",
                        imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/healthdataIcons/bloodsugar.png",
                        data: [
                            "毫摩尔/升"
                        ],
                        inputing: false,
                        inputed: false
                    },
                    {
                        id: 4,
                        title: "心率",
                        imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/healthdataIcons/heartrate.png",
                        data: [
                            "次/分"
                        ],
                        inputing: false,
                        inputed: false
                    },
                    {
                        id: 5,
                        title: "体重",
                        imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/healthdataIcons/weight.png",
                        data: [
                            "公斤"
                        ],
                        inputing: false,
                        inputed: false
                    },
                    {
                        id: 6,
                        title: "体脂",
                        imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/healthdataIcons/bodyfat.png",
                        data: [
                            "%"
                        ],
                        inputing: false,
                        inputed: false
                    },
                    {
                        id: 7,
                        title: "体温",
                        imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/healthdataIcons/temperature.png",
                        data: [
                            "摄氏度"
                        ],
                        inputing: false,
                        inputed: false
                    }
                ]
            },
            {
                userData: [
                    {
                        id: 0,
                        data: [{
                            value: "",
                            hint: "千卡"
                        }]
                    },
                    {
                        id: 1,
                        data: [{
                            value: "",
                            hint: "小时"
                        },
                        {
                            value: "",
                            hint: "分钟"
                        }]
                    },
                    {
                        id: 2,
                        data: [{
                            value: "",
                            hint: "千毫米汞柱"
                        }]
                    },
                    {
                        id: 3,
                        data: [{
                            value: "",
                            hint: "毫摩尔/升"
                        }]
                    },
                    {
                        id: 4,
                        data: [{
                            value: "",
                            hint: "次/分"
                        }]
                    },
                    {
                        id: 5,
                        data: [{
                            value: "",
                            hint: "公斤"
                        }]
                    },
                    {
                        id: 6,
                        data: [{
                            value: "",
                            hint: "%"
                        }]
                    },
                    {
                        id: 7,
                        data: [
                            {
                                value: "",
                                hint: "摄氏度"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    getText: function (e) {
        let that = this;
        var index = e.target.id;
        var input = that.data.newInput;
        var first = "";
        var sec = "";
        var str = 'headlthitem[1].userData[' + input + '].data';
        if (input == 1) {
            if (index == '0') {
                str += '[0].value';
            } else {
                str += '[1].value';
            }
        } else {
            str += '[0].value'
        }
        this.setData({
            [str]: [e.detail.value]
        })
    },
    dialogSave: function (e) {
        var str = 'headlthitem[0].pageInfo[' + this.data.newInput + '].inputed';
        var str1 = 'headlthitem[0].pageInfo[' + this.data.newInput + '].inputing';
        this.setData({
            inputTxt: "",
            [str]: true,
            [str1]: false,
            dialogState: true
        })
    },
    // 用户点击输入
    inputData: function (e) {
        var id = e.currentTarget.dataset.id;
        let that = this;
        let inputing_satate = false;
        var str = 'headlthitem[0].pageInfo[' + id + '].inputing';
        if (!that.data.headlthitem[0].pageInfo[id].inputing) {
            inputing_satate = true;
        } else {
            inputing_satate = false;
        }
        that.setData({
            [str]: inputing_satate,
        })
    },
    //用户点击手动输入
    openPopup: function (e) {
        var id = e.currentTarget.dataset.id;
        let that = this;
        var unit = that.data.headlthitem[0].pageInfo[id].data
        if (that.data.dialogState) {
            that.setData({
                dialogState: false,
                dialog_unit: unit,
                newInput: id
            });
        } else {
            return;
        }
    },
    // 关闭弹窗
    dialogClose: function (e) {
        this.setData({
            inputTxt: "",
            dialogState: true
        })
    },
    // 提示暂未开发
    hintInfo: function (e) {
        const toast = Toast.fail({
            duration: 1000,       // 持续展示 toast
            forbidClick: true, // 禁用背景点击
            message: '暂未开发！',
        });
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