
/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount, intPoints, intInterval, intRange;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/

intMin = prompt("Please enter the minimum number for your guessing range \n(must be at least 0)\n(type \"quit\" to quit)");
while(intMin!="quit")
{
if(intMin=="quit")
{
    break;
}
else{
while((isNaN(intMin)==true || intMin<0) && intMin!="quit") //Checks to see if input is a number and is at least 0
{
  alert("Please enter a valid number");
  intMin = prompt("Please enter the minimum number for your guessing range \n(must be at least 0)\n(type \"quit\" to quit)");
}
}
if(intMin=="quit")
{
    break;
}






/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/
intMax = parseFloat(prompt("Please enter the maximum number for your guessing range \n(must be at least 2 more than the minimum)"));
while(isNaN(intMax)==true || intMax<(intMin + 2)) //Checks to see if input is a number and is at least 2 more than minimum
{
  alert("Please enter a valid number");
  intMax = parseFloat(prompt("Please enter the maximum number for your guessing range \n(must be at least 2 more than the minimum)"));
}







/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt(Math.floor(Math.random()*(intMax-intMin+1))+intMin);


// set the loop counter
intCount = 1;
//set points for the game
intPoints = 100;
//sets the range of the game by doing max minus min
intRange = intMax - intMin;
//sets the interval that points will decrease based on how big the range is
if(intRange<=50)
{
    intInterval = 20;
}
else if(intRange<=100)
{
    intInterval = 10;
}
else if(intRange<=10000)
{
    intInterval = 5;
}
else
{
    intInterval = 1;
}


/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/

intGuess = parseInt(prompt("Enter your guess"));
while(isNaN(intGuess)==true || intGuess>intMax || intGuess<intMin) //Checks to see if input is a number or if it is in the range
    {
        alert("Please make sure you typed in a number and that it is within your given range");
        intGuess = parseInt(prompt("Enter your guess"));
    }




/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */
while(intGuess != intRandom)
{
    if(intGuess>intRandom)
    {
        
       alert(intGuess + " is too high! Keep trying!");
       intGuess = parseInt(prompt("Enter your guess"));
    }
    else
    {
        alert(intGuess + " is too low! Keep Trying!");
        intGuess = parseInt(prompt("Enter your guess"));
    }
    intCount ++;
    if(intPoints>0)
    {
        intPoints -= intInterval;
    }
    if(intPoints<0)
    {
        intPoints = 0;
    }
    
}
 
 
 
 
 
 
 
 

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		"and it only took you " + intCount + " attempts!\n" +
            "You scored " + intPoints + "/100 points!");
}
