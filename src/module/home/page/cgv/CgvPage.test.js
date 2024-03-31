import { render, screen } from '@testing-library/react';
import CgvPage from './CgvPage';

describe('CgvPage', () => {
  test('Given CgvPage when its mount then ', async () => {
    render(<CgvPage />);
    expect(screen.getByTestId('MdCard')).toBeDefined();
  });
});
