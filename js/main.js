requirejs.config({
    base: 'js',
    paths: {
        jquery: 'vendors/jquery.min',
        bootstrap: 'vendors/bootstrap.min',
        replacementRules: 'app/replacementRules',
        translationRule1: 'app/translationRule1',
        translationRule2: 'app/translationRule2',
        translationRule3: 'app/translationRule3',
        translationRule4: 'app/translationRule4',
        translationRule5: 'app/translationRule5',
        translationRule6: 'app/translationRule6',
        translationRule7: 'app/translationRule7',
        translationRule8: 'app/translationRule8',
        translationRule9: 'app/translationRule9',
        translationRule10: 'app/translationRule10'

    },
    shim: {
        bootstrap: ['jquery']
    }
});
require(['app', 'bootstrap'], function(app, $){

});
