import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos } from './';


const SearchFeed = () => {

  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setVideos(null);
        const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
        setVideos(data.items);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [searchTerm]);


  return (
    <Box p={2} scx={{ overflowY: "auto", height: "90vh", flex: 2 }} >
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }} >
        Search Results for: <span style={{ color: '#464444' }} >{searchTerm}</span>Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};
export default SearchFeed;
