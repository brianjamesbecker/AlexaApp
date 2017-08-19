"use strict";

const Alexa = require('alexa-sdk');

var newSessionHandlers = {
    'LaunchRequest' : function(){
      var xmlHttp;
      xmlHttp=new XMLHttpRequest();
      var url = "http://numbersapi.com/" + d.getMonth() + "/" + d.getDate() + "/date";
      xmlHttp.onreadystatechange = function()
      {
          if (xmlHttp.readyState==4 && xmlHttp.status==200)
          {
              var msg = xmlHttp.responseText;
          }
      }
      xmlHttp.open("GET", url, true);
      xmlHttp.send(null);
      msg = xmlHttp.responseText;
      this.emit(':tell', msg);
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
