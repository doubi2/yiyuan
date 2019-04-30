// components/DoctorInfo/DoctorInfo.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        checked:false,
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
                doctorname: "曾梅华",
                imagePath: "../../images/doctor_1.png",
                position: "主治医生",
                department:"皮肤性病科",
                hospital: " 南华大学附属第二医院",
                skilled: "荨麻疹、湿疹、尖锐湿疣、寻常疣、传染性软疣",
                star: "5.0",
                response: "71155个回答 1011个处方 10分钟响应",
                reputation: "荨麻疹类",
                askway:"图文  |  电话"
            },
            {
                id: 2,
                doctorname: "曾梅华",
                imagePath: "../../images/doctor_1.png",
                position: "主治医生",
                department:"皮肤性病科",
                hospital: " 南华大学附属第二医院",
                skilled: "荨麻疹、湿疹、尖锐湿疣、寻常疣、传染性软疣",
                star: "5.0",
                response: "71155个回答 1011个处方 10分钟响应",
                reputation: "荨麻疹类",
                askway:"图文  |  电话"
            },
            {
                id: 3,
                doctorname: "曾梅华",
                imagePath: "../../images/doctor_1.png",
                position: "主治医生",
                department:"皮肤性病科",
                hospital: " 南华大学附属第二医院",
                skilled: "荨麻疹、湿疹、尖锐湿疣、寻常疣、传染性软疣",
                star: "5.0",
                response: "71155个回答 1011个处方 10分钟响应",
                reputation: "荨麻疹类",
                askway:"图文  |  电话"
            },
            {
                id: 4,
                doctorname: "曾梅华",
                imagePath: "../../images/doctor_1.png",
                position: "主治医生",
                department:"皮肤性病科",
                hospital: " 南华大学附属第二医院",
                skilled: "荨麻疹、湿疹、尖锐湿疣、寻常疣、传染性软疣",
                star: "5.0",
                response: "71155个回答 1011个处方 10分钟响应",
                reputation: "荨麻疹类",
                askway:"图文  |  电话"
            },
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
    }
})
