//Function Zombie Speech Rule 1
function zombieSpeechRule1(aString){
  return aString.replace(/r$/,'rh');
}

//Function Zombie Speech Rule 2
function zombieSpeechRule2(aString){
  return aString.replace(/\b[Aa]\b/,'rha');
}

//Function Zombie Speech Rule 3
function zombieSpeechRule3(aString){
  var replacementString = "",
      iIsZero = false,
      iIsGreaterThanOrEqualTo2 = false,
      startOfSentence = false,
      characterIsPreceededBySpace = false,
      characterIsPreceededByPunct = false,
      thisCharacter;


  for( var i = 0; i < aString.length; i++){
    thisCharacter = aString.charAt(i);

    iIsGreaterThanOrEqualTo2 = i >= 2;
    iIsZero = i === 0;

    characterIsPreceededBySpace = iIsGreaterThanOrEqualTo2 && ( aString.charAt(i-1) === ' ' );

    characterIsPreceededByPeriod = iIsGreaterThanOrEqualTo2 && ( aString.charAt(i-2) === '.');
    characterIsPreceededByExclaim = iIsGreaterThanOrEqualTo2 && ( aString.charAt(i-2) === '!');
    characterIsPreceededByQuestion = iIsGreaterThanOrEqualTo2 && ( aString.charAt(i-2) === '?');

    characterIsPreceededByPunct = characterIsPreceededByQuestion || characterIsPreceededByExclaim || characterIsPreceededByPeriod;

    startOfSentence = iIsZero || (characterIsPreceededBySpace && characterIsPreceededByPunct);

    if ( startOfSentence ){
      replacementString += thisCharacter.toUpperCase();
    } else {
      replacementString += aString.charAt(i);
    }
  }
  return replacementString;
}


//Function Zombie Speech Rule 4
function zombieSpeechRule4(aString){
  return aString.replace(/[Ee]/g,'rr');
}


//Function Zombie Speech Rule 5
function zombieSpeechRule5(aString){
  return aString.replace(/[Ii]/g,'rrRr');
}

//Function Zombie Speech Rule 6
function zombieSpeechRule6(aString){
  return aString.replace(/[Oo]/g,'rrrRr');
}

//Function Zombie Speech Rule 7
function zombieSpeechRule7(aString){
  return aString.replace(/[Uu]/g,'rrrrRr');
}

//Function Zombie Speech Rule 8
function zombieSpeechRule8(aString){
  return aString.replace(/[Rr]/g,'RR');
}
