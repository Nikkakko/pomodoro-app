import styled from 'styled-components';
import * as S from '../styles/styles';
import { brainLogo, coffeLogo } from '../assets';
import { useAppSelector } from '../app/hooks';

const Mode = () => {
  const { mode } = useAppSelector(state => state.pomodo);
  return (
    <S.ModeContainer mode={mode}>
      {mode === 'focus' ? (
        <img src={brainLogo} alt='brain logo' />
      ) : (
        <img src={coffeLogo} alt='coffe logo' />
      )}

      <ModeText mode={mode}>{mode}</ModeText>
    </S.ModeContainer>
  );
};

const ModeText = styled.p<{
  mode: string;
}>`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  text-transform: capitalize;

  color: ${({ mode }) =>
    mode === 'focus'
      ? '#471515'
      : mode === 'short break'
      ? '#14401D'
      : '#153047'};
`;

export default Mode;
