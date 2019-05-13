var app = getApp();
import Toast from '../../dist/toast/toast';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        defaultPortrait: "../../icons/login.png",
        isHide:true,
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
                title:"健康档案",
            },
            {
                id: 2,
                title:"我的诊后评价",
            },
            {
                id: 3,
                title:"我的暖心",
            },
            {
                id: 4,
                title:"我的收藏",
            },
            {
                id: 5,
                title:"我关注的医生",
            },
        ]
    },

    //提示暂未开发
    hintInfo: function (e) {
        const toast = Toast.fail({
            duration: 1000,       // 持续展示 toast
            forbidClick: true, // 禁用背景点击
            message: '暂未开发！',
        });
    },
    //退出登录
    backLogin:function(e){
        this.setData({
            isHide: true,
        })
    },

    //转跳
    myBindNavi: function (e) { 
        var Naviid = e.currentTarget.dataset.id;
        console.log(Naviid);
        var toURL;
        if (Naviid == 1) { 
            toURL = "../record/record";
            wx.navigateTo({
                url: toURL
            })
        }else { 
           this.hintInfo();
        }
        
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        var that = this;
        // 查看是否授权
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            wx.getUserInfo({
                                success(res) {
                                    console.log(res.userInfo)
                                }
                            })
                        }
                    });
                } else {
                    // 用户没有授权
                    // 改变 isHide 的值，显示授权页面
                    that.setData({
                        isHide: true
                    });
                }
            }
        });
    },

    bindGetUserInfo: function (e) {
        if (e.detail.userInfo) {
            //用户按了允许授权按钮
            var that = this;
            // 获取到用户的信息了，打印到控制台上看下
            console.log("用户的信息如下：");
            console.log(e.detail.userInfo);
            //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
            that.setData({
                userinfo: e.detail.userInfo,
                isHide: false
            });
        } else {
            //用户按了拒绝按钮
            wx.showModal({
                title: '提示',
                content: '您点击了拒绝授权，无法获取您的用户信息，请授权之后再进入!!!',
                showCancel: false,
                confirmText: '返回授权',
                success: function (res) {
                    // 用户没有授权成功，不需要改变 isHide 的值
                    if (res.confirm) {
                        console.log('用户点击了“返回授权”');
                    }
                }
            });
        }
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