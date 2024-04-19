import React, { useEffect, useRef } from 'react';
import voice from '../../../../public/audio/gamemusic/theme3.mp3';

export default function Theme3audio() {
  const voiceRef = useRef(null);

  useEffect(() => {
    const  voiceElement =  voiceRef.current;

    if ( voiceElement) {
<<<<<<< HEAD
      voiceElement.volume = 0.05; // Установка громкости на 50%
      voiceElement.playbackRate = 1.0; // Установка скорости на 150%
=======
      voiceElement.volume = 0.01; // Установка громкости
      voiceElement.playbackRate = 1.0; // Установка скорости на 100%
>>>>>>> 16f3fe66e63ccc8b39c3520165921fe89f232143
      voiceElement.addEventListener('canplay', handleCanPlay);
      voiceElement.play().catch((error) => {
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