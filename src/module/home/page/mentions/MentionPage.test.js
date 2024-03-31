import { render, screen } from '@testing-library/react';
import MentionPage from './MentionPage';

describe('MentionPage', () => {
  test('Given MentionPage when its mount then ', async () => {
    render(<MentionPage />);
    expect(screen.getByTestId('MdCard')).toBeDefined();
  });
});
