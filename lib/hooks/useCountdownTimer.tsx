"use client";
import { useState, useEffect } from "react";

interface IProps {
  day?: number;
  hour?: number;
  minute?: number;
  second?: number;
}

interface ICountdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const useCountdownTimer = ({ day = 0, hour = 0, minute = 0, second = 0 }: IProps) => {
  const now = new Date();

  const targetDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + day,
    now.getHours() + hour,
    now.getMinutes() + minute,
    now.getSeconds() + second,
  ).getTime();

  const [countDown, setCountDown] = useState<ICountdown>({
    days: day,
    hours: hour,
    minutes: minute,
    seconds: second,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = targetDate - currentTime;

      if (distance < 0) {
        clearInterval(interval);
        setCountDown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountDown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [day, hour, minute, second]);

  return countDown;
};

export default useCountdownTimer;
