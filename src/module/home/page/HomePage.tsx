import { CustomSeo } from '@vagabond-inc/react-boilerplate-app';
import { AppConf } from 'conf/AppConf';
import Landing from 'module/home/component/landing/Landing';

const HomePage: React.FC = () => {
  return (
    <>
      <CustomSeo
        apiUrl={AppConf.API_URI}
        website={AppConf.TITLE}
        title={'SEO:ACCUEIL.TITLE'}
        description={'SEO:ACCUEIL.DESCRIPTION'}
        image={''}
        date={''}
      />
      <Landing />
    </>
  );
};

export default HomePage;
