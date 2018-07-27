const YOUTUBE_ID_LENGTH = 11;

export default getVideoId = url => url.substr(url.length - YOUTUBE_ID_LENGTH);