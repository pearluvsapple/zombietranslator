define([], function(){

  //Function Zombie Speech Rule 8
  function zombieSpeechRule8(aString){
    return aString.replace(/R|r(?!h\b)/g,'RR');
  }

  return zombieSpeechRule8;
});
