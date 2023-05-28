import styled, { css } from 'styled-components';
import { Dots, ForwardIcon, PauseIcon, PlayIcon } from '../assets/svgs';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  setIsPausedTrue,
  setIsSettingsOpen,
  setMode,
} from '../features/pomodoSlice';

const Buttons = () => {
  const { isPaused, mode } = useAppSelector(state => state.pomodo);
  const dispatch = useAppDispatch();

  const handleStart = () => {
    dispatch(setIsPausedTrue(false));
  };

  const handleSettings = () => {
    dispatch(setIsSettingsOpen(true));
  };

  const handleForward = () => {
    if (mode === 'focus') {
      dispatch(setMode('short break'));
    } else if (mode === 'short break') {
      dispatch(setMode('long break'));
    } else if (mode === 'long break') {
      dispatch(setMode('focus'));
    }

    dispatch(setIsPausedTrue(true));
  };

  return (
    <ButtonsContainer>
      <Settings onClick={handleSettings} mode={mode}>
        <img src={Dots} alt='Settings' />
      </Settings>

      <Start onClick={handleStart} mode={mode}>
        {!isPaused ? (
          <img src={PauseIcon} alt='Pause' />
        ) : (
          <img src={PlayIcon} alt='Start' />
        )}
      </Start>
      <Forward mode={mode} onClick={handleForward}>
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

const Settings = styled.div<{
  mode: string;
}>`
  ${flex}
  padding: 24px;
  gap: 16px;
  background: ${({ mode }) =>
    mode === 'focus'
      ? 'rgba(255, 76, 76, 0.25)'
      : mode === 'short break'
      ? 'rgba(77, 218, 110, 0.62)'
      : 'rgba(76, 172, 255, 0.15)`'};

  border-radius: 24px;
  cursor: pointer;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: ${({ mode }) =>
      mode === 'focus'
        ? 'rgba(255, 76, 76, 0.35)'
        : mode === 'short break'
        ? 'rgba(77, 218, 110, 0.72)'
        : 'rgba(76, 172, 255, 0.25)'};
  }
`;

const Start = styled.div<{
  mode: string;
}>`
  ${flex}
  padding: 32px 48px;
  gap: 16px;
  /* Red Alpha/700 */
  background: ${({ mode }) =>
    mode === 'focus'
      ? 'rgba(255, 76, 76, 0.71)'
      : mode === 'short break'
      ? 'rgba(77, 218, 110, 0.62)'
      : 'rgba(76, 172, 255, 0.62)'};
  border-radius: 32px;

  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: ${({ mode }) =>
      mode === 'focus'
        ? 'rgba(255, 76, 76, 0.35)'
        : mode === 'short break'
        ? 'rgba(77, 218, 110, 0.72)'
        : 'rgba(76, 172, 255, 0.25)'};
  }
`;

const Forward = styled(Settings)``;

export default Buttons;
