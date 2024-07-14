var player1;
var player2;
var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName.substring(0, 1) + " is in " + playerPlace); // Accessing the first character
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerPlace(player1.name, player1.place);
showPlayerPlace(player2.name, player2.place);

// Further Adventures
// Uncomment the following lines to test different substring arguments:

// Using substring(0, 2)
showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName.substring(0, 2) + " is in " + playerPlace);
};
showPlayerPlace(player1.name, player1.place); // Output: Ka is in The Dungeon of Doom
showPlayerPlace(player2.name, player2.place); // Output: Da is in The Old Library

// Using substring(0, 3)
showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName.substring(0, 3) + " is in " + playerPlace);
};
showPlayerPlace(player1.name, player1.place); // Output: Kan is in The Dungeon of Doom
showPlayerPlace(player2.name, player2.place); // Output: Dax is in The Old Library

// Using substring(1, 2)
showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName.substring(1, 2) + " is in " + playerPlace);
};
showPlayerPlace(player1.name, player1.place); // Output: a is in The Dungeon of Doom
showPlayerPlace(player2.name, player2.place); // Output: a is in The Old Library
