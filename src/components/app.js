angular.module('video-player')
  .component('app', {
    controller: function(youTube) {
      this.videos = [];
      this.currentVideo = {};
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };

      this.searchResults = (searchText) => {
        youTube.search({query: searchText}, (videos) => {
          console.log(videos);
          this.videos = videos;
          this.currentVideo = videos[0];
        });
      };

      this.$onChanges = function() {
        youTube.search({query: 'dogs', key: YOUTUBE_API_KEY}, (videos) => {
          this.videos = videos;
          this.currentVideo = videos[0];
        });
      };
    },

    templateUrl: 'src/templates/app.html'
  });
