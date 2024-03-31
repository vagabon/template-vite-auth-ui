import { renderHook } from '@testing-library/react';
import { useNotification } from './useNotification';

describe('useNotification', () => {
  test('Given useNotification when is mount Then ', async () => {
    const { result } = renderHook(() => useNotification());

    result.current.handleSelect({ category: 'MEMBER' });
    result.current.handleSelect({ category: '' });
  });
});
