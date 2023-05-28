import * as S from '../styles/styles';
import { Time, Mode, Buttons } from '.';
import Settings from './Settings';
import { useAppSelector } from '../app/hooks';

const Pomodo = () => {
  const { isSettingsOpen } = useAppSelector(state => state.pomodo);

  return (
    <S.Container>
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
