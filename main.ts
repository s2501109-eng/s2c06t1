huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
let ID = 0
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        ID = huskylens.readBox_s(Content3.ID)
    }
    if (ID == 0) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showNumber(ID)
    }
})
