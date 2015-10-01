define([], function () {

  //Function Zombie Speech Rule 9
  function zombieSpeechRule9(aString) {
    return aString.replace(/[`~@#$%^&*()_|+\-=;:'"<>\{\}\[\]\\\/]/gi, '');
  }
  return zombieSpeechRule9;
});
