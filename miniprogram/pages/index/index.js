Page({

    /**
     * 页面的初始数据
     */
    data: {
        indicator_dots: true, //是否显示面板指示点
        autoplay: true, //是否自动切换
        interval: 5000, //自动切换时间间隔
        circular: true, //是否采用衔接滑动
        duration: 500, //滑动动画时长
        indicator_color: "D3D3D3", //指示点颜色
        indicator_active_color: "white", //当前选中的指示点颜色
        imgUrls: ["../../images/swiper_tem_1.jpg", "../../images/swiper_tem_2.jpg", "../../images/swiper_tem_3.jpg"], //轮播图地址
        main_functions:[
            {   
                id: 0,
                title:"门诊医生",
                imagePath:"../../icons/doctor.png",
                introduce:"20万+医生"
            },
            {
                id: 1,
                title:"医院挂号",
                imagePath:"../../icons/registration.png",
                introduce:"全国1209家医院"
            },
            {
                id: 2,
                title:"健康管理",
                imagePath:"../../icons/doctor.png",
                introduce:"健康管理"
            },
        ],
        functions: [        //功能区介绍
            {   
                id: 0,
                title: "义诊",
                context: "图文电话"
            },
            {
                id: 1,
                title: "专家接诊",
                context: "图文电话"
            },
            {
                id: 2,
                title: "众筹互助",
                context: "专家接诊"
            },
            {
                id: 3,
                title: "用药指南",
                context: "专家接诊"
            },
            {
                id: 4,
                title: "健康交流",
                context: "专家接诊"
            },
            {
                id: 5,
                title: "体检解读",
                context: "专家接诊"
            }
        ],
        forms: [           //每日表单区
            {
                id: 0,
                title:"常见病门诊",
                context: "无需等待"
            },
            {
                id: 1,
                title:"儿科门诊",
                context: "1人候诊中"
            },
            {
                id: 2,
                title:"生长发育诊",
                context: "无需等待"
            }
        ],
        inquiry_introduce:[
            {
                id: 0,
                title: "视频/电话",
                imagePath: "../../icons/video.png",
                introduce:"在线接诊"
            },
            {
                id: 1,
                title: "三甲医院",
                imagePath: "../../icons/ECG.png",
                introduce:"在线接诊"
            },
            {
                id: 2,
                title: "价格低",
                imagePath: "../../icons/price.png",
                introduce:"在线接诊"
            }
        ],
        dynamic: [
            {   
                dy_id:0,
                main: [
                    {
                        id: 0,
                        type: "[极速图文]",
                        content: "南华大学附属第一医院  肛肠科 谢三喜",
                        time: "刚刚",
                        patient: "患者张**"
                    },
                    {
                        id: 1,
                        type: "[极速图文]",
                        content: "中南大学湘雅二医院 皮肤科 曾静",
                        time: "1分钟前",
                        patient: "患者刘**"
                    },
                    {
                        id: 2,
                        type: "[极速图文]",
                        content: "南华大学附属第一医院  口腔科 范围星",
                        time: "2分钟前",
                        patient: "患者李**"
                    }
                ]
            },
            {
                dy_id:1,
                main: [
                    {
                        id: 0,
                        type: "[极速图文]",
                        content: "衡阳中医院 外科 凌旭",
                        time: "3分钟前",
                        patient: "患者王**"
                    },
                    {
                        id: 1,
                        type: "[极速图文]",
                        content: "南华大学附属第二医院  消化内科 谢三喜",
                        time: "4分钟前",
                        patient: "患者赵**"
                    },
                    {
                        id: 2,
                        type: "[极速图文]",
                        content: "南华大学第一附属医院 肛肠科 谢三喜",
                        time: "5分钟前",
                        patient: "患者刘**"
                    }
                ]
            }
        ]
    },

    //导航栏部分的事件处理函数
    bindNaviTap: function (e) {
        var Naviid = e.currentTarget.dataset.id;
        console.log(Naviid);
        var toURL;
        if (Naviid == 0) { 
            toURL = "../finddoctor/finddoctor";
            wx.navigateTo({
                url: toURL
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})