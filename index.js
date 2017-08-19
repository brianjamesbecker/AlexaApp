"use strict";

const Alexa = require('alexa-sdk');
var http = require('http');


var newSessionHandlers = {
    'LaunchRequest' : function(){
      var client = http.createClient(80, "google.com");
      var message = "";
      request = client.request();
      request.on('response', function( res ) {
          res.on('data', function( data ) {
              message = data.toString();
          } );
      } );
      request.end();
      this.emit(':tell', message);
    },

    'AMAZON.HelpIntent' : function () {
      var message = 'yo money';
      this.response.speak(message).listen(message);
      this.emit(':responseReady');
    },

    'AMAZON.StopIntent' : function() {
      var message = 'see ya boy';
      this.response.speak(message);
      this.emit('responseReady');
    },

    'AMAZON.CancelIntent' : function () {
      var message = 'later';
      this.response.speak(message);
      this.emit('responseReady');
    }
  };

exports.handler = function (event, context) {
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(newSessionHandlers);
  alexa.execute();
}
