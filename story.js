alert = ("You are about to embark on a journey.");
alert = ("Prepare yourself.");
/* Variables */
var sex = prompt("What is your sex?(Male/Female)");
var sex = sex.toLowerCase();

var profession = prompt("What is your profession?");
var profession = profession.toLowerCase();

var weapon = prompt("Tell me the first thing you see on your shelf.");
var weapon = weapon.toLowerCase();

var enemy = prompt("Tell me your favorite object.");
var enemy = enemy.toLowerCase();

var story = "<p>You are a " + sex + " " + profession + " who just stepped outside into the wonderful world of Purple Balls. The dying orange sun makes you squint. It's been some time since you saw the sun, since you spend all that time playing the latest Pokedmen game.</p>";
var story2 = "<p>Suddenly, a giant, phallic shaped " + enemy + " jumps out in front of you! In a panic you grab the closest thing, which just happens to be a " + weapon + ". You throw the " + weapon + " at the phallic " + enemy + ", which happens to be making strange twitching movements. It bursts into flame, spewing goo as it dies.</p>";

document.write (story + story2);