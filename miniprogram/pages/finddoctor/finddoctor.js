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
            },
            {
                diseaseid: 1,
                title: "外科",
                classify: [
                    "泌尿外科","甲状腺乳腺外科","美容整形科","普外科","肝胆胰腺外科", "心胸外科","神经外科"
                ]
            },
            {
                diseaseid: 2,
                title: "其他",
                classify: [
                    "眼科","耳鼻咽喉科","全科","精神心理科","肿瘤科", "药剂科","影像检验科","疼痛科 麻醉科"
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