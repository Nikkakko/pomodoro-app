import styled, { css } from 'styled-components';
import { Dots, ForwardIcon, PauseIcon, PlayIcon } from '../assets/svgs';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setIsPausedTrue, setIsSettingsOpen } from '../features/pomodoSlice';

const Buttons = () => {
  const { isPaused } = useAppSelector(state => state.pomodo);
  const dispatch = useAppDispatch();

  const handleStart = () => {
    dispatch(setIsPausedTrue());
  };

  const handleSettings = () => {
    dispatch(setIsSettingsOpen(true));
  };
  return (
    <ButtonsContainer>
      <Settings onClick={handleSettings}>
        <img src={Dots} alt='Settings' />
      </Settings>

      <Start onClick={handleStart}>
        {!isPaused ? (
          <img src={PauseIcon} alt='Pause' />
        ) : (
          <img src={PlayIcon} alt='Start' />
        )}
      </Start>
      <Forward>
        <img src={ForwardIcon} alt='Forward' />
      </Forward>
    </ButtonsContainer>
  );
};

const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonsContainer = styled.div`
  ${flex}
  gap: 16px;
`;

const Settings = styled.div`
  ${flex}
  padding: 24px;
  gap: 16px;
  background: rgba(255, 76, 76, 0.15);
  border-radius: 24px;
  cursor: pointer;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: rgba(255, 76, 76, 0.25);
  }
`;

const Start = styled.div`
  ${flex}
  padding: 32px 48px;
  gap: 16px;
  /* Red Alpha/700 */
  background: rgba(255, 76, 76, 0.71);
  border-radius: 32px;

  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: rgba(255, 76, 76, 0.81);
  }
`;

const Forward = styled(Settings)``;

export default Buttons;
