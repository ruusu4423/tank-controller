input.onButtonPressed(Button.A, function () {
    送信するかしないか = 1
})
input.onButtonPressed(Button.B, function () {
    送信するかしないか = 0
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (light2 == 0) {
        light2 = 1
    } else {
        light2 = 0
    }
    radio.sendValue("light", light2)
})
let degree = 0
let y_ac = 0
let x_ac = 0
let accabs = 0
let 送信するかしないか = 0
let light2 = 0
light2 = 0
radio.setGroup(1)
basic.showLeds(`
    # . # . #
    # # # . #
    # . # . #
    # . # # #
    # . # . #
    `)
basic.pause(1000)
basic.forever(function () {
    led.plotBarGraph(
    accabs,
    1024
    )
    accabs = input.acceleration(Dimension.Y)
    if (送信するかしないか == 1) {
        x_ac = input.acceleration(Dimension.X)
        y_ac = input.acceleration(Dimension.Y)
        degree = (1 - (pins.analogReadPin(AnalogPin.P0) - 312) / 711) * 180
        radio.sendValue("xac", x_ac)
        radio.sendValue("yac", y_ac)
        radio.sendValue("degree", degree)
    } else {
        radio.sendValue("xac", 0)
        radio.sendValue("yac", 0)
        radio.sendValue("degree", 0)
    }
})
