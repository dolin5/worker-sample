//*********************************************************
// module: workerScripts/TimeOfTheDay.js
//*********************************************************

define(["esri/core/promiseUtils"], function (promiseUtils) {
  return {
    timeOfTheDay: function (noArgs, remoteClient) {
      // call back the main thread to get the current time over there.
      return remoteClient.invoke("getCurrentTime").then(function (time) {
        return "The time is " + time;
      });
    },
  };
});
