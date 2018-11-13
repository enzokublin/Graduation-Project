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
                incrLeft: 5
            },

            {
                row: [6, 7, 8, 9, 10, 11],
                incrRight: 7,
                incrLeft: 6
            },

            {
                row: [12, 13, 14, 15, 16, 17, 18],
                incrRight: 8,
                incrLeft: 7
            },

            {
                row: [19, 20, 21, 22, 23, 24, 25, 26],
                incrRight: 9,
                incrLeft: 8
            },

            {
                row: [27, 28, 29, 30, 31, 32, 33, 34, 35],
                incrRight: 9,
                incrLeft: 8
            },

            {
                row: [36, 37, 38, 39, 40, 41, 42, 43],
                incrRight: 8,
                incrLeft: 7
            },

            {
                row: [44, 45, 46, 47, 48, 49, 50],
                incrRight: 7,
                incrLeft: 6
            },

            {
                row: [51, 52, 53, 54, 55, 56],
                incrRight: 6,
                incrLeft: 5
            },

            {
                row: [57, 58, 59, 60, 61],
                incrRight: 0,
                incrLeft: 0
            }
        ];

        var userSelection = parseInt($(e.currentTarget).text());
        var incrementer;

        for (var i = 0; i < rowsLogic.length; i++) {
            if (rowsLogic[i].row.indexOf(parseInt(userSelection)) !== -1) {
                incrementer = rowsLogic[i].incrRight;
                // the incrementer variable tells me on which line the div is at whick I clicked.
                //the userSelection variable tells me the number of the div I clicked on.
            }
            console.log("amazing for loop:", incrementer);

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
                console.log("happy player:", userSelection - (incrementer + 1));

                if (
                    $("#" + (userSelection - incrementer + 1)).hasClass(
                        currentPlayer
                    )
                ) {
                    console.log("happy plus 8");
                    return true;
                }
                if (
                    $("#" + (userSelection - incrementer + 2)).hasClass(
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
                    $("#" + (userSelection - incrementer - 1)).hasClass(
                        currentPlayer
                    )
                ) {
                    console.log("happy minus 7");
                    return true;
                }
                if (
                    $("#" + (userSelection - incrementer - 2)).hasClass(
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
            if (turnNextDoor || turnDownwards || turnUpwards) {
                turnCounter = 0;
                selectedMarble.removeClass(currentPlayer);
                console.log("happy functions");
                $(e.currentTarget).addClass(currentPlayer);
                switchPlayers();
            }
        }

        function switchPlayers() {
            if (currentPlayer == playerOne) {
                currentPlayer = playerTwo;
            } else {
                currentPlayer = playerOne;
            }
        }
    });
})();
