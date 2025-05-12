import { Howl } from 'howler';
import { useState, useEffect } from 'react';

const useSound = (src: string) => {
  const [sound, setSound] = useState<Howl | null>(null);

  useEffect(() => {
    const howlSound = new Howl({
      src: [src],
      html5: true, // Use HTML5 Audio to avoid issues with some browsers
    });
    setSound(howlSound);

    return () => {
      howlSound.unload();
    };
  }, [src]);

  const play = () => {
    if (sound) {
      sound.play();
    }
  };

  const stop = () => {
    if (sound) {
      sound.stop();
    }
  };

  return { play, stop };
};

export default useSound;