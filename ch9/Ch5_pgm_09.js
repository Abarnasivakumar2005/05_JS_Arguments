// Displaying a player's health

var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth) {
    var healthInfo; // Declare healthInfo variable
    healthInfo = playerName + ": health " + playerHealth + "."; // Assign the string
    console.log(healthInfo); // Use healthInfo in console.log
};

showPlayerHealth("Kandra", 50);
showPlayerHealth("Dax", 40);
showPlayerHealth("Alice", 75); // Your own argument
showPlayerHealth("Bob", 30);    // Another argument


/* Further Adventures
 *
 * 1) Change the showPlayerHealth function
 *    so it shows information of the form:
 *    Kandra: health 50.
 *
 * 2) Call the showPlayerHealth function
 *    using your own arguments.
 *
 * 3) Declare a variable called healthInfo
 *    inside the showPlayerHealth function.
 *
 *    var healthInfo;
 *
 * 4) Assign healthInfo the string that
 *    will be displayed.
 *
 *    healthInfo = playerName + ": health " + playerHealth;
 *
 * 5) Change the call to console.log so that
 *    it uses the healthInfo variable.
 *
 */