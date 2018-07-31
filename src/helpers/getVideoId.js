const YOUTUBE_ID_LENGTH = 11;

const getVideoId = url => url.substr(url.length - YOUTUBE_ID_LENGTH);

export default getVideoId;