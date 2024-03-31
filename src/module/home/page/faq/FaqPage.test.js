import { render, screen } from '@testing-library/react';
import FaqPage from './FaqPage';

describe('FaqPage', () => {
  test('Given FaqPage when its mount then ', async () => {
    render(<FaqPage />);
    expect(screen.getByTestId('MdCard')).toBeDefined();
  });
});
