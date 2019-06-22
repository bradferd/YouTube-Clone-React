import axios from 'axios';

const KEY = 'AIzaSyCgDq3Ywwq3pPNcS1yHWuR60sp6NqW-ti8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});