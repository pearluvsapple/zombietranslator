require(['replacementRules','jquery'],function(Translator,$){

  var aTranslator = new Translator();

  $(document).ready(function(){
    // $('#zombie-to-english-btn').click(function(event){
    //   unzombify();
    //   return false;
    // });
    //
    // $('#english-to-zombie-btn').click(function(event){
    //   zombify();
    //   return false;
    // });

    function zombify(){

      var zombieInput = $('#zombie').val(),
        englishInput = $('#english').val(),

        zombieOutput = aTranslator.translate(englishInput);

      $('#zombie').val(zombieOutput);
    }

    // function unzombify(){
    //   var zombieInput = $('#zombie').val(),
    //     englishInput = $('#english').val(),
    //     englishOutput = aTranslator.reverseTranslate(zombieInput);
    //
    //   $('#english').val(englishOutput);
    //
    // }

    $('#english').on("keyup", zombify);
    //$('#zombie').on("keyup", unzombify);
  });
});
