basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        for (let index = 0; index < 2; index++) {
            basic.clearScreen()
            basic.pause(500)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.clearScreen()
            basic.pause(500)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            for (let index = 0; index < 4; index++) {
                basic.clearScreen()
                basic.pause(500)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
                basic.clearScreen()
                basic.pause(500)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                basic.clearScreen()
                basic.pause(500)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
                basic.clearScreen()
                basic.pause(500)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                basic.clearScreen()
                basic.pause(500)
                for (let index = 0; index < 3; index++) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        `)
                    basic.clearScreen()
                    basic.pause(500)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . . . .
                        `)
                    basic.clearScreen()
                    basic.pause(500)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        `)
                    basic.clearScreen()
                    basic.pause(500)
                    for (let index = 0; index < 3; index++) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            # # # # #
                            . . . . .
                            . . . . .
                            `)
                        basic.clearScreen()
                        basic.pause(1000)
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            # # # # #
                            . . . . .
                            . . . . .
                            `)
                        basic.clearScreen()
                        basic.pause(1000)
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            # # # # #
                            . . . . .
                            . . . . .
                            `)
                        basic.clearScreen()
                        basic.pause(500)
                        for (let index = 0; index < 4; index++) {
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                # # # # #
                                . . . . .
                                . . . . .
                                `)
                            basic.clearScreen()
                            basic.pause(500)
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
                                `)
                            basic.clearScreen()
                            basic.pause(500)
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
                                `)
                            basic.clearScreen()
                            basic.pause(500)
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
                                `)
                            basic.clearScreen()
                            basic.pause(500)
                            for (let index = 0; index < 2; index++) {
                                basic.showLeds(`
                                    . . . . .
                                    . . . . .
                                    . . # . .
                                    . . . . .
                                    . . . . .
                                    `)
                                basic.clearScreen()
                                basic.pause(500)
                                basic.showLeds(`
                                    . . . . .
                                    . . . . .
                                    . . # . .
                                    . . . . .
                                    . . . . .
                                    `)
                                basic.clearScreen()
                                basic.pause(500)
                                for (let index = 0; index < 1; index++) {
                                    basic.showLeds(`
                                        . . . . .
                                        . . . . .
                                        # # # # #
                                        . . . . .
                                        . . . . .
                                        `)
                                    basic.clearScreen()
                                    basic.pause(1000)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
