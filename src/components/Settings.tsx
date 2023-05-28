import React, { useRef } from 'react';
import * as S from '../styles/styles';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setIsSettingsOpen } from '../features/pomodoSlice';
import { CloseIcon } from '../assets/svgs';
import SettingsListComponent from './SettingLists';

const Settings = () => {
  const { mode } = useAppSelector(state => state.pomodo);
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      dispatch(setIsSettingsOpen(false));
    }
  };

  return (
    <OverlayWrapper ref={modalRef} onClick={e => handleClose(e)}>
      <S.ModalWrapper mode={mode}>
        <Heading>
          <HeadingTitle>Settings</HeadingTitle>
          <HeadingImg
            src={CloseIcon}
            alt='Close'
            onClick={() => dispatch(setIsSettingsOpen(false))}
          />
        </Heading>

        <SettingsListComponent />
      </S.ModalWrapper>
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
