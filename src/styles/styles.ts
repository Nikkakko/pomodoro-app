import styled from 'styled-components';

export const Container = styled.div<{
  mode: string;
}>`
  width: 100vw;
  height: 100vh;
  background: ${({ mode }) =>
    mode === 'focus'
      ? '#fff2f2'
      : mode === 'short break'
      ? '#F2FFF5'
      : '#F2F9FF'};

  /* background: #fff2f2; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const ModeContainer = styled.div<{
  mode: string;
}>`
  display: flex;
  align-items: center;

  background: ${({ mode }) =>
    mode === 'focus'
      ? 'rgba(255, 76, 76, 0.15)'
      : mode === 'short break'
      ? 'rgba(77, 218, 110, 0.15)'
      : 'rgba(76, 172, 255, 0.15)'};

  padding: 8px 16px;
  gap: 8px;

  height: 48px;

  /* border: 2px solid #471515; */
  border-radius: 9999px;

  border: ${({ mode }) =>
    mode === 'focus'
      ? '2px solid #471515'
      : mode === 'short break'
      ? '2px solid #14401D'
      : '2px solid #153047'};
`;

export const ModalWrapper = styled.div<{
  mode: string;
}>`
  width: 448px;
  padding: 27px 24px;
  /* Red/50

Red/50
*/
  background: ${({ mode }) =>
    mode === 'focus'
      ? '#fff2f2'
      : mode === 'short break'
      ? '#F2FFF5'
      : '#F2F9FF'};

  /* Shadow */

  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.039),
    0px 5.5px 16px rgba(0, 0, 0, 0.19);
  border-radius: 24px;
`;
