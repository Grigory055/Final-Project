import React, { useEffect, useRef } from 'react';
import voice from '../../../../../public/audio/svetap1/p1Sveta1.wav';

export default function SvetaP11() {
  const voiceRef = useRef(null);

  useEffect(() => {
    const  voiceElement =  voiceRef.current;

    if ( voiceElement) {
      voiceElement.volume = 0.2; // Установка громкости на 20%
      voiceElement.playbackRate = 1.3; // Установка скорости на 130%
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
      <audio  src={voice} ref={voiceRef} />
    </div>
  );
};
