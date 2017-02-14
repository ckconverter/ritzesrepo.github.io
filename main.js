confirm ("You're prepared to die, right?");

var age = prompt("How many people have you killed?");

if (age < 1) {
    console.log ("Sounds like you want to play a game.");}

else { console.log ("You aren't taking this seriously. You're going to regret that."); }

console.log ("Okay, you have your hand chopped off. Blood sprays everywhere. You are going to bleed out. What do you do? Besides dying, of course.");

console.log ("You haven't done anything to save yourself, so you commit seppuku. That's right, right?");

userAnswer = prompt ("Are you sure you want to commit suicide?");

if (userAnswer === "yes") {
    console.log ("You have no weapons nearby, so you slowly bleed out. You lost, you fool. When has suicide ever been the right choice?"); }
    
else { console.log ("You don't kill yourself, but you are still bleeding out."); }


var feedback = prompt ("Oy m8, what'd you rate this out of 8?");

if (feedback > 8 ) {
    console.log ("You broke the scale you nimwit!"); }
    
else {
    console.log ("Thx 4 the nice r8, m8.");}
