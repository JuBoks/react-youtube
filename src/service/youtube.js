class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async getMostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        regionCode: 'KR',
        maxResults: 25
      }
    });

    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        type: 'video',
        q: query,
        regionCode: 'KR',
        maxResults: 25,
      }
    });

    return response.data.items;
  }
}

export default Youtube;