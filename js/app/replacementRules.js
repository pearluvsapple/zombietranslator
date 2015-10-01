var translationRequirements = [
    'translationRule1',
    'translationRule2',
    'translationRule3',
    'translationRule4',
    'translationRule5',
    'translationRule6',
    'translationRule7',
    'translationRule8',
    'translationRule9',
    'translationRule10'
  ],
  requirements = ['require'];


define(requirements.concat(translationRequirements), function(require){

  function Translator() {}

  Translator.prototype.translate = function(input, direction){
    direction = direction || 'zombify';
    var zombify = "";
        zombify = this.translationRule9(input, direction);
        zombify = this.translationRule10(zombify, direction);
        zombify = this.translationRule1(zombify, direction);
        zombify = this.translationRule8(zombify, direction);
        zombify = this.translationRule2(zombify, direction);
        zombify = this.translationRule4(zombify, direction);
        zombify = this.translationRule5(zombify, direction);
        zombify = this.translationRule6(zombify, direction);
        zombify = this.translationRule7(zombify, direction);
        zombify = this.translationRule3(zombify, direction);
    return zombify;
  };

  for(var i=0; i <= translationRequirements.length; i++ ){
    var x = translationRequirements[i];
    Translator.prototype[x] = require(x);
  }

  return Translator;

});
