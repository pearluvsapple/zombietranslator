define([], function(){

  //Function Zombie Speech Rule 2
  function zombieSpeechRule2(aString){
    return aString.replace(/\b[Aa]\b/g,'hra');
  }

  return zombieSpeechRule2;
});
