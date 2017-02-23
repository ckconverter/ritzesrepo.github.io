confirm ("You're prepared to die, right?");

var age = prompt("How many people have you killed?");

if (age < 1) {
    confirm ("Sounds like you want to play a game.");}

else { confirm ("You aren't taking this seriously. You're going to regret that."); }

confirm ("Okay, you have your hand chopped off. Blood sprays everywhere. You are going to bleed out. What do you do? Besides dying, of course.");

confirm ("You haven't done anything to save yourself, so you commit seppuku. That's right, right?");

userAnswer = prompt ("Are you sure you want to commit suicide?");

if (userAnswer === "yes") {
    confirm ("You have no weapons nearby, so you slowly bleed out. You lost, you fool. When has suicide ever been the right choice?"); }
    
else { confirm ("You don't kill yourself, but you are still bleeding out."); }


var feedback = prompt ("Oy m8, what'd you rate this out of 8?");

if (feedback > 8 ) {
    confirm ("You broke the scale you nimwit!"); }
    
else {
    confirm ("Thx 4 the nice r8, m8.");}
