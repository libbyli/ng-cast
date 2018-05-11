angular.module('video-player')
  .component('videoList', {
    controller: function() {
      this.onClick = () => {};
    },

    bindings: {
      videos: '<',
      onClick: '<'
    },

    templateUrl: 'src/templates/videoList.html'
  });
