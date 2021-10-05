import {useMemo} from 'react';
import PageWrapper from '../../shared/components/PageWrapper';
import ROUTERS from '../../core/_consts/routes';
import OffersWrapper from './OffersWrapper';

const CompanyLiquidation = () => {
  const breadCrubmsRoutes = useMemo(
    () => [
      {title: 'Главная', route: ROUTERS.HOME},
      {title: 'Ликвидация бизнеса', route: ROUTERS.COMPANY_LIQUIDATION},
    ],
    []
  );
  const prices = [
    {cost: '10 000', offerType: 'Стандарт'},
    {cost: '12 000', offerType: 'Премиум'},
    {cost: '20 000', offerType: 'Премиум +'},
  ];
  return (
    <div className="offer">
      <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="Ликвидация бизнеса">
        <OffersWrapper prices={prices}>
          <div className="offer__description">
            <p className="offer__title">Что мы делаем?</p>
            <p className="offer__paragraph bg-white">
              Помимо услуг по регистрации компаний в Украине и за рубежом, также мы предлагаем ликвидацию предприятий.
            </p>
            <p className="offer__paragraph bg-white">
              Если бизнес Вам больше не нужен, мы поможем Вам его ликвидировать.
            </p>
            <p className="offer__paragraph bg-white">
              В данном случае мы предлагаем два варианта нашего сотрудничества:
            </p>
            <ul className="bg-white mt25">
              <li className="offer__paragraph">
                Официальная ликвидация через налоговую, с подготовкой полного пакета документов, необходимых для
                закрытия компании.
              </li>
              <li className="offer__paragraph">
                Альтернативная ликвидация путем продажи корпоративных прав на номинального владельца.
              </li>
            </ul>
            <p className="offer__paragraph bg-white mt25">Мы предлагаем услугу ликвидации как для ФЛП так и ООО.</p>
          </div>
        </OffersWrapper>
      </PageWrapper>
    </div>
  );
};

export default CompanyLiquidation;
