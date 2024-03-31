import { render } from '@testing-library/react';
import Profile from './Profile';

describe('Profile', () => {
  test('Given Profile when its mount then ', async () => {
    render(<Profile id="1" />);
  });
});
