//Bussiness Logic
const wordPuzzle = "puzzle";
  let wordSplit = wordPuzzle.split('');
function vowelReplace(element){ 
  for (i=0; i<wordSplit.length-1; i++) {
    if (element[i] === "a" || element[i] === "e" || element[i] === "i" || element[i] === "o" || element[i] === "u") {
      wordSplit[i] = "-";
      console.log(wordSplit);
      return wordSplit;
    };
  };
};


//UI Logic
$(document).ready(function(){
  event.preventDefault();
  console.log(wordSplit);

  const newSplit = vowelReplace(wordSplit);
  //JoinSplit = newSplit.join();
  //console.log(JoinSplit);
});


