(function() {
    var playerOne = "player-1";
    var currentPlayer = playerOne;
    var playerTwo = "player-2";
    var marbles = $(".marbles");
    // var opponentPlayer = playerTwo;
    var countSelectedMarblesForNextMove = [];
    var selectedMarble;
    var turnCounter = 0;
    // var turnCounter2 = 1;
    // var countMarblesPlayerOne = $("playerOne").length;
    // var countMarblesPlayerTwo = $("playerTwo").length;

    $(".marbles").click(function(e) {
        var findMarblesAndPlayers = $(e.currentTarget).find(marbles);

        // if (!$(e.currentTarget).hasClass(currentPlayer) && !selectedMarble) {
        //     return;
        // }

        turnCounter++;
        console.log("happy counter:", turnCounter);

        if ($(e.currentTarget).hasClass(currentPlayer)) {
            countSelectedMarblesForNextMove.push($(e.currentTarget));
        }

        // if (turnCounter !== 2) {
        //     return;
        // }

        if (turnCounter !== 3) {
            return;
        }

        // if (turnCounter !== 4) {
        //     return;
        // }

        console.log("happy count:", countSelectedMarblesForNextMove);
        // if (turnCounter == 1) {
        //     selectedMarble = $(e.currentTarget);
        //     return;
        // }

        if (userSelection == currentPlayer) {
            selectedMarble = $(e.currentTarget);
        }

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

            function adjacentMoveCheck() {
                if ($("#" + (userSelection - 1)).hasClass(currentPlayer)) {
                    return true;
                }
                if ($("#" + (userSelection + 1)).hasClass(currentPlayer)) {
                    return true;
                } else {
                    return false;
                }
            }

            let turnNextDoor = adjacentMoveCheck();

            function belowMoveCheck() {
                if (
                    $("#" + (userSelection - incrementerRight + 1)).hasClass(
                        currentPlayer
                    )
                ) {
                    return true;
                }
                if (
                    $("#" + (userSelection - incrementerRight + 2)).hasClass(
                        currentPlayer
                    )
                ) {
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
                    return true;
                }
                if (
                    $("#" + (userSelection - incrementerRight - 2)).hasClass(
                        currentPlayer
                    )
                ) {
                    return true;
                } else {
                    return false;
                }
            }

            let turnUpwards = aboveMoveCheck();

            // #################################################################
            // #################################################################
            // #################################################################
            function downMoveAboveCheck() {
                if (
                    $(
                        "#" + (userSelection - incrementerDownRight - 1)
                    ).hasClass(currentPlayer)
                ) {
                    return true;
                } else if (
                    $(
                        "#" + (userSelection - incrementerDownRight - 2)
                    ).hasClass(currentPlayer)
                ) {
                    return true;
                } else {
                    return false;
                }
            }

            let turnTop = downMoveAboveCheck();

            function downMoveBelowCheck() {
                if ($("#" + (userSelection - incrementerDownRight) - 1)) {
                    console.log("happy downwards:", userSelection);
                    // $(e.currentTarget).addClass(currentPlayer);
                    return true;
                } else {
                    return false;
                }
            }

            let turnBottom = downMoveBelowCheck();

            // ############################################################################

            if (
                turnNextDoor ||
                turnDownwards ||
                turnUpwards ||
                turnBottom ||
                turnTop
            ) {
                for (
                    var j = 0;
                    j < countSelectedMarblesForNextMove.length;
                    j++
                ) {
                    countSelectedMarblesForNextMove[j].removeClass(
                        currentPlayer
                    );
                }

                $("#" + (userSelection - 1)).addClass(currentPlayer);
                turnCounter = 0;
                // selectedMarble.removeClass(currentPlayer);
                console.log("happy functions");
                $(e.currentTarget).addClass(currentPlayer);
                switchPlayers();
                return;
            }
        }

        // #####################################################################
        // #####################################################################
        // #####################################################################

        // function switchOpponentPlayers() {
        //     if (opponentPlayer == playerTwo) {
        //         opponentPlayer = playerOne;
        //     } else {
        //         opponentPlayer = playerTwo;
        //     }
        // }

        function switchPlayers() {
            if (currentPlayer == playerOne) {
                currentPlayer = playerTwo;
            } else {
                currentPlayer = playerOne;
            }
        }
    });

    $("#abalone-rules").click(function(e) {
        var rulesContainer = `
        <div id="rules-container">
            <h3 id="h3-rules">Rules</h3>
            <p id="top-rule-p">The basic version of the classical board game “Abalone“ is played by two players. Each player has 14 marbles of which maximum 3 can be moved at the same time. Therefore, one move can include 1, 2 or 3 of the own marbles. Within one move
                the marbles can be pushed in all possible directions. </p>
            <p id="middle-rule-p">The ultimate objective of the game is to push 6 of the opponents marbles out of the game. In order to push the opponents marbles the current player must have at least one marble more than his counterpart in the line in which direction he
                wants to move them. </p>
            <p id="bottom-rule-p">
                Meaning 3 marbles can push 2 or 1 while 2 can only move 1 opponent one. Remember, because maximum 3 of the player’s own marbles can be moved at the same time, it’s not possible to push 3 opponent one’s by 4 own
                marbles.
            </p>
        </div>`;

        $("#primary-container").append(rulesContainer);
        e.stopPropagation(e);
        $("#h3-rules").on("click", function() {
            $("#rules-container").remove();
        });
    });

    $("#counter-player-I").each(function() {
        var $this = $(this),
            countTo = $this.attr("data-count");

        $({ countNum: $this.text() }).animate(
            {
                countNum: countTo
            },

            {
                duration: 8000,
                easing: "linear",
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }
            }
        );
    });

    $("#counter-player-II").each(function() {
        var $this = $(this),
            countTo = $this.attr("data-count");

        $({ countNum: $this.text() }).animate(
            {
                countNum: countTo
            },

            {
                duration: 8000,
                easing: "linear",
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }
            }
        );
    });
})();
