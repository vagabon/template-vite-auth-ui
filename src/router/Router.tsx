import { AdminRouter, AuthRouter, NotFoundPage, NotificationRouter, UserRouter, i18nType } from '@vagabond-inc/react-boilerplate-app';
import HomePage from 'module/home/page/HomePage';

import { AppConf } from 'conf/AppConf';
import { AdminConf } from 'conf/admin/AdminConf';
import CgvPage from 'module/home/page/cgv/CgvPage';
import FaqPage from 'module/home/page/faq/FaqPage';
import MentionPage from 'module/home/page/mentions/MentionPage';
import { useNotification } from 'module/notification/hook/useNotification';
import StripeCheckoutPage from 'module/stripe/page/StripeCheckoutPage';
import { useProfile } from 'module/user/hook/useProfile';
import { Route, Routes } from 'react-router-dom';

export interface IRouterProps {
  i18n: i18nType;
}

const Router: React.FC<IRouterProps> = ({ i18n }) => {
  const { handleProfileId } = useProfile();
  const { handleSelect } = useNotification();

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route
        path="/auth/*"
        element={
          <AuthRouter
            apiUrl={AppConf.API_URI}
            website={AppConf.TITLE}
            emailContact={AppConf.EMAIL_CONTACT as string}
            googleClientId={AppConf.GOOGLE_CLIENT_ID as string}
            facebookClientId={AppConf.FACEBOOK_CLIENT_ID as string}
            googleCaptchaId={AppConf.GOOGLE_CAPTCHA_ID as string}
          />
        }
      />
      <Route
        path="/admin/*"
        element={<AdminRouter apiUrl={AppConf.API_URI} website={AppConf.TITLE} emailContact={AppConf.EMAIL_CONTACT} conf={AdminConf} />}
      />
      <Route
        path="/profile/*"
        element={<UserRouter i18n={i18n} apiUrl={AppConf.API_URI} website={AppConf.TITLE} profile={handleProfileId} />}
      />
      <Route path="/mentions" element={<MentionPage />} />
      <Route path="/cgv" element={<CgvPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route
        path="/notification/*"
        element={<NotificationRouter apiUrl={AppConf.API_URI} website={AppConf.TITLE} callbackNavigateNotification={handleSelect} />}
      />
      <Route path="/stripe/payment-intent/:intent/:secret" element={<StripeCheckoutPage />} />
      <Route
        path="*"
        element={<NotFoundPage apiUrl={AppConf.API_URI} website={AppConf.TITLE} emailContact={AppConf.EMAIL_CONTACT} />}></Route>
    </Routes>
  );
};

export default Router;
