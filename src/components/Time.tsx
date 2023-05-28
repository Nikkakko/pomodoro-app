import styled from 'styled-components';
import { useCountdown } from '../hooks/Countdown';
import { useAppSelector } from '../app/hooks';

const Time = () => {
  const { mode } = useAppSelector(state => state.pomodo);
  const { timeLeft } = useCountdown();

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
      <>
        <TimeText mode={mode}>
          {minutes < 10 ? `0${minutes}` : minutes}
        </TimeText>
        <TimeText mode={mode}>
          {seconds < 10 ? `0${seconds}` : seconds}
        </TimeText>
      </>
    );
  };

  return <TimeContainer>{formatTime(timeLeft)}</TimeContainer>;
};

const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TimeText = styled.p<{
  mode: string;
}>`
  font-style: normal;
  font-weight: 200;
  font-size: 256px;
  line-height: 85%;

  color: ${({ mode }) =>
    mode === 'focus'
      ? '#471515'
      : mode === 'short break'
      ? '#14401D'
      : '#153047'};
  font-stretch: 110;
  font-variation-settings: 'opsz' 14, 'GRAD' 0, 'slnt' 0, 'XTRA' 468, 'XOPQ' 96,
    'YOPQ' 79, 'YTLC' 514, 'YTUC' 712, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
`;

export default Time;
