// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        options:[
            {
                id: 0,
                title: "健康档案",
                imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/images/record.png",
                introduce: "个人健康档案",
                className: "option_greenblue"
            },
            {
                id: 1,
                title: "健康数据",
                imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/images/healthdata.png",
                introduce: "记录你每一天的健康信息",
                className: "option_green"
            },
            {
                id: 2,
                title: "我的评估",
                imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/images/evaluate.png",
                introduce: "准确、全面评估你的健康状态",
                className: "option_pink"
            },
            {
                id: 3,
                title: "体检报告",
                imagePath: "cloud://hemeidan-fw3xg.6865-hemeidan-fw3xg/images/physicalexamination.png",
                introduce: "保存体检报告在线为你解答",
                className: "option_violet"
            }
        ]
    },
    optionsnav: function (e) { 
        var Naviid = e.currentTarget.dataset.id;
        console.log(Naviid);
        var toURL;
        if (Naviid == 0) { 
            toURL = "../record/record";
        }else if(Naviid == 1){ 
            toURL = "../healthdata/healthdata";
        }else if (Naviid == 3) {
            toURL = "../examination/examination";
        }else if (Naviid == 3) {
            toURL = "../examination/examination";
        } 
        wx.navigateTo({
            url: toURL
        })
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