import React, { useEffect, useRef } from 'react';
import voice from '../../../../public/audio/bubbles/p2start.wav';

export default function BubbleP2() {
  const voiceRef = useRef(null);

  useEffect(() => {
    const  voiceElement =  voiceRef.current;

    if ( voiceElement) {
      voiceElement.volume = 0.15; // Установка громкости на 15%
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