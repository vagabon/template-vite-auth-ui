import { AppContent } from '@vagabond-inc/react-boilerplate-app';
import { MdCard, useAppTranslate } from '@vagabond-inc/react-boilerplate-md';
import { AppConf } from 'conf/AppConf';

const CgvPage: React.FC = () => {
  const { Trans } = useAppTranslate();

  return (
    <AppContent
      apiUrl={AppConf.API_URI}
      website={AppConf.TITLE}
      className="flex1 profil-content"
      seoTitle="SEO:CGV.TITLE"
      seoDescription="SEO:CGV.DESCRIPTION">
      <MdCard title={'Conditions générales de ventes'} className="copyright flex">
        <div className="flex" style={{ fontSize: '1.1rem', margin: '20px 50px', lineHeight: '2rem', textAlign: 'justify' }}>
          <Trans i18nKey="MENTIONS:CGV.DATE" />
          <br />
          <h4>
            <Trans i18nKey="MENTIONS:CGV.OBJECT.TITLE" />
          </h4>
          <Trans i18nKey="MENTIONS:CGV.OBJECT.DESCRIPTION" />

          <h4>
            <Trans i18nKey="MENTIONS:CGV.ACCEPTATION.TITLE" />
          </h4>
          <Trans i18nKey="MENTIONS:CGV.ACCEPTATION.DESCRIPTION" />

          <h4>
            <Trans i18nKey="MENTIONS:CGV.SERVICES.TITLE" />
          </h4>
          <Trans i18nKey="MENTIONS:CGV.SERVICES.DESCRIPTION" />

          <h4>
            <Trans i18nKey="MENTIONS:CGV.TARIFS.TITLE" />
          </h4>
          <Trans i18nKey="MENTIONS:CGV.TARIFS.DESCRIPTION" />

          <h4>
            <Trans i18nKey="MENTIONS:CGV.DUREE.TITLE" />
          </h4>
          <Trans i18nKey="MENTIONS:CGV.DUREE.DESCRIPTION" />

          <h4>
            <Trans i18nKey="MENTIONS:CGV.RESILIATION.TITLE" />
          </h4>
          <Trans i18nKey="MENTIONS:CGV.RESILIATION.DESCRIPTION" />

          <h4>
            <Trans i18nKey="MENTIONS:CGV.RESPONSABILITY.TITLE" />
          </h4>
          <Trans i18nKey="MENTIONS:CGV.RESPONSABILITY.DESCRIPTION" />

          <h4>
            <Trans i18nKey="MENTIONS:CGV.PROPERTY.TITLE" />
          </h4>
          <Trans i18nKey="MENTIONS:CGV.PROPERTY.DESCRIPTION" />

          <h4>
            <Trans i18nKey="MENTIONS:CGV.DROIT.TITLE" />
          </h4>
          <Trans i18nKey="MENTIONS:CGV.DROIT.DESCRIPTION" />
        </div>
      </MdCard>
    </AppContent>
  );
};

export default CgvPage;
