//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
};

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
if(isNaN(intCount)==true || intCount<2 || intCount>100) //Checks to see if input is a number or less than 2 or greater than 100
{
  alert("Please enter a number between 2 and 100");
  $("total_fib").value = ""; //blanks the DOM input box
}
else{
    
    
	var i=0;  // sets the first number in the Fibonacci series to 0
	var j=1;  //sets the second number in the Fibonacci series to 1
	var k;    //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput = "0 1 ";//initialize the Fibonacci series output to include the first two numbers

	// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM
    if(intCount==2)
    {
        $("output").value = stringOutput; //displays stringOutput in the output DOM box
    }
    else
    {
    while(intCount>2) // number is 2 because stringOutput already includes the first two fibonacci numbers
    {
        k = i + j; //makes k equal the addition of the last two numbers
        i = j; //shifts the value of i to the new next to last number
        j = k; //shifts the value of j to the new last number which is k
        stringOutput = stringOutput + k + " "; //adds k to the stringOutput
        intCount--;
    }
    // Push solution back to Output through DOM
    $("output").value = stringOutput;
    }
}
}; 



window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
};  