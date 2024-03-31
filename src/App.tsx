import { AppTheme, AxiosInterceptor } from '@vagabond-inc/react-boilerplate-app';
import { useAppRouter } from '@vagabond-inc/react-boilerplate-md';
import { AppConf } from 'conf/AppConf';
import i18n from 'i18n/i18n';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Router from 'router/Router';
import store from 'store/Store';
import { generateToken } from './firebase';

import CONF from './conf/app.conf.json';
import MENU_CONF from './conf/menu.conf.json';

import './App.scss';
import PALETTE from './app.palette.module.scss';

AxiosInterceptor(store, AppConf.API_URI, '/auth/signin', '/auth/refresh-token');

ReactGA.initialize(AppConf.ANALYTICS);

function App() {
  const { location } = useAppRouter();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location?.pathname, location?.search]);

  useEffect(() => {
    const language = localStorage.getItem('i18nextLng') ?? 'fr';
    i18n.changeLanguage(language);
  }, []);

  return (
    <AppTheme
      apiUrl={AppConf.API_URI}
      palette={PALETTE}
      conf={CONF}
      menu={MENU_CONF}
      email={AppConf.EMAIL_CONTACT}
      showNotification={true}
      generateToken={generateToken}
      reactHeader={<></>}>
      <Router i18n={i18n} />
    </AppTheme>
  );
}

export default App;
