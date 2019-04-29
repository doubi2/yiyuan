// pages/finddoctor/finddoctor.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        commondisease: [
            {
                id: 0,
                imagePath: "../../icons/pfk.png",
                title: "皮肤性病科"
            },
            {
                id: 1,
                imagePath: "../../icons/rk.png",
                title: "儿科"
            },
            {
                id: 2,
                imagePath: "../../icons/fck.png",
                title: "妇产科"
            },
            {
                id: 3,
                imagePath: "../../icons/xhk.png",
                title: "消化内科"
            },
            {
                id: 4,
                imagePath: "../../icons/gk.png",
                title: "骨科"
            },
            {
                id: 5,
                imagePath: "../../icons/kqk.png",
                title: "口腔科"
            },
            
        ],
        alldisease: [
            {
                diseaseid: 0,
                title: "内科",
                classify: [
                    "神经科","心血管内科","内分泌科","呼吸科","感染科 传染科","肾脏内科","风湿免疫科","血液科","普通内科"
                ]
            }
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