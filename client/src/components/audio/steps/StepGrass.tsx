// import React, { useEffect, useRef, useState } from 'react';
// import voice from '../../../../public/audio/steps/step_grass.wav';

// export default function StepGrass() {
//   const voiceRef = useRef(null);

//   useEffect(() => {
//     const  voiceElement =  voiceRef.current;

//     if ( voiceElement) {
//       voiceElement.volume = 0.2; // Установка громкости на 50%
//       voiceElement.playbackRate = 1.0; // Установка скорости на 150%
//       voiceElement.addEventListener('canplay', handleCanPlay);
//       voiceElement.play().catch((error) => {
//         console.log('Auto-play failed:', error);
//       });
//     }

//     function handleCanPlay() {
//       voiceElement.play();
//       voiceElement.removeEventListener('canplay', handleCanPlay);
//     }

//     return () => {
//       if (voiceElement) {
//         voiceElement.removeEventListener('canplay', handleCanPlay);
//       }
//     };
//   }, []);

//   const[active,setActive] = useState<boolean>(false)


//   const goHandler = (e) => {
//     const  voiceElement =  voiceRef.current;
//     if(
//     e.code === 'KeyW' 
//     // ||
//     // e.key === 'a' || 
//     // e.key === 's' ||
//     // e.key === 'd' ||
//    )
//     {
//     setActive(true)
//     voiceElement.play()
//   }

//   }
//   const stopHandler = (e) => {
//     setActive(false)
//   }

//   return (
//     <div >
//       <input onKeyDown={goHandler} onKeyUp={stopHandler} />
//       <p onKeyDown={goHandler} onKeyUp={stopHandler}>{active?(<><audio  src={voice} ref={voiceRef}  loop/><p>ZTRU</p></>):(<>asd</>)}</p>
//       {active?(<><audio  src={voice} ref={voiceRef}  loop/><p>ZTRU</p></>):(<>asd</>)}
      
//     </div>
//   );
// };