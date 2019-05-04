// pages/record/record.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        question: [
            {
                id: 0,
                title: "基本信息",
                item1: "性别", hint1: "男",
                item2: "年龄",hint2: "请输入年龄",
                item3: "身高",hint3: "请输入身高，单位厘米",
                item4: "体重",hint4: "请输入体重，单位千克",
            },
            {
                id: 1,
                title: "婚姻状况",
                item1: "婚史",hint1: "未婚",
                item2: "生育",hint2: "未生育",
            },
            {
                id: 2,
                title: "药物过敏",
                item: [
                    "青霉素", "头孢类抗生素", "普鲁卡因",
                    "破伤风抗毒素（TAT）", "地卡因", "磺胺类药物",
                    "维生素B1","泛影葡胺","阿司匹林"
                ],
            },
            {
                id: 3,
                title: "食物或接触物过敏",
                item: [
                    "芒果","牛奶","海鲜","香菇","笋","黄瓜","花粉","油漆","皮毛"
                ],
            },
            {
                id: 4,
                title: "个人习惯",
                item: [
                    "久坐","久站","吸烟","饮酒","熬夜跷二郎腿","强忍大小便","不喜喝水","低头族","如厕看书报"
                ],
            },
            {
                id: 5,
                title: "家族病史",
                item: [
                    "脑梗","癌症","近视","哮喘","高血压","糖尿病","心脏病","白癜风","脑出血","过敏性疾病","癫痫病"
                ],
            }
        ]
    },

    selectitem: function (e) { 
        console.log(e);
    },
    /**
     * 生命周期函数--监听页面加载0
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