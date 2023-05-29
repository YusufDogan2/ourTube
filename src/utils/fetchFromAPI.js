import axios from 'axios';

const URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: 50
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (asdf) => {
    const { data } = await axios.get(`${URL}/${asdf}`, options);

    return data;
};


