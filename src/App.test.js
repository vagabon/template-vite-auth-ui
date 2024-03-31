import { render, screen } from '@testing-library/react';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';

jest.mock('./firebase', () => ({
  generateToken: jest.fn().mockReturnValue(Promise.resolve({})),
}));

describe('App', () => {
  test('renders App', async () => {
    await render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('AppTheme')).toBeDefined();
  });
});
