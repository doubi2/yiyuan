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
        place: -1,
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