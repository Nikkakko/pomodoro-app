import styled from 'styled-components';
import { ArrowUp, ArrowDown } from '../assets/svgs';

type Props = {
  length: number;
  increase?: () => void;
  decrease?: () => void;
};

const SettingsItem = ({ length, increase, decrease }: Props) => {
  return (
    <Wrapper>
      <LengthWrapper>
        <LengthTitle>{length}</LengthTitle>
      </LengthWrapper>
      <IncDec>
        <img src={ArrowUp} alt='Increase' onClick={increase} />
        <img src={ArrowDown} alt='Decrease' onClick={decrease} />
      </IncDec>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 96px;
  height: 40px;

  /* Black Alpha/100 */

  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.2322);

  /* padding: 8px; */
`;

const LengthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  border-right: 1px solid rgba(0, 0, 0, 0.15);
  height: 100%;
`;

const IncDec = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px;
  position: relative;

  img {
    cursor: pointer;
  }
  //line middle of the div

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }
`;

const LengthTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.15px;

  /* Red/900 */

  color: #471515;
`;
export default SettingsItem;
