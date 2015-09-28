define(['replacementRules'], function(RuleEngine){

  var myRuleEngine = new RuleEngine();

  //Rule 1:
  describe("Rule 1", function() {

    it("should replace lower case rs -at the end of a word- with rh", function() {
      var aStringToTest = 'lower',
        expectedString = 'lowerh',
        replacement = myRuleEngine.translationRule1(aStringToTest);

      expect(replacement).toBe(expectedString);
    });

    it("should replace lower case rs -at the end of a word- with rh", function() {
      var aStringToTest = 'roger, wilco',
        expectedString = 'rogerh, wilco',
        replacement = myRuleEngine.translationRule1(aStringToTest);

      expect(replacement).toBe(expectedString);
    });

    it("should replace lower case rs -at the end of a word- with rh", function() {
      var aStringToTest = 'riddle',
        expectedString = 'riddle',
        myRuleEngine = new RuleEngine(),
        replacement = myRuleEngine.translationRule1(aStringToTest);

      expect(replacement).toBe(expectedString);
    });

    it("Ignores Capital R", function() {
      var aStringToTest = 'RwaR',
        expectedString = 'RwaR',
        myRuleEngine = new RuleEngine(),
        replacement = myRuleEngine.translationRule1(aStringToTest);

      expect(replacement).toBe(expectedString);
    });

    it('should not choke on null input', function(){
      var testContent = "",
          expectedContent = "",
          transformedContent = myRuleEngine.translationRule1(testContent);

      expect(transformedContent).toBe(expectedContent);
    });

  });

  //Rule: 2
  describe('Rule 2', function(){

    it('should not replace anything in the middle of a word', function(){
      expect(myRuleEngine.translationRule2('stand')).toBe('stand');
    });

    it('should replace stand alone lowercase a', function(){
      expect(myRuleEngine.translationRule2('a cat in the hat')).toBe('hra cat in the hat');
    });

    it('should replace stand alone uppercase a', function(){
      expect(myRuleEngine.translationRule2('A cat in the hat')).toBe('hra cat in the hat');
    });

    it('should replace on a or A at the beginning of a word', function(){
      expect(myRuleEngine.translationRule2('Apple')).toBe('Apple');
    });

    it('should not replace an a at the end of a word', function(){
      expect(myRuleEngine.translationRule2('Abba')).toBe('Abba');
    });

    it('should not choke on null input', function(){
      var testContent = "",
          expectedContent = "",
          transformedContent = myRuleEngine.translationRule2(testContent);
      expect(transformedContent).toBe(expectedContent);
    });
  });

  //Rule: 3
  describe('Rule 3', function(){
    it('should capitalize the start of one setence', function(){
      var testContent = "the quick brown...",
          expectedContent = "The quick brown...",
          transformedContent = myRuleEngine.translationRule3(testContent);
      expect(myRuleEngine.translationRule3(transformedContent)).toBe(expectedContent);
    });

    it('should capitalize the first letter of each sentence in a collection of declarative sentences', function(){
      var testContent = "hi, I'm Chris. i live at 86 webster avenue",
          expectedContent = "Hi, I'm Chris. I live at 86 webster avenue",
          transformedContent = myRuleEngine.translationRule3(testContent);
      expect(transformedContent).toBe(expectedContent);
    });

    it('should capitalize the first letter of each sentence in a collection of declarative or interogative sentences', function(){
      var testContent = "what is your name? mine is Chris",
          expectedContent = "What is your name? Mine is Chris",
          transformedContent = myRuleEngine.translationRule3(testContent);
      expect(transformedContent).toBe(expectedContent);
    });

    it('should not choke on null input', function(){
      var testContent = "",
          expectedContent = "",
          transformedContent = myRuleEngine.translationRule3(testContent);
      expect(transformedContent).toBe(expectedContent);
    });
  });

  //Rule 4
  describe('Rule 4', function(){
    it('should replace both e and E with the string rr in each sentence', function(){
      var testContent = "TherE is nothing wrong with this picturE",
          expectedContent = "Thrrrrr is nothing wrong with this picturrr",
          transformedContent = myRuleEngine.translationRule4(testContent);
      expect(transformedContent).toBe(expectedContent);
    });

    it('should replace both e and E when occuring alone', function(){
      var testContent = "E i E i o! e i e i o!",
          expectedContent = "rr i rr i o! rr i rr i o!",
          transformedContent = myRuleEngine.translationRule4(testContent);
      expect(transformedContent).toBe(expectedContent);
    });

    it('should not choke on null input', function(){
      var testContent = "",
          expectedContent = "",
          transformedContent = myRuleEngine.translationRule4(testContent);
      expect(transformedContent).toBe(expectedContent);
    });

  });

  //Rule 5
  describe('Rule 5', function(){
    it('should replace both i and I with the string rrRr in each sentence', function(){
      var testContent = "There IS nothing wrong wIth this pIcture",
          expectedContent = "There rrRrS nothrrRrng wrong wrrRrth thrrRrs prrRrcture",
          transformedContent = myRuleEngine.translationRule5(testContent);
      expect(transformedContent).toBe(expectedContent);
    });

    it('should replace both i and I when occuring alone', function(){
      var testContent = "e I e I o! e i e i o!",
          expectedContent = "e rrRr e rrRr o! e rrRr e rrRr o!",
          transformedContent = myRuleEngine.translationRule5(testContent);
      expect(transformedContent).toBe(expectedContent);
    });

    it('should not choke on null input', function(){
      var testContent = "",
          expectedContent = "",
          transformedContent = myRuleEngine.translationRule5(testContent);
      expect(transformedContent).toBe(expectedContent);
    });

  });

  //Rule 6
  describe('Rule 6', function(){
    it('should replace both o and O with the string rrrRr in each sentence', function(){
      var testContent = "Welcome to the Dollhouse",
          expectedContent = "WelcrrrRrme trrrRr the DrrrRrllhrrrRruse",
          transformedContent = myRuleEngine.translationRule6(testContent);
      expect(transformedContent).toBe(expectedContent);
    });

    it('should replace both o and O when occuring alone', function(){
      var testContent = "ei ei oh! ei ei OH! o O o O",
          expectedContent = "ei ei rrrRrh! ei ei rrrRrH! rrrRr rrrRr rrrRr rrrRr",
          transformedContent = myRuleEngine.translationRule6(testContent);
      expect(transformedContent).toBe(expectedContent);
    });

    it('should not choke on null input', function(){
      var testContent = "",
          expectedContent = "",
          transformedContent = myRuleEngine.translationRule6(testContent);
      expect(transformedContent).toBe(expectedContent);
    });

  });

  //Rule 7
  describe('Rule 7', function(){
    it('should replace both u and U with the string rrrrRr in each sentence', function(){
      var testContent = "Have you seen a unicorn today?  Well, have U?",
          expectedContent = "Have yorrrrRr seen a rrrrRrnicorn today?  Well, have rrrrRr?",
          transformedContent = myRuleEngine.translationRule7(testContent);
      expect(transformedContent).toBe(expectedContent);
    });

    it('should replace both u and U when occuring alone', function(){
      var testContent = "Ur UR u .U /u U? u!",
          expectedContent = "rrrrRrr rrrrRrR rrrrRr .rrrrRr /rrrrRr rrrrRr? rrrrRr!",
          transformedContent = myRuleEngine.translationRule7(testContent);
      expect(transformedContent).toBe(expectedContent);
    });

    it('should not choke on null input', function(){
      var testContent = "",
          expectedContent = "",
          transformedContent = myRuleEngine.translationRule7(testContent);
      expect(transformedContent).toBe(expectedContent);
    });

  });

  //Rule 8
  describe('Rule 8', function(){
    it('should replace both r and R with the string RR in each sentence', function(){
      var testContent = "Roger that Ricky",
          expectedContent = "RRogeRR that RRicky",
          transformedContent = myRuleEngine.translationRule8(testContent);
      expect(transformedContent).toBe(expectedContent);
    });

    it('should replace both r and R when occuring alone', function(){
      var testContent = "R you sleepy? r you hungry? R2D2",
          expectedContent = "RR you sleepy? RR you hungRRy? RR2D2",
          transformedContent = myRuleEngine.translationRule8(testContent);
      expect(transformedContent).toBe(expectedContent);
    });

    it('should not choke on null input', function(){
      var testContent = "",
          expectedContent = "",
          transformedContent = myRuleEngine.translationRule8(testContent);
      expect(transformedContent).toBe(expectedContent);
    });

  });

});
