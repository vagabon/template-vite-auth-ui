import { AppContent } from '@vagabond-inc/react-boilerplate-app';
import { MdCard, useAppTranslate } from '@vagabond-inc/react-boilerplate-md';
import { AppConf } from 'conf/AppConf';
import Title from 'module/home/component/Title';
import Faq from 'module/home/component/faq/Faq';

const FaqPage: React.FC = () => {
  const { Trans } = useAppTranslate();

  return (
    <AppContent
      apiUrl={AppConf.API_URI}
      website={AppConf.TITLE}
      className="flex1"
      seoTitle="SEO:FAQ.TITLE"
      seoDescription="SEO:FAQ.DESCRIPTION">
      <MdCard title="FAQ" icon="help">
        <div style={{ textAlign: 'justify' }}>
          <Title /> <Trans i18nKey="FAQ_DESCRIPTION" />
        </div>
      </MdCard>
      <Faq />
    </AppContent>
  );
};

export default FaqPage;
