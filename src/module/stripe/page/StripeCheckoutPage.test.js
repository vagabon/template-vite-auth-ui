import { render, screen } from '@testing-library/react';
import StripeCheckoutPage from './StripeCheckoutPage';

describe('StripeCheckoutPage', () => {
  test('Given StripeCheckoutPage when its mount then AppContent is shown', async () => {
    mockParams = { intent: 'intent', secret: 'secret' };
    render(<StripeCheckoutPage />);
    expect(screen.getByTestId('AppContent')).toBeDefined();
  });
});
