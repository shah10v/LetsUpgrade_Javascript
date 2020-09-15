// Solution 1
console.log("Solution 1:");
function searchCharacter() {
    let name = "TanviShah"; 
    let n = name.search("S");
    document.getElementById("solution1").innerHTML = "Searched Char " + name[n] + " at position " + n + " in String - " +name ;
    console.log("Searched Char " + name[n] + " at position " + n  + " in String - " +name);
  }
  searchCharacter();

// Solution 2
console.log("Solution 2:");
let mins = "2";
function mintosec(mins)
{
    let seconds = mins * 60;
    console.log(+ mins + " Minutes"  + " = " +seconds + " Seconds");
    document.getElementById("solution2").innerHTML = +mins + " Minutes"  + " = " +seconds + " Seconds";
}
mintosec(mins);

// Solution 3
    console.log("Solution 3:");
    const array1 = ['apple', 'mango', 'cherry', 'pineapple'];
    const found = array1.find(element => element === 'mango');
    console.log("Array of strings: " +array1 + " includes " +found);
    document.getElementById("solution3").innerHTML = "Element " + found + " is present in arrray";


// Solution 4
console.log("Solution 4:");
    let array4 = ["Apple","Mango","Cherry","Pineapple","Plum","Banana"];
    console.log("Array of words is: " + array4);

    let wordswithchar_a = array4.find(element => element === 'a');
    // for(let i=0; i < 5; i++){
    //     console.log("i " +i);
    //     let wordswithchar_a = array4.search('a');
        console.log("Words having character 'a' " + wordswithchar_a);
    // }

// Solution 5
console.log("Solution 5:");
let array5 = ["R","A","I","N","B","O","W"];
let reversearray = array5.reverse();
console.log("Array in reverse order: "+ reversearray);
document.getElementById("solution5").innerHTML = "Array in reverse order: "+ reversearray;
