"use strict";

const Alexa = require('alexa-sdk');

var newSessionHandlers = {
    'LaunchRequest' : function(){
      var message = 'Hi';
      var reprompt = 'safdsf';
      this.response.speak(message).listen(reprompt);
      this.emit(':responseReady');
    },

    'Quacksion' : function(){},

    'AMAZON.HelpIntent' : function () {
      var message = 'deezballser';
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

export.handler = function (event, context) {
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(newSessionHandlers);
  alexa.execute();
}
