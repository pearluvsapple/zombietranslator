define(['replacementRules','translationRule1'], function(Translator, translationRule1){

  describe('Translation Rule Application Sequence', function(){
    var aTranslator = new Translator();

    it('somethingsomethingfoo', function(){
      var expectedRule1Output = 'Rule 1',
          expectedRule2Output = 'Rule 2',
          expectedRule3Output = 'Rule 3',
          expectedRule4Output = 'Rule 4',
          expectedRule5Output = 'Rule 5',
          expectedRule6Output = 'Rule 6',
          expectedRule7Output = 'Rule 7',
          expectedRule8Output = 'Rule 8',

          rule1Spy = spyOn(aTranslator, 'translationRule1').and.returnValue(expectedRule1Output),
          rule2Spy = spyOn(aTranslator, 'translationRule2').and.returnValue(expectedRule2Output),
          rule3Spy = spyOn(aTranslator, 'translationRule3').and.returnValue(expectedRule3Output),
          rule4Spy = spyOn(aTranslator, 'translationRule4').and.returnValue(expectedRule4Output),
          rule5Spy = spyOn(aTranslator, 'translationRule5').and.returnValue(expectedRule5Output),
          rule6Spy = spyOn(aTranslator, 'translationRule6').and.returnValue(expectedRule6Output),
          rule7Spy = spyOn(aTranslator, 'translationRule7').and.returnValue(expectedRule7Output),
          rule8Spy = spyOn(aTranslator, 'translationRule8').and.returnValue(expectedRule8Output);

      var input = 'literally anything',
          output = aTranslator.translate(input);

      expect(rule1Spy).toHaveBeenCalledWith(input, 'zombify');
      expect(rule8Spy).toHaveBeenCalledWith(expectedRule1Output, 'zombify');
      expect(rule2Spy).toHaveBeenCalledWith(expectedRule8Output, 'zombify');
      expect(rule4Spy).toHaveBeenCalledWith(expectedRule2Output, 'zombify');
      expect(rule5Spy).toHaveBeenCalledWith(expectedRule4Output, 'zombify');
      expect(rule6Spy).toHaveBeenCalledWith(expectedRule5Output, 'zombify');
      expect(rule7Spy).toHaveBeenCalledWith(expectedRule6Output, 'zombify');
      expect(rule3Spy).toHaveBeenCalledWith(expectedRule7Output, 'zombify');
      expect(output).toBe(expectedRule3Output);
    });
  });


  describe('Input/Output Verification', function(){
    // really unhappy at this point
    var aTranslator = new Translator();
    var translateString = 'A Roger, a Wilco. Charlie! I am Charlie? Who are you!';
    var expectedString = 'Hra RRrrrRrgrrrh, hra WrrRrlcrrrRr. ChaRRlrrRrrr! RrRr am ChaRRlrrRrrr? WhrrrRr aRRrr yrrrRrrrrrRr!';

    it('should should provide an accurate output the rules when the correct order is applied', function(){
      var output = "";
          output = aTranslator.translationRule1(translateString);
          output = aTranslator.translationRule8(output);
          output = aTranslator.translationRule2(output);
          output = aTranslator.translationRule4(output);
          output = aTranslator.translationRule5(output);
          output = aTranslator.translationRule6(output);
          output = aTranslator.translationRule7(output);
          output = aTranslator.translationRule3(output);

      expect(output).toBe(expectedString);
    });

  });

});
