var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
    allTestFiles.push(normalizedTestModule);
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',
  paths: {
      jquery: 'js/vendors/jquery.min',
      bootstrap: 'js/vendors/bootstrap.min',
      replacementRules: 'js/app/replacementRules',
      translationRule1: 'js/app/translationRule1',
      translationRule2: 'js/app/translationRule2',
      translationRule3: 'js/app/translationRule3',
      translationRule4: 'js/app/translationRule4',
      translationRule5: 'js/app/translationRule5',
      translationRule6: 'js/app/translationRule6',
      translationRule7: 'js/app/translationRule7',
      translationRule8: 'js/app/translationRule8',
      translationRule9: 'js/app/translationRule9',
      translationRule10: 'js/app/translationRule10'
  },
  shim: {
      bootstrap: ['jquery']
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
