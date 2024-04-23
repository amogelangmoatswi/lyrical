"use client"

import { useState, useEffect } from 'react';
import { Timer, RotateCcw, CirclePlay,CirclePause } from "lucide-react";
import { Button } from './ui/button';
import { ModeToggle } from './ModeToggle';

const initialLyricsData = [
  { id: 1, text: "Pluto got twenty girlfriends, damn, I'm doin' it wrong", delay: 0.04 }, // Seconds per character
  { id: 2, text: "Cut off all my hoes, now I'm only puttin' you in a song", delay: 0.04 },
  { id: 3, text: "Day one, shawty been with me from the playground", delay: 0.04 },
  { id: 4, text: "Hey now, maybe that's the reason I was playin' 'round", delay: 0.04 },
  { id: 5, text: "Runnin' like a chicken with his head cut off", delay: 0.04 },
  { id: 6, text: "Through the streets where the freaks love the red leather", delay: 0.04 },
  { id: 7, text: "On my shoulder blades, in my older age", delay: 0.04 },
  { id: 8, text: "See the error of my ways, but I'm still not totally over all the temptation", delay: 0.04 },
  { id: 9, text: "Why does sin give you all the sensation?", delay: 0.04 },
  { id: 10, text: "Yeah, I'm with Future up in Onyx just wastin'", delay: 0.04 },
  { id: 11, text: "A lot of money on a stripper education", delay: 0.04 },
];

const TypingLyrics: React.FC = () => {
  const [lyricsData, setLyricsData] = useState(initialLyricsData);
  const [currentChar, setCurrentChar] = useState<number>(0);
  const [isLastLine, setIsLastLine] = useState<boolean>(false);
  const [isTypingEnabled, setIsTypingEnabled] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);

  const startTyping = () => {
    setLyricsData(initialLyricsData);
    setCurrentChar(0);
    setIsLastLine(false);
    setIsTypingEnabled(true);
    setIsPaused(false); // Reset pause state
    setElapsedTime(0);
    setStartTime(Date.now());
  };

  const pauseTyping = () => {
    setIsPaused(true);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (!isTypingEnabled || lyricsData.length === 0 || isPaused) return;

    const typeNextCharacter = () => {
      if (currentChar < lyricsData[0].text.length) {
        setCurrentChar((prev) => prev + 1);
      } else {
        if (lyricsData.length > 1) {
          setLyricsData((prevData) => prevData.slice(1));
          setCurrentChar(0);
        } else {
          setIsTypingEnabled(false);
          setIsLastLine(true);
        }
      }
    };

    const delayInSeconds = lyricsData[0].delay;
    timer = setTimeout(typeNextCharacter, delayInSeconds * 1000);

    return () => clearTimeout(timer);
  }, [currentChar, lyricsData, isTypingEnabled, isPaused]);

  useEffect(() => {
    const totalDelay = initialLyricsData.reduce((total, line) => total + line.text.length * line.delay, 0);
    setTotalTime(totalDelay);
    setStartTime(Date.now());
  }, []);

  useEffect(() => {
    if (isTypingEnabled && !isPaused) {
      const interval = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTimeInSeconds = (currentTime - startTime) / 1000;
        setElapsedTime(elapsedTimeInSeconds);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isTypingEnabled, isPaused, startTime]);

  const elapsedMinutes = Math.floor(elapsedTime / 60);
  const elapsedSeconds = Math.floor(elapsedTime % 60);
  const elapsedTimes = `${elapsedMinutes.toString().padStart(2, '0')}.${elapsedSeconds.toString().padStart(2, '0')}`;
  const elapsedTimeFormatted = `${elapsedMinutes.toString().padStart(2, '0')}.${elapsedSeconds.toString().padStart(2, '0')}`;

  return (
    <div className="text-sm max-w-lg mx-auto">
      <div className="font-semibold tracking-wide underline underline-offset-2 decoration-red-500/90 h-10 overflow-hidden">
        {lyricsData.map((line, index) => {
          const isLastWord = isLastLine && index === lyricsData.length - 1 && currentChar === line.text.length;
          return (
            <p key={line.id} style={{ display: index === 0 || isLastWord ? 'block' : 'none', width: '100%' }}>
              {index === 0 ? line.text.substring(0, currentChar) : line.text}
            </p>
          );
        })}
      </div>
      <div className="mt-4">
       <div className="bg-gray-200 h-2 w-full rounded-lg relative">
       <div className="bg-red-500 h-full rounded-lg" style={{ width: `${(elapsedTime / 26) * 100}%`, maxWidth: '100%' }}></div>
       <div className="mt-2 flex items-center">
      <Timer className="h-[1.2rem] w-[1.2rem]" />
      <span className="ml-1">{elapsedTimeFormatted}</span>
      <div className="ml-auto flex space-x-1">
        {isPaused ? (
          <Button variant="outline" size="icon" onClick={() => setIsPaused(false)}>
            <CirclePlay className='h-[1.2rem] w-[1.2rem]'/>
          </Button>
        ) : (
          <Button variant="outline" size="icon" onClick={pauseTyping}>
            <CirclePause className='h-[1.2rem] w-[1.2rem]'/>
          </Button>
        )}
        <Button variant="outline" size="icon" onClick={startTyping}>
          <RotateCcw className='h-[1.2rem] w-[1.2rem]' />
        </Button>

        <ModeToggle />
      </div>
    
    </div>
       </div>
     </div>

    </div>
  );
};

export default TypingLyrics;
