import { AppContent } from '@vagabond-inc/react-boilerplate-app';
import { MdCard, useAppTranslate } from '@vagabond-inc/react-boilerplate-md';
import { AppConf } from 'conf/AppConf';

export interface IMentionPageProps {}

const MentionPage: React.FC<IMentionPageProps> = () => {
  const { Trans } = useAppTranslate();

  return (
    <AppContent
      apiUrl={AppConf.API_URI}
      website={AppConf.TITLE}
      className="flex1 profil-content"
      seoTitle="SEO:MENTIONS.TITLE"
      seoDescription="SEO:MENTIONS.DESCRIPTION">
      <MdCard title={'Mentions légales'} className="copyright flex">
        <div className="flex" style={{ fontSize: '1.1rem', margin: '20px 50px', lineHeight: '2rem', textAlign: 'justify' }}>
          <h4>
            <Trans i18nKey="MENTIONS:INFO.TITLE" />
          </h4>
          <div>
            <Trans i18nKey="MENTIONS:INFO.NAME" /> CLEMENT
          </div>
          <div>
            <Trans i18nKey="MENTIONS:INFO.ACTIVITY" /> Auto-entrepreneur
          </div>
          <div>
            <Trans i18nKey="MENTIONS:INFO.SIERET" /> 52089029400017
          </div>
          <div>
            <Trans i18nKey="MENTIONS:INFO.ADDRESS" /> 44000 Nantes
          </div>
          <div>
            <Trans i18nKey="MENTIONS:INFO.EMAIL" /> vagabond.git@gmail.com
          </div>
          <div>
            <Trans i18nKey="MENTIONS:INFO.PHONE" /> 06.76.97.40.74
          </div>

          <h4>
            <Trans i18nKey="MENTIONS:HERBERGEMENT.TITLE" />
          </h4>
          <div>
            <Trans i18nKey="MENTIONS:HERBERGEMENT.WHO" />
          </div>
          <div>
            <Trans i18nKey="MENTIONS:INFO.ADDRESS" /> 2 RUE KELLERMANN, 59100 ROUBAIX
          </div>
          <div>
            <Trans i18nKey="MENTIONS:INFO.PHONE" /> 09 72 10 10 07
          </div>

          <h4>
            <Trans i18nKey="MENTIONS:PROPERTY.TITLE" />
          </h4>
          <Trans i18nKey="MENTIONS:PROPERTY.DESCRIPTION" />

          <h4>
            <Trans i18nKey="MENTIONS:DATA.TITLE" />
          </h4>
          <Trans i18nKey="MENTIONS:DATA.DESCRIPTION" />

          <h4>
            <Trans i18nKey="MENTIONS:COOKIE.TITLE" />
          </h4>
          <Trans i18nKey="MENTIONS:COOKIE.DESCRIPTION" />

          <h4>
            <Trans i18nKey="MENTIONS:LIMIT.TITLE" />
          </h4>
          <Trans i18nKey="MENTIONS:LIMIT.DESCRIPTION" />

          <h4>
            <Trans i18nKey="MENTIONS:JURI.TITLE" />
          </h4>
          <Trans i18nKey="MENTIONS:JURI.DESCRIPTION" />
        </div>
      </MdCard>
    </AppContent>
  );
};

export default MentionPage;
