import * as S from '../styles/styles';
import { Time, Mode, Buttons } from '.';
import Settings from './Settings';
import { useAppSelector } from '../app/hooks';

const Pomodo = () => {
  const { isSettingsOpen, mode } = useAppSelector(state => state.pomodo);

  return (
    <S.Container mode={mode}>
      <S.Wrapper>
        <Mode />
        <Time />
        <Buttons />
        {isSettingsOpen && <Settings />}
      </S.Wrapper>
    </S.Container>
  );
};

export default Pomodo;
