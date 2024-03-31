import { ID } from '@vagabond-inc/react-boilerplate-md';
import { useCallback } from 'react';
import Profile from '../component/Profile';

export const useProfile = () => {
  const handleProfileId = useCallback((id: ID) => {
    return <Profile id={id} />;
  }, []);

  return { handleProfileId };
};
