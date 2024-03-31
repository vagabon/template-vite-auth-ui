import { renderHook } from '@testing-library/react';
import { useProfile } from './useProfile';

describe('useProfile', () => {
  test('Given useProfile when is mount Then ', () => {
    const { result } = renderHook(() => useProfile());

    result.current.handleProfileId({ id: 1 });
  });
});
