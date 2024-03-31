import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import StripeCheckoutForm from './StripeCheckoutForm';

describe('StripeCheckoutForm', () => {
  test('Given StripeCheckoutForm when its mount then AppContent is shown', async () => {
    render(<StripeCheckoutForm />);
    expect(screen.getByTestId('MdBackdrop')).toBeDefined();
    await waitFor(() => {
      fireEvent.click(screen.getByRole('button'));
    });
    expect(screen.getByTestId('MdButton')).toBeDefined();
  });
});
