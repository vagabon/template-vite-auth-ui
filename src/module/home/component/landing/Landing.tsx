import { useAuth } from '@vagabond-inc/react-boilerplate-app';
import { MdButton, MdCard, MdListSimple, useAppRouter, useAppTranslate } from '@vagabond-inc/react-boilerplate-md';
import { AppConf } from 'conf/AppConf';
import { AppUrlConf } from 'conf/AppUrlConf';
import Title from '../Title';
import Faq from '../faq/Faq';

const Landing: React.FC = () => {
  const { isLoggedIn } = useAuth(AppConf.API_URI);
  const { Trans } = useAppTranslate();
  const { handleNavigate } = useAppRouter();

  return (
    <div className="landing-page">
      <div className="landing-curve">
        <h1 className="welcome">
          <Trans i18nKey="LANDING:WELCOME" /> <Title />
          ,<br /> <Trans i18nKey="LANDING:TITLE" />
          <div className="welcome-subtitle">
            <Trans i18nKey="LANDING:SUBTITLE" />
          </div>
          <MdButton
            icon="hot"
            size="large"
            variant="contained"
            label="JOIN_US"
            callback={handleNavigate(isLoggedIn ? AppUrlConf.profile : AppUrlConf.sigin)}
          />
        </h1>
      </div>

      <h2 style={{ textAlign: 'center' }}>
        <Trans i18nKey="LANDING:PROFILE_PRESENTATION" />
      </h2>

      <div className="flex-row-responsive align-stretch" style={{ textAlign: 'justify' }}>
        <MdCard title="LANDING:PROFILE1" icon="camera" titleVariant="h2">
          <MdListSimple
            title=""
            items={[{ label: 'LANDING:PROFILE1_ITEM1' }, { label: 'LANDING:PROFILE1_ITEM2' }, { label: 'LANDING:PROFILE1_ITEM3' }]}
          />
        </MdCard>
        <MdCard title="LANDING:PROFILE2" icon="profile" titleVariant="h2">
          <MdListSimple
            title=""
            items={[{ label: 'LANDING:PROFILE2_ITEM1' }, { label: 'LANDING:PROFILE2_ITEM2' }, { label: 'LANDING:PROFILE2_ITEM3' }]}
          />
        </MdCard>
      </div>
      {!isLoggedIn && (
        <MdButton
          sx={{ margin: '50px 20px 15px !important' }}
          icon="hot"
          size="large"
          variant="contained"
          label="AUTH:REGISTER.TITLE_FREE"
          callback={handleNavigate(AppUrlConf.signup)}
        />
      )}

      <h2 style={{ textAlign: 'center' }}>
        <Trans i18nKey="LANDING:FAQ" />
      </h2>
      <Faq small={true} />
    </div>
  );
};

export default Landing;
