angular.module('video-player')
  .component('videoPlayer', {
    controller: function() {
      this.getVideoSrc = function(src) {
        return 'https://www.youtube.com/embed/' + src;
      };
    },
    bindings: {
      video: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
