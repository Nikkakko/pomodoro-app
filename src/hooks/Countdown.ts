import { useEffect, useState, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  setMode,
  setIsPausedTrue,
  setPromodosCompleted,
} from '../features/pomodoSlice';

export const useCountdown = () => {
  const {
    focusLength,
    isPaused,
    longBreakLength,
    shortBreakLength,
    mode,
    promodosCompleted,
    promodosUntilLongBreak,
  } = useAppSelector(state => state.pomodo);
  const dispatch = useAppDispatch();
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const getTimerLength = useRef<() => number>(() => 0);

  getTimerLength.current = () => {
    switch (mode) {
      case 'focus':
        return focusLength * 60;
      case 'short break':
        return shortBreakLength * 60;
      case 'long break':
        return longBreakLength * 60;
      default:
        return 0;
    }
  };

  useEffect(() => {
    setTimeLeft(getTimerLength.current());
  }, [focusLength, longBreakLength, mode, shortBreakLength]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (timeLeft === 0) {
        if (mode === 'focus') {
          if (promodosCompleted !== promodosUntilLongBreak) {
            dispatch(setMode('short break'));
            dispatch(setPromodosCompleted(1));
          } else {
            dispatch(setMode('long break'));
          }
        } else if (mode === 'short break') {
          dispatch(setMode('focus'));
        } else if (mode === 'long break') {
          dispatch(setMode('focus'));
          dispatch(setPromodosCompleted(-promodosUntilLongBreak));
        }
        dispatch(setIsPausedTrue(false));
        return;
      }

      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [
    dispatch,
    focusLength,
    isPaused,
    longBreakLength,
    mode,
    promodosCompleted,
    promodosUntilLongBreak,
    shortBreakLength,
    timeLeft,
  ]);

  return {
    timeLeft,
  };
};
