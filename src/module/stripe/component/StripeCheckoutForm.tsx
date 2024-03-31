import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useApiService } from '@vagabond-inc/react-boilerplate-app';
import { MdAlert, MdBackdrop, MdButton } from '@vagabond-inc/react-boilerplate-md';
import { ApiUriConf } from 'conf/ApiUriConf';
import { AppConf } from 'conf/AppConf';
import { FormEvent, useState } from 'react';

const StripeCheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [backdrop, setBackdrop] = useState<boolean>(false);

  const { httpPost } = useApiService(AppConf.API_URI);

  const [errorMessage, setErrorMessage] = useState<string | null | undefined>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      return;
    }

    setBackdrop(true);

    httpPost(
      ApiUriConf.stripe.payment,
      {},
      (data) => {
        void (async () => {
          const clientSecret = data as string;
          if (stripe) {
            const { error } = await stripe.confirmPayment({
              elements,
              clientSecret,
              confirmParams: {
                payment_method: 'card',
                return_url: AppConf.API_URI + ApiUriConf.stripe.payment,
              },
            });

            if (error) {
              setBackdrop(false);
              setErrorMessage(error.message);
            }
          }
        })();
      },
      (error: { message: string }) => {
        setBackdrop(false);
        setErrorMessage(error.message);
      },
    );
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', padding: '10px', borderRadius: '10px' }}>
      <MdBackdrop open={backdrop} />
      <div>&nbsp;</div>
      <PaymentElement />
      <div>&nbsp;</div>
      <MdButton
        label="CREATOR:SUBSCRIPTION.PAY"
        type="submit"
        variant="contained"
        size="large"
        fullWidth={true}
        disabled={!stripe || !elements}
      />
      <div>&nbsp;</div>
      {errorMessage && <MdAlert label={errorMessage} severity="error" />}
    </form>
  );
};

export default StripeCheckoutForm;
