input.onButtonPressed(Button.A, function () {
    送信するかしないか = 1
})
input.onButtonPressed(Button.B, function () {
    送信するかしないか = 0
})
let y_ac = 0
let x_ac = 0
let accabs = 0
let 送信するかしないか = 0
radio.setGroup(1)
basic.showIcon(IconNames.Diamond)
basic.forever(function () {
    led.plotBarGraph(
    accabs,
    1024
    )
    accabs = input.acceleration(Dimension.Y)
    if (送信するかしないか == 1) {
        x_ac = input.acceleration(Dimension.X)
        y_ac = input.acceleration(Dimension.Y)
        radio.sendValue("xac", x_ac)
        radio.sendValue("yac", y_ac)
    } else {
        radio.sendValue("xac", 0)
        radio.sendValue("yac", 0)
    }
})
