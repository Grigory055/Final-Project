import { useEffect, useRef } from 'react';
import voice from '../../../../public/audio/gamemusic/theme2.wav';

export default function Theme2audio() {
  const voiceRef = useRef(null);

  useEffect(() => {
    const  voiceElement:any =  voiceRef.current;

    if ( voiceElement) {
      voiceElement.volume = 0.01; // Установка громкости
      voiceElement.playbackRate = 1.0; // Установка скорости на 100%
      voiceElement.addEventListener('canplay', handleCanPlay);
      voiceElement.play().catch((error:any) => {
        console.log('Auto-play failed:', error);
      });
    }

    function handleCanPlay() {
      voiceElement.play();
      voiceElement.removeEventListener('canplay', handleCanPlay);
    }

    return () => {
      if (voiceElement) {
        voiceElement.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, []);

  return (
    <div >
      <audio  src={voice} ref={voiceRef}  loop/>
    </div>
  );
};