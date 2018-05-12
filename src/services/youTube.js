angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(options, callback) {
      $http.get('https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            q: options.query || 'dogs',
            maxResults: options.max || 5,
            key: options.key || YOUTUBE_API_KEY,
            part: 'snippet',
            type: 'video',
            videoEmbeddable: true
          }
        }
      ).then(function(response) {
        callback(response.data.items);
      });
    };
  });
