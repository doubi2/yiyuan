// pages/department/department.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrollTop: null,
        title: "皮肤科",
        checked: false,
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
                doctorname: "张梅华",
                imagePath: "../../images/doctor_1.png",
                position: "主治医生",
                department: "皮肤性病科",
                hospital: " 南华大学附属第一医院",
                skilled: "尖锐湿疣、寻常疣、传染性软疣",
                star: "5.0",
                response: "51155个回答 911个处方 9分钟响应",
                reputation: "过敏类",
                askway: "图文  |  电话"
            },
            {
                id: 1,
                doctorname: "朱栋梁",
                imagePath: "../../images/zhudongliang.jpg",
                position: "主治医生",
                department: "皮肤性病科",
                hospital: " 南华大学附属第二医院",
                skilled: "荨麻疹、湿疹、传染性软疣",
                star: "5.0",
                response: "91155个回答 611个处方 10分钟响应",
                reputation: "过敏类",
                askway: "图文  |  电话"
            },
            {
                id: 2,
                doctorname: "谢桥衡",
                imagePath: "../../images/doctor_2.png",
                position: "主治医生",
                department: "皮肤性病科",
                hospital: " 南华大学附属第二医院",
                skilled: "灰指甲，湿疹，白癜风，痤疮",
                star: "5.0",
                response: "21155个回答 411个处方 8分钟响应",
                reputation: "脚气类",
                askway: "电话"
            },
            {
                id: 3,
                doctorname: "成光",
                imagePath: "../../images/chenggang.jpg",
                position: "主治医生",
                department: "皮肤性病科",
                hospital: " 南华大学附属第二医院",
                skilled: "荨麻疹、湿疹、尖锐湿疣、寻常疣、传染性软疣",
                star: "5.0",
                response: "7155个回答 411个处方 9分钟响应",
                reputation: "荨麻疹类",
                askway: "图文"
            },
            {
                id: 4,
                doctorname: "李威",
                imagePath: "../../images/liwei.jpg",
                position: "主治医生",
                department: "皮肤性病科",
                hospital: " 南华大学附属第二医院",
                skilled: "荨麻疹、湿疹、尖锐湿疣、寻常疣、传染性软疣",
                star: "5.0",
                response: "71155个回答 1011个处方 10分钟响应",
                reputation: "荨麻疹类",
                askway: "图文  |  电话"
            },
            {
                id: 5,
                doctorname: "岳建军",
                imagePath: "../../images/jianj.png",
                position: "主治医生",
                department: "皮肤性病科",
                hospital: " 南华大学附属第二医院",
                skilled: "荨麻疹、湿疹、尖锐湿疣、寻常疣、传染性软疣",
                star: "5.0",
                response: "21155个回答 611个处方 11分钟响应",
                reputation: "荨麻疹类",
                askway: "图文  |  电话"
            },
            {
                id: 6,
                doctorname: "魏大飞",
                imagePath: "../../images/weidaf.jpg",
                position: "主治医生",
                department: "皮肤性病科",
                hospital: " 南华大学附属第二医院",
                skilled: "荨麻疹、湿疹、尖锐湿疣、寻常疣、传染性软疣",
                star: "5.0",
                response: "1155个回答 511个处方 12分钟响应",
                reputation: "荨麻疹类",
                askway: "图文  |  电话"
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