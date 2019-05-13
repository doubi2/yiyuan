// pages/hospital/hospital.js
const app = getApp()

Page({
    /**
     * 页面的初始数据
     */
    data: {
        departmentURL: "../department/department",
        doctorinfoURL: "../doctorinfo/doctorinfo",
        URL: "",
        doctorinfosort: [
            {
                id: 0,
                title: "综合排序",
                checked:false,
            },
            {
                id: 1,
                title: "全国",
                checked:false,
            },
            {
                id: 2,
                title: "筛选",
                checked:false,
            },
        ],
        location: [
           "湖南省","长沙市","株洲市","湘潭市","衡阳市","邵阳市","岳阳市","常德市","益阳市","郴州市","永州市","怀化市","娄底市","湘西州"
        ],
        place: 3,
        hospitals: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let op = options.op;
        let that = this;
        if (op == 'doctor') {
            that.setData({
                URL:"../doctorinfo/doctorinfo",
            }),
            wx.setNavigationBarTitle({
                title: "按医院找"
            })
        } else { 
            that.setData({
                URL:"../department/department",
            }),
            wx.setNavigationBarTitle({
                title: "选择挂号医院"
            })
        }
        
        //1. 页面加载的时候获取定位权限
        this.getLocRight();

        //调用云数据库
        const db = wx.cloud.database()
        // 查询当前用户所有的 counters
        db.collection('hospitals').get({
          success: res => {
            this.setData({
                hospitals: res.data[0]
            })
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

    bindlocChange: function (e) { 
        console.log(e.detail.value - 1)
        this.setData({
            place: e.detail.value - 1,
        })
    },

    getLocRight:function(e){
        const that = this;
        wx.getSetting({
            success: (res) => {
                console.log(JSON.stringify(res))
                // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
                // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
                // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
                if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
                    wx.showModal({
                        title: '请求授权当前位置',
                        content: '需要获取您的地理位置，请确认授权',
                        success: function (res) {
                            if (res.cancel) {
                                wx.showToast({
                                    title: '拒绝授权',
                                    icon: 'none',
                                    duration: 1000
                                })
                            } else if (res.confirm) {
                                wx.openSetting({
                                    success: function (dataAu) {
                                        if (dataAu.authSetting["scope.userLocation"] == true) {
                                            wx.showToast({
                                                title: '授权成功',
                                                icon: 'success',
                                                duration: 1000
                                            })
                                            //再次授权，调用wx.getLocation的API
                                            that.getLocation();
                                        } else {
                                            wx.showToast({
                                                title: '授权失败',
                                                icon: 'none',
                                                duration: 1000
                                            })
                                        }
                                    }
                                })
                            }
                        }
                    })
                } else if (res.authSetting['scope.userLocation'] == undefined) {
                    //调用wx.getLocation的API
                    that.getLocation();
                }
                else {
                    that.getLocation();
                }
            }
        })
    },

    //获取用户定位
    getLocation:function(e){
        wx.getLocation({
            type: 'wgs84',
            success(res) {
                const latitude = res.latitude
                const longitude = res.longitude
                const speed = res.speed
                const accuracy = res.accuracy
                console.log(latitude + " " + longitude);
            }
        })
        wx.showToast({
            title: '湖南省衡阳市',
            icon: 'none',
            duration: 1000
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