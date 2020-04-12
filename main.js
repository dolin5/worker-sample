require(["esri/config", "esri/core/workers"], function (esriConfig, workers) {
  // Load workerScripts/TimeOfTheDay.js in the workers framework
  // We define an API accessible from the module
  esriConfig.workers.loaderConfig = {
    paths: {
      //workers: window.location.href.replace(/\/[^/]+$/, "/workerScripts")
      workers: window.location.href + "workerScripts",
    },
  };
  workers
    .open("workers/TimeOfTheDay", {
      client: {
        getCurrentTime: function () {
          return Date.now();
        },
      },
    })
    .then(function (connection) {
      return connection.invoke("timeOfTheDay");
    })
    .then(function (result) {
      document.getElementById("time").innerText = result;
    });
});
