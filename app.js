//For this function i just got two intergers and followed BEDMAS principles to get an answer. i console logged 
function getComputation(Int1,Int2 ) {
    let answer = ((Int1 + Int2)*5);
    return answer;
}
console.log(getComputation(10,10));


//This function i used a string argument and asigned it a (placeholder). I then assigned my variablename a string and i compared the length of the string to 10 with an if else statement.
function getMeasurement(a) { //The only issue I'm having is that i keep returning an unwanted value: "Koulibalyzi". I dont know how to get rif of it
    let firstname = "Koulibalyzi"
    if (firstname.length > 10){
        console.log('true');
    } else {
        console.log(`false`)
    }
    return firstname;
}
console.log(getMeasurement(`Koulibalyzi`));



//This one we had a very similiar example in class, so it was easy to figure out. I did a basic for loop and iterated it over an array of 5 values.   
let array = ["fridge", "television", "phone", "microwave", "radio"];

for (let i = 0; i < array.length; i++){

    let itarray = array[i];//This is the key variable assignment as it allows for each array value to be checked against the in-built includes function!!

    let extractfromArray = itarray.includes("ph");//I then assigned a variable name to the previous assigned variable coupled with the in-built include function to check
    //which of my array values include the letters "ph" 

    if (extractfromArray === true){ //if it is of equal value and type comparison statement 
        console.log(`The first element is: ${array[i]}`);
    }
}



