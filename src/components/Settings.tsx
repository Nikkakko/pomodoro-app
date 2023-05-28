import React, { useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../app/hooks';
import { setIsSettingsOpen } from '../features/pomodoSlice';
import { CloseIcon } from '../assets/svgs';
import SettingsListComponent from './SettingLists';

const Settings = () => {
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      dispatch(setIsSettingsOpen(false));
    }
  };

  return (
    <OverlayWrapper ref={modalRef} onClick={e => handleClose(e)}>
      <Wrapper>
        <Heading>
          <HeadingTitle>Settings</HeadingTitle>
          <HeadingImg
            src={CloseIcon}
            alt='Close'
            onClick={() => dispatch(setIsSettingsOpen(false))}
          />
        </Heading>

        <div>
          <SettingsListComponent />
        </div>
      </Wrapper>
    </OverlayWrapper>
  );
};

const OverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
`;

const Wrapper = styled.div`
  width: 448px;
  height: 610px;

  padding: 27px 24px;
  /* Red/50

Red/50
*/
  background: #fff2f2;
  /* Shadow */

  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.039),
    0px 5.5px 16px rgba(0, 0, 0, 0.19);
  border-radius: 24px;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeadingTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.15px;

  /* Red/900 */

  color: #471515;
`;

const HeadingImg = styled.img`
  cursor: pointer;
`;

export default Settings;
