// Displaying a player's information

var showPlayerInfo;
var showPlayerName;
var showPlayerHealth;
var showPlayerPlace;

// Function to show player name
showPlayerName = function (playerName) {
    console.log(playerName);
};

// Function to show player health
showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

// Function to show player place
showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

// Function to show a line of dashes
var showLine = function () {
    console.log("----------------------------");
};

// Function to show a blank line
var showBlankLine = function () {
    console.log("");
};

// Function to show player info
showPlayerInfo = function (playerName, playerPlace, playerHealth) {
    showBlankLine(); // Use showBlankLine function

    showPlayerName(playerName);

    showLine(); // Use showLine function

    showPlayerPlace(playerName, playerPlace);
    showPlayerHealth(playerName, playerHealth);

    showLine(); // Use showLine function
    showBlankLine(); // Use showBlankLine function
};

// Call the showPlayerInfo function for each player
showPlayerInfo("Kandra", "The Dungeon of Doom", 50);
showPlayerInfo("Dax", "The Old Library", 40);



/* Further Adventures
 *
 * 1) Create a function called showLine
 *    that logs a line of dashes to the console.
 *    ----------------------------
 *
 * 2) Update the showPlayerInfo function to
 *    use the showLine function rather than
 *    logging dashes to the console directly.
 *
 * 3) Create and use a showBlankLine function
 *    for logging a blank line to the console.
 *
 */