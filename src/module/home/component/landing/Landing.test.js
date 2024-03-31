import { render } from '@testing-library/react';
import Landing from './Landing';

describe('Landing', () => {
  test('Given Landing when its mount then AppContent is shown', async () => {
    render(<Landing />);
  });
});
