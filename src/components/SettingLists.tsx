import { Switch } from 'antd';
import SettingsItem from './SettingsItem';
import { useSelector } from 'react-redux';
import React from 'react';
import { RootState } from '../app/store';
import styled from 'styled-components';
import {
  setFocusLength,
  setLongBreakLength,
  setPromodosUntilLongBreak,
  setShortBreakLength,
} from '../features/pomodoSlice';
import { useAppDispatch } from '../app/hooks';

type SettingsListType = {
  title: string;
  action: JSX.Element;
};

const SettingsListComponent: React.FC = () => {
  const {
    focusLength,
    longBreakLength,
    shortBreakLength,
    promodosUntilLongBreak,
  } = useSelector((state: RootState) => state.pomodo);
  const dispatch = useAppDispatch();

  const settingsList: SettingsListType[] = [
    {
      title: 'Dark mode',
      action: <Switch style={{ backgroundColor: 'rgba(0, 0, 0, 0.24)' }} />,
    },
    {
      title: 'Focus Length',
      action: (
        <SettingsItem
          length={focusLength}
          increase={() => dispatch(setFocusLength(focusLength + 1))}
          decrease={() => dispatch(setFocusLength(focusLength - 1))}
        />
      ),
    },
    {
      title: 'Pomodors until long break',
      action: (
        <SettingsItem
          length={promodosUntilLongBreak}
          increase={() =>
            dispatch(setPromodosUntilLongBreak(promodosUntilLongBreak + 1))
          }
          decrease={() =>
            dispatch(setPromodosUntilLongBreak(promodosUntilLongBreak - 1))
          }
        />
      ),
    },
    {
      title: 'Short break length',
      action: (
        <SettingsItem
          length={shortBreakLength}
          increase={() => dispatch(setShortBreakLength(shortBreakLength + 1))}
          decrease={() => dispatch(setShortBreakLength(shortBreakLength - 1))}
        />
      ),
    },
    {
      title: 'Long break length',
      action: (
        <SettingsItem
          length={longBreakLength}
          increase={() => dispatch(setLongBreakLength(longBreakLength + 1))}
          decrease={() => dispatch(setLongBreakLength(longBreakLength - 1))}
        />
      ),
    },
  ];

  return (
    <Wrapper>
      {settingsList.map((setting, index) => (
        <ListWrapper key={index}>
          <ListTitle>{setting.title}</ListTitle>
          {setting.action}
        </ListWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 40px;
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListTitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.15px;

  /* Red/900 */

  color: #471515;
`;

export default SettingsListComponent;
