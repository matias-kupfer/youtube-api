export interface ChannelResponse {
  'kind': string;
  'etag': string;
  'nextPageToken': string;
  'regionCode': string;
  'pageInfo': {
    'totalResults': number,
    'resultsPerPage': number
  };
  'items': [
    {
      'kind': string,
      'etag': string,
      'id': {
        'kind': string,
        'channelId': string
      },
      'snippet': {
        'publishedAt': string,
        'channelId': string,
        'title': string,
        'description': string,
        'thumbnails': {
          'default': {
            'url': string
          },
          'medium': {
            'url': string
          },
          'high': {
            'url': string
          }
        },
        'channelTitle': string,
        'liveBroadcastContent': string
      }
    }
  ];
}
