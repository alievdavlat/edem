import React from 'react';
import ReactPlayer from "react-player";
import './aboutVideo.css'
import { FaPlay } from "react-icons/fa";
import api from '@/service/api';
import { getEnv } from '@/helpers';
// import { IoMdPause } from "react-icons/io";

type Props = {};

const AboutVideo = (props: Props) => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  let videosrc  = '/about.mp4'
  const imageUrl = getEnv('image')
  const [aboutData , setAboutData] = React.useState<any>([])

  React.useEffect(() => {
  
    const getData = async () => {
      const data =  await api.getAboutData()
      setAboutData(data)
    }	
    getData()
  
  }, [])
  
  

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [isSmoll, setIsSmoll] = React.useState(false)
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (windowWidth < 420) {
      setIsSmoll(true)
    } else{
      setIsSmoll(false)
    }
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  return (
     <>

     {
      aboutData?.video?.data?.attributes?.url && 
       <div className="video">
          
       <div className='container'>
         <div className="video-wrapp">
         {
           isPlaying 
           ? ''
           : 
           <div className='video-player' onClick={() => setIsPlaying(true)}>
           <FaPlay />
     
           {/* <IoMdPause /> */}
     
           </div>
         }
   
         <ReactPlayer
           onEnded={() => setIsPlaying(false)}
           playing={isPlaying}
           width={'100%'}
           height={isSmoll ? '15rem' : "31.5rem"}
           url={videosrc}
           light={false}
           pip={true}
           />
          <source  src={aboutData?.video?.data?.attributes?.url} type="video/mp4" />
         </div>
       </div>
       </div>
     }
     </>
  );
};

export default AboutVideo;
