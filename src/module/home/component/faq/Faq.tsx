import { I18nUtils, MdAccordion, useAppTranslate } from '@vagabond-inc/react-boilerplate-md';
import { useCallback } from 'react';

export interface IFaqProps {
  small?: boolean;
}

const Faq: React.FC<IFaqProps> = ({ small }) => {
  const { t } = useAppTranslate();

  const getFaq = useCallback((small: boolean = false) => {
    const faq = [];
    for (let i = 0; i < (small ? 10 : 20); i++) {
      faq.push('Q' + (i + 1));
    }
    return faq;
  }, []);

  return (
    <>
      {getFaq(small).map((faq) => (
        <MdAccordion
          key={'FAQ:' + faq + '.TITLE'}
          title={'FAQ:' + faq + '.TITLE'}
          description={
            faq === 'Q11'
              ? I18nUtils.translate(t, 'FAQ:' + faq + '.DESCRIPTION', { clickRules: t('RULES.MAX_CLICK') })
              : 'FAQ:' + faq + '.DESCRIPTION'
          }
        />
      ))}
    </>
  );
};

export default Faq;
