import styled from 'styled-components';
import { useCountdown } from '../hooks/Countdown';

const Time = () => {
  const { timeLeft } = useCountdown();

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
      <>
        <TimeText>{minutes < 10 ? `0${minutes}` : minutes}</TimeText>
        <TimeText>{seconds < 10 ? `0${seconds}` : seconds}</TimeText>
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

const TimeText = styled.p`
  font-style: normal;
  font-weight: 200;
  font-size: 256px;
  line-height: 85%;

  color: #471515;
  font-stretch: 110;
  font-variation-settings: 'opsz' 14, 'GRAD' 0, 'slnt' 0, 'XTRA' 468, 'XOPQ' 96,
    'YOPQ' 79, 'YTLC' 514, 'YTUC' 712, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
`;

export default Time;
