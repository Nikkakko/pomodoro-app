import styled from 'styled-components';
import { brainLogo, coffeLogo } from '../assets';
import { useAppSelector } from '../app/hooks';

const Mode = () => {
  const { mode } = useAppSelector(state => state.pomodo);
  return (
    <ModeContainer>
      {mode === 'focus' ? (
        <img src={brainLogo} alt='brain logo' />
      ) : (
        <img src={coffeLogo} alt='coffe logo' />
      )}

      <ModeText>{mode}</ModeText>
    </ModeContainer>
  );
};

const ModeContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 8px 16px;
  gap: 8px;

  height: 48px;

  border: 2px solid #471515;
  border-radius: 9999px;
`;

const ModeText = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  text-transform: capitalize;

  color: #471515;
`;

export default Mode;
