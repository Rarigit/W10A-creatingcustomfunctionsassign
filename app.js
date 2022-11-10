//For this function i just got two intergers and followed BEDMAS principles to get an answer. i console logged 
function getComputation(Int1,Int2 ) {
    let answer = ((Int1 + Int2)*5);
    return answer;
}

//Testing functions with different arguments I made up
console.log(getComputation(10,10));
console.log(getComputation(5,5));
console.log(getComputation(4,4));

//Called the argument string person and then i calculated its length and returned a true/false via an if/else statement
function getMeasurement(person) { 
    if (person.length > 10){ // person represents the strings being tested
        return true; 
    } else {
        return false;
    }
}

//Testing functions with different arguments i made up.
console.log(getMeasurement(`Koulibalyzi`));
console.log(getMeasurement(`small`));
console.log(getMeasurement(`phycsholgist`));



//This one we had a very similiar example in class, so it was easy to figure out. I did a basic for loop and iterated it over an array of 5 values.   
function findFirstPh(array) { //function name has to describe operation. use camel-casing for every new word start.
    // let array = ["aphrodite", "television", "phone", "microwave", "radio"]; Commented out as i already made the for loop and now i want to encase the loop inside a function.

    for (let i = 0; i < array.length; i++){

        let itarray = array[i];//This is the key variable assignment as it allows for each array value to be checked against the in-built includes function!!

        let extractfromArray = itarray.startsWith("ph");//I then assigned a variable name to the previous assigned variable coupled with the in-built include function to check
        //which of my array values include the letters "ph" 

        if (extractfromArray === true){ //if it is of equal value and type comparison statement 
            return array[i];
            }
    }
}

//testing functions with different argument I made up
console.log(findFirstPh(["aphrodite", "television", "phone", "microwave", "radio"]));
console.log(findFirstPh(["sin", "two", "rick", "tea", "chi"]));
console.log(findFirstPh(["van", "Phyllyis", "phuket", "microwave", "phone"]));



