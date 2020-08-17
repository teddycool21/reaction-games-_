let PlayerA = 0
let PlayerB = 0
basic.forever(function () {
    basic.pause(200)
    basic.pause(randint(0, 4000))
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    while (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
        basic.pause(200)
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        PlayerA += 1
        basic.showString("" + (PlayerA))
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        PlayerB += 1
        basic.showString("" + (PlayerB))
    }
    basic.pause(1000)
    basic.clearScreen()
})
