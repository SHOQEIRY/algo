
/*document.getElementById("SUB").addEventListener("click", answer)
function answer() {
    let string = document.getElementById("countCharacters").value;
    let numberOfCharacters = string.length;
    console.log(numberOfCharacters);
    document.getElementById("answer").innerHTML="answer= " + numberOfCharacters;
    let vowels=["a","e","o","i","u"];
    let vowelCounter = 0;
    for (let i = 0; i < string.length; i++ ){
        for (let j = 0; j < vowels.length; j++)
        {
            if (string[i].toLowerCase() == vowels[j]){
                vowelCounter += 1
                console.log(vowelCounter)
            } 
        }
    }
}
answer("my namr is id mohamed")
/*/

function answer(string) { // parameter
    let numberOfCharacters = string.length;
    let vowelsCounter = 0;
    let vowels = ["a", "e", "i", "u", "o"];
    let wordsCounter = string.split(" ").length;

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (string[i].toLowerCase() == vowels[j]) {
                vowelsCounter += 1;
            }
        }
    }

    console.log("Number of characters = " + numberOfCharacters)
    console.log("Number of words = " + wordsCounter);
    console.log("Number of vowels = " + vowelsCounter);
}




