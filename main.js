require.config({
  baseUrl: '.',
  paths: {
    'jquery'        : 'bower_components/jquery/dist/jquery',
    'underscore'    : 'bower_components/underscore/underscore',
    'backbone'      : 'bower_components/backbone/backbone',
    'mocha'         : 'bower_components/mocha/mocha',
    'chai'          : 'bower_components/chai/chai',
    'chai-jquery'   : 'bower_components/chai-jquery/chai-jquery',
    'should':'bower_components/should/should'
  },
  shim: {
    'chai-jquery': ['jquery', 'chai']
  }
  
});

define(['chai','jquery','mocha','require'],function(Chai,$,Mocha,require) {
  
  
  
  
  
  
  //place tests here

  // Chai
  /*
  var should = chai.should();
  chai.use(chaiJquery);
  */

  mocha.setup('bdd');

  

  /*
  //test call format
  require([
    'specs/model-tests.js',
  ], function(require) {
    mocha.run();
  });
  */

  require(['defaultTest.js'],function(require){
    mocha.run();
  });
});