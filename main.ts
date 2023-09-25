OLED.init(64, 128)
basic.forever(function () {
    if (tinkercademy.MoistureSensor(AnalogPin.P0) < 50) {
        OLED.showString("Moisture level is:")
        OLED.showNumber(tinkercademy.MoistureSensor(AnalogPin.P0))
        OLED.showString("Water your plant!")
        music.playTone(247, music.beat(BeatFraction.Whole))
    } else {
        OLED.showString("Your plant is in good condition")
    }
})
