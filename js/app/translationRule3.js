define([], function(){

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

  return zombieSpeechRule3;
});
