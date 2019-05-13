// pages/index/index.js
import Dialog from '../../dist/dialog/dialog';
const app = getApp()
Page({
 
    /**
     * 页面的初始数据
     */
    data: {
        options: {}
    },
    optionsnav: function (e) {
        var Naviid = e.currentTarget.dataset.id;
        var toURL;
        if (Naviid == 0) {
            toURL = "../record/record";
            wx.navigateTo({
                url: toURL
            });
        } else if (Naviid == 1) {
            toURL = "../healthdata/healthdata";
            wx.navigateTo({
                url: toURL
            });
        } else if (Naviid == 2) {
            Dialog.alert({
                message: '请记录您的健康数据在进行评估'
            }).then(() => {
                // on close
            });
        } else if (Naviid == 3) {
            toURL = "../examination/examination";
            wx.navigateTo({
                url: toURL
            });
        }

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let state = false;
        let op = options.state;
        let that = this;
        const db = wx.cloud.database()
        // 查询当前用户所有的 counters
        db.collection('state').get({
            success: res => {
                state = res.data[0].pageState;
                if (res.data[0].pageState) {
                    if (op != "true") {
                        wx.switchTab({
                            url: "../index/index"
                        });
                    }
                }
            },
            fail: err => {
                wx.showToast({
                    icon: 'none',
                    title: '查询记录失败'
                })
                console.error('[数据库] [查询记录] 失败：', err)
            }
        });
        db.collection('options').get({
            success: res => {
                console.info(op);
                if (op == "true") {
                    that.setData({
                        options: res.data[0].option1
                    });
                } else {
                    that.setData({
                        options: res.data[0].option2
                    });
                }
            },
            fail: err => {
                wx.showToast({
                    icon: 'none',
                    title: '查询记录失败'
                })
                console.error('[数据库] [查询记录] 失败：', err)
            }
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