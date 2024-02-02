input.onButtonPressed(Button.A, function () {
    aantal_mensen += -1
})
input.onButtonPressed(Button.B, function () {
    aantal_mensen += 1
})
let aantal_mensen = 0
basic.forever(function () {
    if (aantal_mensen > 9) {
        basic.showString("Volzet!")
    } else {
        basic.showNumber(aantal_mensen)
    }
})
