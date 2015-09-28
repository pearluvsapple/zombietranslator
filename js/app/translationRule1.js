define([], function(){
  //Function Zombie Speech Rule 1
  function zombieSpeechRule1(aString, aDirection){
    aDirection = aDirection || 'zombify';
    if(aDirection === 'zombify'){
      return aString.replace(/r\b/g,'rh');
    } else {
      return aString.replace(/r\b/g,'ENGLISH');
    }
  }
  return zombieSpeechRule1;
});
