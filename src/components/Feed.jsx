import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos, SideBar } from './';


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setVideos(null);
        const data = await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
        setVideos(data.items);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [selectedCategory]);


  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }} >
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }} >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }} >
          Suitable for private use only
        </Typography>
      </Box>
      <Box p={2} scx={{ overflowY: "auto", height: "90vh", flex: 2 }} >
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }} >
          {selectedCategory} <span style={{ color: '#464444' }} >videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
export default Feed;



/* useEffect(() => {

  setVideos(null);
  fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items));
}, [selectedCategory]); */