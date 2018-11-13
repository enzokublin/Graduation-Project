(function() {
    var playerOne = "player-1";
    var currentPlayer = playerOne;
    var playerTwo = "player-2";
    var marbles = $(".marbles");
    var selectedMarble;
    var turnCounter = 0;
    // var countMarblesPlayerOne = $("playerOne").length;
    // var countMarblesPlayerTwo = $("playerTwo").length;

    $(".marbles").click(function(e) {
        var findMarblesAndPlayers = $(e.currentTarget).find(marbles);

        if (!$(e.currentTarget).hasClass(currentPlayer) && !selectedMarble) {
            return;
        }
        turnCounter++;
        console.log("happy counter:", turnCounter);

        if (turnCounter == 1) {
            selectedMarble = $(e.currentTarget);
            console.log("happy running:", selectedMarble);
            return;
        }

        // if (turnCounter == 2) {
        //     selectedMarble = $(e.currentTarget);
        //     console.log("happy running2:", selectedMarble);
        //     return;
        // }
        //
        // if (turnCounter == 3) {
        //     selectedMarble = $(e.currentTarget);
        //     console.log("happy running3:", selectedMarble);
        //     return;
        // }

        console.log("happy marbles:", selectedMarble);

        var rowsLogic = [
            {
                row: [1, 2, 3, 4, 5],
                incrRight: 6,
                incrLeft: 5,
                incrDownRight: 0,
                incrDownLeft: 0
            },

            {
                row: [6, 7, 8, 9, 10, 11],
                incrRight: 7,
                incrLeft: 6,
                incrDownRight: -6,
                incrDownLeft: -5
            },

            {
                row: [12, 13, 14, 15, 16, 17, 18],
                incrRight: 8,
                incrLeft: 7,
                incrDownRight: -7,
                incrDownLeft: -6
            },

            {
                row: [19, 20, 21, 22, 23, 24, 25, 26],
                incrRight: 9,
                incrLeft: 8,
                incrDownRight: -8,
                incrDownLeft: -7
            },

            {
                row: [27, 28, 29, 30, 31, 32, 33, 34, 35],
                incrRight: 9,
                incrLeft: 8,
                incrDownRight: -9,
                incrDownLeft: -8
            },

            {
                row: [36, 37, 38, 39, 40, 41, 42, 43],
                incrRight: 8,
                incrLeft: 7,
                incrDownRight: -9,
                incrDownLeft: -8
            },

            {
                row: [44, 45, 46, 47, 48, 49, 50],
                incrRight: 7,
                incrLeft: 6,
                incrDownRight: -8,
                incrDownLeft: -7
            },

            {
                row: [51, 52, 53, 54, 55, 56],
                incrRight: 6,
                incrLeft: 5,
                incrDownRight: -7,
                incrDownLeft: -6
            },

            {
                row: [57, 58, 59, 60, 61],
                incrRight: 0,
                incrLeft: 0,
                incrDownRight: -6,
                incrDownLeft: -5
            }
        ];

        var userSelection = parseInt($(e.currentTarget).text());
        var incrementerRight;
        var incrementerLeft;
        var incrementerDownRight;
        var incrementerDownLeft;

        for (var i = 0; i < rowsLogic.length; i++) {
            if (rowsLogic[i].row.indexOf(parseInt(userSelection)) !== -1) {
                incrementerRight = rowsLogic[i].incrRight;
                // the incrementer variable tells me on which line the div is at whick I clicked.
                //the userSelection variable tells me the number of the div I clicked on.
                incrementerLeft = rowsLogic[i].incrLeft;
                incrementerDownRight = rowsLogic[i].incrDownRight;
                incrementerDownLeft = rowsLogic[i].incrDownLeft;
            }
            console.log("amazing for loop:", incrementerRight);

            function adjacentMoveCheck() {
                if ($("#" + (userSelection - 1)).hasClass(currentPlayer)) {
                    console.log("happy minus 1");

                    return true;
                }
                if ($("#" + (userSelection + 1)).hasClass(currentPlayer)) {
                    console.log("happy plus 1");
                    return true;
                } else {
                    return false;
                }
            }
            console.log("happy adjacent:", adjacentMoveCheck());
            let turnNextDoor = adjacentMoveCheck();

            function belowMoveCheck() {
                console.log(
                    "happy player:",
                    userSelection - (incrementerRight + 1)
                );

                if (
                    $("#" + (userSelection - incrementerRight + 1)).hasClass(
                        currentPlayer
                    )
                ) {
                    console.log("happy plus 8");
                    return true;
                }
                if (
                    $("#" + (userSelection - incrementerRight + 2)).hasClass(
                        currentPlayer
                    )
                ) {
                    console.log("happy plus 7");
                    return true;
                } else {
                    return false;
                }
            }

            let turnDownwards = belowMoveCheck();

            function aboveMoveCheck() {
                if (
                    $("#" + (userSelection - incrementerRight - 1)).hasClass(
                        currentPlayer
                    )
                ) {
                    console.log("happy minus 7");
                    return true;
                }
                if (
                    $("#" + (userSelection - incrementerRight - 2)).hasClass(
                        currentPlayer
                    )
                ) {
                    console.log("happy minus 6");
                    return true;
                } else {
                    return false;
                }
            }

            let turnUpwards = aboveMoveCheck();

            function downMoveBelowCheck() {
                if (
                    $(
                        "#" + (userSelection - incrementerDownRight) - 1
                    ).hasClass(currentPlayer)
                ) {
                    console.log("happy downwards:", userSelection);
                    // $(e.currentTarget).addClass(currentPlayer);
                    return true;
                } else {
                    return false;
                }
            }

            let turnBottom = downMoveBelowCheck();

            if (turnNextDoor || turnDownwards || turnUpwards || turnBottom) {
                turnCounter = 0;
                selectedMarble.removeClass(currentPlayer);
                console.log("happy functions");
                $(e.currentTarget).addClass(currentPlayer);
                switchPlayers();
            }
        }

        // #####################################################################
        // #####################################################################
        // #####################################################################
        function downMoveAboveCheck() {
            if (
                $("#" + (userSelection - incrementerDownRight) - 1).hasClass(
                    currentPlayer
                )
            ) {
                console.log("happy downwards:", userSelection);
                $(e.currentTarget).addClass(currentPlayer);
                return true;
            } else {
                return false;
            }
        }

        let turnTop = downMoveAboveCheck();

        // function downMoveBelowCheck() {
        //     if ($("#" + (userSelection - incrementerDownRight) - 1)) {
        //         console.log("happy downwards:", userSelection);
        //         // $(e.currentTarget).addClass(currentPlayer);
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
        //
        // let turnBottom = downMoveBelowCheck();

        // #####################################################################
        // #####################################################################
        // #####################################################################

        function switchPlayers() {
            if (currentPlayer == playerOne) {
                currentPlayer = playerTwo;
            } else {
                currentPlayer = playerOne;
            }
        }
    });
})();
