import { INotificationDto } from '@vagabond-inc/react-boilerplate-app';
import { useAppRouter } from '@vagabond-inc/react-boilerplate-md';
import { AppUrlConf } from 'conf/AppUrlConf';
import { useCallback } from 'react';

export const useNotification = () => {
  const { handleNavigate } = useAppRouter();

  const handleSelect = useCallback(
    (data: INotificationDto) => {
      switch (data.category) {
        case '':
          handleNavigate(AppUrlConf.profile)();
          break;
        default:
          break;
      }
    },
    [handleNavigate],
  );

  return {
    handleSelect,
  };
};
