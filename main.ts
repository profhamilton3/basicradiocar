radio.onReceivedNumber(function (receivedNumber) {
    if (0 == receivedNumber) {
        wuKong.stopAllMotor()
        wuKong.mecanumStop()
        basic.showIcon(IconNames.Sad)
    } else if (1 == receivedNumber) {
        wuKong.setAllMotor(100, 100)
        wuKong.mecanumRun(wuKong.RunList.Front, 100)
        basic.showIcon(IconNames.Asleep)
    } else if (2 == receivedNumber) {
        wuKong.setAllMotor(-50, 75)
        wuKong.mecanumSpin(wuKong.TurnList.Left, 75)
    } else if (3 == receivedNumber) {
        wuKong.setAllMotor(75, -50)
        wuKong.mecanumSpin(wuKong.TurnList.Right, 75)
    } else if (4 == receivedNumber) {
        wuKong.setAllMotor(-75, -75)
        wuKong.mecanumRun(wuKong.RunList.rear, 100)
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
radio.setGroup(3)
radio.setFrequencyBand(33)
wuKong.mecanumWheel(
wuKong.ServoList.S1,
wuKong.ServoList.S2,
wuKong.ServoList.S3,
wuKong.ServoList.S4
)
music.setVolume(25)
radio.setTransmitPower(3)
radio.sendNumber(3)
basic.pause(200)
basic.showIcon(IconNames.Butterfly)
basic.forever(function () {
	
})
