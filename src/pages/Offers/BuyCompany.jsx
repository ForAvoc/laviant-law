import {useMemo} from 'react';
import PageWrapper from '../../shared/components/PageWrapper';
import ROUTERS from '../../core/_consts/routes';
import ServiceHeader from '../../shared/components/ServiceHeader';

const BuyCompany = () => {
  const breadCrubmsRoutes = useMemo(
    () => [
      {title: 'Главная', route: ROUTERS.HOME},
      {title: 'Купить компанию', route: ROUTERS.BUY_COMPANY},
    ],
    []
  );

  const serviceHeaderPrices = useMemo(
    () => [
      {cost: 'от 10 000 грн.', offerType: 'Стандарт'},
      {cost: 'от 12 000 грн.', offerType: 'Стандарт +'},
      {cost: 'от 16 000 грн.', offerType: 'Премиум'},
    ],
    []
  );

  return (
    <div className="offer">
      <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="Купить компанию">
        <div>
          <ServiceHeader prices={serviceHeaderPrices} />
          <div className="offer__description">
            <p className="offer__title">Что мы делаем?</p>
            <p className="offer__paragraph bg-white">
              Возникают ситуации, когда существует необходимость создания компании в сжатые сроки и нет времени ждать,
              пока будет проведена регистрация.
            </p>
            <p className="offer__paragraph bg-white">В этом случае возможна покупка готового ООО (ТОВ)</p>
            <p className="offer__paragraph bg-white">
              ЮК ЛАВИАНТ предлагает готовые компании разных годов регистрации по Вашим запросам. Покупка готовой
              компании экономит Ваше время, и всего через два дня у вас будет готовое к работе предприятие.
            </p>
            <p className="offer__title">Мы предлагаем:</p>
            <ul className="bg-white">
              <li className="offer__paragraph">
                ООО высокого качества, зарегестрированные на немассовых учредителей, также компании с регистрацией от
                полугода, что особенно важно для некоторых видов деятельности.
              </li>
              <li className="offer__paragraph">
                Все компании проверены, не проблемны, с отчетностью, без открытых счетов в финансовых организациях.
              </li>
            </ul>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default BuyCompany;
