angular.module('video-player')
  .component('videoListEntryThumbnail', {
    bindings: {
      videoThumbnailUrl: '<'
    },
    templateUrl: 'src/templates/videoListEntryThumbnail.html'
  });
