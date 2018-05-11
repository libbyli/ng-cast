angular.module('video-player')
  .component('videoListEntry', {
    controller: function() {
      // console.log(this);
    },

    bindings: {
      video: '<'
    },

    templateUrl: 'src/templates/videoListEntry.html'
  });
