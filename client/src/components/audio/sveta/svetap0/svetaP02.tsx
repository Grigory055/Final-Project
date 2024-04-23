import  { useEffect, useRef } from 'react';
import voice from '../../../../../public/audio/svetap0/2.wav';

export default function SvetaP02() {
  const voiceRef = useRef(null);

  useEffect(() => {
    const  voiceElement:any =  voiceRef.current;

    if ( voiceElement) {
      voiceElement.volume = 0.2; // Установка громкости на 20%
      voiceElement.playbackRate = 1.3; // Установка скорости на 130%
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
      <audio  src={voice} ref={voiceRef} />
    </div>
  );
};
