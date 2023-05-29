import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const channelData = await fetchFromAPI(`channels?part=snippet&id=${id}`);
        const videoData = await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`);
        setChannelDetail(channelData?.items[0]);
        setVideos(videoData?.items);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height: '300px',
          background: ' linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,9,1) 48%, rgba(0,0,0,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-115px" />
      </Box>
      <Box flex="flex" p="2" >
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};
export default ChannelDetail;


/* useEffect(() => {
  fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelD(data?.items[0]));
}, [id]); */