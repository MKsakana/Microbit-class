let 実行中 = 0
let カウントダウン = 0
let トータル = 0
let SE = 0
input.onButtonPressed(Button.A, function () {
    if (実行中 == 1) {
        実行中 = 0
        カウントダウン = 0
        basic.showNumber(Math.idiv(トータル, 60))
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Punchline), music.PlaybackMode.InBackground)
        トータル = 0
    } else {
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Double)), music.PlaybackMode.InBackground)
        実行中 = 1
        カウントダウン = 1800
    }
})
input.onButtonPressed(Button.B, function () {
    if (SE == 0) {
        SE = 1
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.InBackground)
    } else {
        SE = 0
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
    }
})
loops.everyInterval(1000, function () {
    if (実行中 == 1) {
        カウントダウン += -1
        トータル += 1
        if (カウントダウン == 0) {
            if (SE == 0) {
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.InBackground)
            } else {
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ode), music.PlaybackMode.InBackground)
            }
            カウントダウン = 1800
        } else if (カウントダウン == 300) {
            if (SE == 0) {
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
            } else {
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.InBackground)
            }
        }
    }
})
loops.everyInterval(10000, function () {
    // 温度と明るさの測定
    music.setVolume(100)
    if (実行中 == 1) {
        if (input.temperature() < 13) {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
        } else if (input.temperature() < 17) {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                `)
        } else if (input.temperature() < 26) {
            basic.showLeds(`
                . . . . #
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                `)
        } else if (input.temperature() < 30) {
            basic.showLeds(`
                . . . . #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else {
            basic.showLeds(`
                # # # # .
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
        }
    } else {
        if (input.temperature() < 13) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
        } else if (input.temperature() < 17) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                `)
        } else if (input.temperature() < 26) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                `)
        } else if (input.temperature() < 30) {
            basic.showLeds(`
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
        }
    }
    basic.pause(5000)
    if (実行中 == 1) {
        if (input.lightLevel() < 30) {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
        } else if (input.lightLevel() < 100) {
            basic.showLeds(`
                . . . . #
                . . # . .
                . # . # .
                . . # . .
                . . . . .
                `)
        } else if (input.lightLevel() < 150) {
            basic.showLeds(`
                . . # . #
                . # . # .
                # . . . #
                . # . # .
                . . # . .
                `)
        } else if (input.lightLevel() < 190) {
            basic.showLeds(`
                . . # . #
                . # # # .
                # # # # #
                . # # # .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                . . . . #
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        }
    } else {
        if (input.lightLevel() < 40) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
        } else if (input.lightLevel() < 120) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # . # .
                . . # . .
                . . . . .
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
        } else if (input.lightLevel() < 180) {
            basic.showLeds(`
                . . # . .
                . # . # .
                # . . . #
                . # . # .
                . . # . .
                `)
        } else if (input.lightLevel() < 200) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . # # # .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        }
    }
    basic.pause(5000)
})
