angular.module('video-player')
  .component('videoList', {
    controller: function() {
    },

    bindings: {
      videos: '<',
      onClick: '<'
    },

    templateUrl: 'src/templates/videoList.html'
  });
