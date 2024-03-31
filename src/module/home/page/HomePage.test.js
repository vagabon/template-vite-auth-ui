import { render, screen } from '@testing-library/react';
import HomePage from '../page/HomePage';

describe('HomePage', () => {
  test('Given HomePage when its mount then ', async () => {
    render(<HomePage />);
    expect(screen.getByTestId('CustomSeo')).toBeDefined();
  });
});
