let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
/*
Step 79
Use const to create a weapons variable above your locations array. Assign it an empty array.*/
const weapons =[
  {name:"stick",power:5 },
  {
    name:"dagger",
    power:30,
  
  },
  {
    name:"claw hammer",
    power:50
  
  },
  {
    name:"sword",
    power:100
  
  }
];
/*Step 107
define a monsters variable and assign it an array. Set that array to have three objects */
const monsters =[
  {
    name:"slime",
    level:2,
    health:15
  },
  {
    name:"fanged beast",
    level:8,
    health:60
  },
  {
    name:"dragon",
    level:20,
    health:300
  }
];

/*Step 51
Create a variable called locations and set it to an empty array.
**********************************
Step 52
You previously used an array to store strings. But arrays can store any data type. This time, your array will be storing objects. Objects are similar to arrays, but with a few differences. One difference is that objects use properties, or keys, to access and modify data.
Objects are indicated by curly braces. An empty object would look like {}.
*****************************************
Step 53
Object properties are written as key: value pairs, where key is the name of the property (or the key), and value is the value that property holds.
****************
Step 55
Give your empty button text array three string elements. Use the three strings being assigned to the button innerText properties in the goTown function. Remember that array values are separated by commas.
*************************
Step 56
Create another property in your object called button functions. Give this property an array containing the three functions assigned to the onclick properties in the goTown function. Remember that these functions are variables, not strings, and should not be wrapped in quotes.
*****************************************
Step 57
Add one final property to the object named text. Give this property the same string value as the one assigned to text.innerText in the goTown function.
*/

const locations=[
  {
    name: "town square",
    "button text":["Go to store","Go to cave","Fight dragon"],//property name has more than one word, you'll need to surround it in quotes.
    "button functions":[goStore,goCave,fightDragon],
    text:"You are in the town square. You see a sign that says \"Store\".",

},/*Step 58
Add a second object to your locations array (remember to separate them with a comma). Following the pattern you used in the first object, create the same properties but use the values from the goStore function. Set the name property to store.*/
{
  name:"store",
  "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
"button functions":[ buyHealth, buyWeapon, goTown],
text: "You enter the store.",
},
{
  name: "cave",
  "button text": ["Fight slime", "Fight fanged beast",  "Go to town square"],
  "button functions": [fightSlime, fightBeast,goTown],
  text: "You enter the cave. You see some monsters."
},
/*Step 112
Add a new object to the end of the locations array, */
{
  name: "fight",
  "button text": ["Attack", "Dodge", "Run"],
  "button functions": [attack, dodge,goTown],
  text: "You are fighting a monster."
},
/*Step 131
Your locations array doesn't have a fifth element, so locations[4] doesn't work. */
{
  name: "kill monster",
  "button text":["Go to town square","Go to town square","Go to town square"],
  "button functions":
  /*Replace the third one with easterEgg - this is how a player will access the hidden feature of the game.
   */  [goTown,goTown,easterEgg ],
  text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
},
/*step 136 */
{
  name: "lose",
  "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
  "button functions": [restart, restart, restart],
  text: "You die. &#x2620;"
},
//step 140
{
  name: "win",
  "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
  "button functions": [restart, restart, restart],
  text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;"
},
//Step 159 Add another object to your locations array.
{ 
  name: "easter egg", 
  "button text": ["2", "8",  "Go to town square?"], 
  "button functions": [pickTwo, pickEight, goTown], 
  text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!" 
},

];

// initialize buttons.
  /*button1 represents your first button element. These elements have a special property called onclick, which you can use to determine what happens when someone clicks that button.

You can access properties in JavaScript a couple of different ways. The first is with dot notation. Here is an example of using dot notation to set the onclick property of a button to a function reference.*/
button1.onclick =goStore;
button2.onclick = goCave ;
button3.onclick = fightDragon;

/*Functions are special tools that allow you to run sections of code at specific times. You can declare functions using the function keyword. Here is an example of a function called functionName - note the opening and closing curly braces. These indicate the section of code that is within the function.

function functionName() { }*/

/*The innerText property controls the text that appears in an HTML element. For example:

<p id="info">Demo content</p> 
const info = document.querySelector("#info"); 
info.innerText = "Hello World"; 
The following example would change the text of the p element from Demo content to Hello World.
When a player clicks your Go to store button, you want to change the buttons and text. Remove the code inside the goStore function and add a line that updates the text of button1 to say "Buy 10 health (10 gold)".*/

/*Step 50
You have repetition in the goTown and goStore functions. When you have repetition in your code, this is a sign that you need another function. Functions can take parameters, which are values that are given to the function each time it is run. Here is a function that takes a parameter called param
**********************************************
Step 59
Now you can consolidate some of your code. Start by copying the code from inside the goTown function and paste it into your update function. Then, remove all the code from inside the goTown and goStore functions.
*/

function update (location) {
  /*Step 133
After a monster is defeated, the monster's stat box should no longer display. */
monsterStats.style.display="none";
  button1.innerText = location["button text"][0];/*Step 63
  Now your update function needs to use the argument you pass into it.
  Inside the update function, change the value of the button1.innerText assignment to be location["button text"]. That way, you use bracket notation to get the "button text" property of the location object passed into the function.
  *******************************************
  Step 64
location["button text"] is an array with three elements. Change the button1.innerText assignment to be location["button text"][0] which represents the first element of the array.
  */
button2.innerText = location["button text"][1];
button3.innerText = location["button text"][2];
button1.onclick = location["button functions"][0];
button2.onclick = location["button functions"][1];
button3.onclick = location["button functions"][2];
/*Step 138
In order for the &#x2620; emoticon text to properly display on the page, you will need to use the innerHTML property.

The innerHTML property allows you to access or modify the content inside an HTML element using JavaScript. */
text.innerHTML = location.text;
    
}



/*Step 47
Move your goTown function above your goStore function. Then copy and paste the contents of the goStore function into the goTown function.

Step 48
In your goTown function, change your button elements' innerText properties to be "Go to store", "Go to cave", and "Fight dragon". Update your onclick properties to be goStore, goCave, and fightDragon, respectively.
Finally, update innerText property of your text to be "You are in the town square. You see a sign that says Store.".

Step 49
You need to wrap the text Store in double quotes. Because your string is already wrapped in double quotes, you'll need to escape the quotes around Store. You can escape them with a backslash \.
*/
function goTown(){
  /*Step 60
Instead of assigning the innerText and onclick properties to specific strings and functions, the update function will use data from the location that is passed into it. First, that data needs to be passed.
****************************************
Step 62
Pass in only the first element of the locations array by adding [0] at the end of the variable. For example: myFunction(arg[0]);.
This is called bracket notation. Values in an array are accessed by index. Indices are numerical values and start at 0 - this is called zero-based indexing. arg[0] would be the first element in the arg array.
*/
update(locations[0]);
  /*  button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. You see a sign that says \"Store\".";
    */
  
}

function goStore(){
    /*button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";*/
    update(locations[1])

    /*step-44
    You will also need to update the functions that run when the buttons are clicked again.
In your goStore() function, update the onclick property for each button to run buyHealth, buyWeapon, and goTown, respectively.
button1.onclick = buyHealth;
button2.onclick = buyWeapon;
button3.onclick = goTown;*/
/*Step 45
Now you need to modify your display text. Change the innerText property of the text to be "You enter the store.".
text.innerText = "You enter the store.";
*/
}
function goCave() {
  /*Step 71
Now that you have a "cave" location object, update your goCave function to call update and pass that new "cave" location.*/
update(locations[2])
    
  }
/*Step 46
Create three new empty functions called buyHealth, buyWeapon, and goTown.
***************************/


function buyHealth(){
/*Step 76
What if the player doesn't have enough gold to buy health? When you want to run code conditionally, you can use the if statement.
*/
if(gold>=10){
  /*Step 73
After the gold is updated, add a line to set health equal to health plus 10.*/
gold = gold - 10;
health=health+10;
/*Step 75
After your assignment lines, assign the innerText property of goldText to be the variable gold. Use the same pattern to update healthText with the health variable.*/

goldText.innerText = gold;


healthText.innerText = health;


}
else{
  text.innerText="You do not have enough gold to buy health.";
}
}

function buyWeapon(){
  /*Step 96
You now have an error to fix. The currentWeapon variable is the index of the weapons array, but array indexing starts at zero. The index of the last element in an array is one less than the length of the array.
Change the if condition to check weapons.length - 1, instead of weapons.length.*/
  if(currentWeapon < weapons.length-1){
  if(gold>=30){
    gold -= 30;
    currentWeapon ++;
    goldText.innerText = gold;
    /*Step 86
You should tell the player what weapon they bought. In between the two lines you just wrote, use let to initialize a new variable called newWeapon. Set this to equal weapons.*/
    let newWeapon  =weapons[currentWeapon].name;
    text.innerText = "You now have a "+ newWeapon + ".";
    /*Step 90
Back at the beginning of this project, you created the inventory array. Add the newWeapon to the end of the inventory array using the push() method.*/
  inventory.push(newWeapon );
  text.innerText+=" In your inventory you have: "+inventory;
  }
  else{
    text.innerText = "You do not have enough gold to buy a weapon.";

  }
}
else{
  text.innerText = "You already have the most powerful weapon!";
  /*Step 98
Once a player has the most powerful weapon, you can give them the ability to sell their old weapons.
In the outer else statement, set button2.innerText to "Sell weapon for 15 gold". Also set button2.onclick to the function name sellWeapon.*/
button2.innerText="Sell weapon for 15 gold";
button2.onclick=sellWeapon;

}
  
}
/*step 99*/
function sellWeapon(){
  if(inventory.length >1){
    if (inventory.length > 1) {
      gold+=15;
      goldText.innerText=gold;
      /*Step 102
The next step is to create a variable called currentWeapon.
Notice that you already have a currentWeapon variable elsewhere in your code. Since this new currentWeapon variable will be inside an if statement, it will be scoped only to that block of code.
Scope is the term used to describe where a variable can be accessed. If a variable is declared inside a block of code, it is only accessible to the code inside that block. This is called block scope.
let num = 1;
if (num === 1) {
  let num = 2; // this num is scoped to the if statement
  console.log(num); // expected output: 2
  }
console.log(num); // expected output: 1 (the global variable)
*******************************************
Step 103
The shift() method on an array removes the first element in the array and returns it.
const numbers = [1, 2, 3];
const firstNumber = numbers.shift(); // returns 1
*/
 let currentWeapon=inventory.shift();
 text.innerText="You sold a "+ currentWeapon +".";
 text.innerText+=" In your inventory you have: "+inventory;
  
    }

  }
  else{
    text.innerText="Don't sell your only weapon!";
  }
}
/***************************************/
/*Step 69
Create two more empty functions named fightSlime and fightBeast. These functions will be used in your upcoming cave object.*/
function fightSlime(){
  /*Step 109
In your fightSlime function, set fighting equal to 0 - the index of slime in the monsters array. Remember that you already declared fighting earlier in your code, so you do not need let or const here. */
fighting=0;
goFight();

}
function fightBeast(){
  fighting=1;
goFight();
  
}
function fightDragon () {
  fighting=2;
  goFight();
  }
  /*Step 108
Fighting each type of monster will use similar logic. Create an empty function called goFight to manage this logic */
function goFight (){
  /*Step 113
In the goFight function, call your update function with the fourth object in locations as an argument. */
update(locations[3]);
/* Step 114
Below your update call, set the monsterHealth to be the health of the current monster. You can get this value by accessing the health property of monsters[fighting] with dot notation.*/
monsterHealth=monsters[fighting].health;
/*The style property is used to access the inline style of an element and the display property is used to set the visibility of an element.*/
monsterStats.style.display = 'block';
monsterName.innerText=monsters[fighting].name;
  monsterHealthText.innerText=monsterHealth ;
  
}
/*Step 111*/
function attack(){
  /*step-117*/
  text.innerText = "The " + monsters[fighting].name + " attacks.";

  text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
/* Step 141
Inside your attack function, change your health -= monsters[fighting].level; line to health -= getMonsterAttackValue(monsters[fighting].level);. This sets health equal to health minus the return value of the getMonsterAttackValue function, and passes the level of the monster as an argument.
*/
  //health -=monsters[fighting].level;
  health -= getMonsterAttackValue(monsters[fighting].level);
  /*Step 147
In your attack function, below the health variable, create an if statement. Set the condition to call the isMonsterHit function. */
if(isMonsterHit() ){
    //Move your monsterHealth assignment into your if block.
    monsterHealth -= (weapons[currentWeapon]. power + Math.floor(Math.random() * xp) + 1);

}
else{
  text.innerText +=" You miss.";
}
;
  /*Step 120
Set monsterHealth to monsterHealth minus the power of the player's current weapon. Remember you have the currentWeapon variable and the power property. */
/*Step 121
The Math object in JavaScript contains static properties and methods for mathematical constants and functions. One of those is Math.random(), which generates a random number from 0 (inclusive) to 1 (exclusive). Another is Math.floor(), which rounds a given number down to the nearest integer.*/
/*############################################
//monsterHealth -= (weapons[currentWeapon].  #  power + Math.floor(Math.random() * xp) + 1); #
##############################################
*/
healthText.innerText= health ;
 monsterHealthText.innerText=monsterHealth;
 /*Step 123
Add an if statement to check if health is less than or equal to 0. If it is, call the lose function.*/
if(health<=0){
  lose();

}
else if(monsterHealth<=0){
  /*Step 137
Back to your attack function - inside the else if block, create another if and else statement. If the player is fighting the dragon (fighting would be 2), call the winGame function. Move the defeatMonster() call to the else block.*/
  if (fighting  === 2) {
    winGame();

} else {
defeatMonster();

}
}
/*Step 152
On every attack, there should be a chance that the player's weapon breaks. At the end of the attack function, add an empty if statement with the condition Math.random() <= .1. */
if(Math.random() <= .1 && inventory.length!==1 )
{

}
/* Step 153
Use the += operator to add " Your <weapon> breaks.", with a space in front of Your, to the end of text.innerText. Replace <weapon> with the last item in the inventory array using inventory.pop(), which will remove the last item in the array AND return it so it appears in your string.*/
text.innerText+=" Your "+inventory.pop()+ " breaks.";
currentWeapon--;

}
function getMonsterAttackValue(level) {
  /**Step 143
The attack of the monster will be based on the monster's level and the player's xp. In the getMonsterAttackValue function, use const to create a variable called hit. Assign it the equation (level * 5) - (Math.floor(Math.random() * xp));.
This will set the monster's attack to five times their level minus a random number between 0 and the player's xp. */
const hit=(level * 5) - (Math.floor(Math.random() * xp));
//step 145
console.log(hit);
/*step 146
The ternary operator is a conditional operator and can be used as a one-line if-else statement. The syntax is: condition ? expressionIfTrue : expressionIfFalse. */
return hit>0 ?hit:0;


}
/* Step 150
Now create the isMonsterHit function. This will return a boolean value (true or false) to be used in your if statement. Return the result of the comparison Math.random() > .2.*/
function isMonsterHit(){
  if(true){
  return Math.random() > .2 || health<20;
  }
}

/* Step 126
Inside the dodge function, set text.innerText equal to the string "You dodge the attack from the <monster>".*/
function dodge(){
  text.innerText="You dodge the attack from the "+ monsters[fighting].name;
  
}
/*Step 125
At the end of your code, create the defeatMonster and lose functions. Leave them empty for now.*/
function defeatMonster(){
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText=gold;
  xpText.innerText=xp;
  /*Step 130
Finish the defeatMonster function by calling the update function with locations[4] as the argument. */
update(locations[4]);
}
function lose(){
  /*step-134 */
  update(locations[5]);

}
/*step-139 */
function winGame(){
  update(locations[6]);
}
/* Step 135-restart function*/
function restart(){
  let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let inventory = ["stick"];
goldText.innerText=gold;
healthText.innerText=health;
xpText.innerText=xp;
goTown();
}

/*Step 156
Now you can add a small easter egg (hidden feature) to your game. */
function easterEgg(){
  update(locations[7]);
}

/* Step 158
Create two new functions named pickTwo and pickEight.
Inside each of those, call the pick() function and pass either 2 or 8 as the argument depending on the function name.*/
function pickTwo(){
  pick(2);
  }
function pickEight(){
  pick(8);
  }

/*Step 157
Create an empty pick function with a parameter named guess. */
function pick(guess){
  /*Step 160
Inside pick, use const to initialize a variable named numbers and set it to an empty array. */
const numbers=[];
while (numbers.length < 10) {
/*Step 162
Inside your while loop, push a random number between 0 and 10 to the end of the numbers array. You can create this random number with Math.floor(Math.random() * 11). */
numbers.push(Math.floor(Math.random() * 11));
}
text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
//step-169
for (let i = 0; i < 10; i++) {
  text.innerText += numbers[i] + "\n";
}if (numbers.includes(guess)) {
  /* Step 171
Inside the if statement, add the string "Right! You win 20 gold!" to the end of text.innerText. Also, add 20 to the value of gold and update the goldText.innerText.*/
  text.innerText+="Right! You win 20 gold!";
  gold+=20;
  goldText.innerText = gold;

}
/*Step 172
Now add an else statement. Inside, add "Wrong! You lose 10 health!" to the end of text.innerText. Subtract 10 from health and update healthText.innerText.*/
else{
  text.innerText += "Wrong! You lose 10 health!";
 health  -= 10;
 healthText.innerText = health ;
}
/* Step 173
Since you subtracted health from the player, you need to check if the player's health is less than or equal to 0. If it is, call the lose function.*/
if(health <=0){
  lose();
}





}
  

