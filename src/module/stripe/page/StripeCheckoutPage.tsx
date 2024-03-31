import { AppContent, useApiService } from '@vagabond-inc/react-boilerplate-app';
import { JSONObject, MdAlert, MdButton, MdCard, useAppRouter, useAppTranslate } from '@vagabond-inc/react-boilerplate-md';
import { ApiUriConf } from 'conf/ApiUriConf';
import { AppConf } from 'conf/AppConf';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    gtag: (event: string, login: string, data: JSONObject) => void;
  }
}

const StripeCheckoutPage: React.FC = () => {
  const {
    params: { intent, secret },
    handleNavigate,
  } = useAppRouter();
  const { httpPost } = useApiService(AppConf.API_URI);
  const { Trans } = useAppTranslate();
  const [validate, setValidate] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    intent &&
      secret &&
      httpPost(
        ApiUriConf.stripe.validate,
        {
          intent,
          secret,
        },
        () => {
          setValidate(true);
          window?.gtag &&
            window?.gtag('event', 'login', {
              event_category: 'access',
              event_label: 'login',
            });
        },
        (error) => {
          setError(error?.response?.data?.['debugMessage' as keyof JSONObject] ?? '');
        },
      );
  }, [httpPost, intent, secret]);

  return (
    <AppContent apiUrl={AppConf.API_URI} website={AppConf.TITLE} seoTitle="SEO:STRIPE.TITLE" seoDescription="SEO:STRIPE.DESCRIPTION">
      <div className="subscription-form flex-row-responsive align-start">
        <MdCard title="CREATOR:SUBSCRIPTION.TITLE" className="margin-top30">
          {error === '' && validate && (
            <>
              <MdAlert severity="success" label="CREATOR:SUBSCRIPTION.PLAN.PAYMENT_OK" />
              <div>&nbsp;</div>
              <MdButton label="CREATOR:SUBSCRIPTION.PLAN.ADD_YOUTUBE_CHANNEL" callback={handleNavigate('/creator/profile')} />
            </>
          )}
          {error === '' && !validate && <MdAlert severity="info" label="CREATOR:SUBSCRIPTION.PLAN.PAYMENT_EC" />}
          {error !== '' && (
            <>
              <MdAlert severity="error" label={error} />
              <div>&nbsp;</div>
              <Trans i18nKey="CONTACT_ME" />
              <a href={'mailto:' + AppConf.EMAIL_CONTACT} style={{ fontSize: '1rem' }}>
                {AppConf.EMAIL_CONTACT}
              </a>
            </>
          )}
        </MdCard>
      </div>
    </AppContent>
  );
};

export default StripeCheckoutPage;
