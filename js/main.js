requirejs.config({
    base: 'js',
    paths: {
        jquery: 'vendors/jquery.min',
        bootstrap: 'vendors/bootstrap.min',
        playlist: 'Playlist'
    },
    shim: {
        bootstrap: ['jquery']
    }
});
require(['app', 'bootstrap'], function(app, $){

});
