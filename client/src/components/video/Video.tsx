import  { useEffect, useRef } from 'react';
import video from '../../../public/video/2024.mp4';
import styles from './Video.module.css';


export default function Video() {
  const videoRef:any = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.volume = 0.5; // Установка громкости на 30%
      videoElement.addEventListener('canplay', handleCanPlay);
      videoElement.play().catch((error:any) => {
        console.log('Auto-play failed:', error);
      });
    }

    function handleCanPlay() {
      videoElement.play();
      videoElement.removeEventListener('canplay', handleCanPlay);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, []);

  return (
    <div className={styles.video}>
      <video className={styles.video_file} src={video} ref={videoRef} />
    </div>
  );
};
