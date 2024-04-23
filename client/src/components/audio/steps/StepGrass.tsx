import { useEffect, useRef } from "react";
import voice from "./step_grass.wav";

export default function StepGrass() {
  const voiceRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const voiceElement:any|HTMLAudioElement = voiceRef.current;

    if (voiceElement) {
      voiceElement.volume = 0.09; // Установка громкости
      voiceElement.playbackRate = 1.0; // Установка скорости на 100%
      voiceElement.addEventListener("canplay", handleCanPlay);
    }

    function handleCanPlay() {
      voiceElement.removeEventListener("canplay", handleCanPlay);
    }

    return () => {
      if (voiceElement) {
        voiceElement.removeEventListener("canplay", handleCanPlay);
      }
    };
  }, []);

  const goHandler = (e:any) => {
    const voiceElement = voiceRef.current;
    if (e.code === "KeyW") {
      voiceElement?.play();
    }
  };

  return (
    <div>
      <input onKeyDown={goHandler} />
      <audio src={voice} ref={voiceRef} preload="none" />
    </div>
  );
}
