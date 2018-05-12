angular.module('video-player')
  .component('videoListEntry', {
    controller: function() {
    },

    bindings: {
      video: '<',
      onClick: '<'
    },

    templateUrl: 'src/templates/videoListEntry.html'
  });
