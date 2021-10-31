import {useMemo} from 'react';
import PageWrapper from '../../shared/components/PageWrapper';
import ROUTERS from '../../core/_consts/routes';
import OffersWrapper from './OffersWrapper';
import foto from '../../shared/media/Offers/CompanyLiquidation.jpg';

const prices = [{cost: 'от 7000 грн', offerType: ''}];

const CompanyLiquidation = () => {
  const breadCrubmsRoutes = useMemo(
    () => [
      {title: 'Главная', route: ROUTERS.HOME},
      {title: 'Ликвидация бизнеса', route: ROUTERS.COMPANY_LIQUIDATION},
    ],
    []
  );

  return (
    <div className="offer">
      <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="Ликвидация бизнеса">
        <OffersWrapper prices={prices} foto={foto}>
          <div className="offer__description">
            <p className="offer__title">Что мы делаем?</p>
            <p className="offer__paragraph ">
              Помимо услуг по регистрации компаний в Украине и за рубежом, также мы предлагаем ликвидацию предприятий.
            </p>
            <p className="offer__paragraph ">Если бизнес Вам больше не нужен, мы поможем Вам его ликвидировать.</p>
            <p className="offer__paragraph ">В данном случае мы предлагаем два варианта нашего сотрудничества:</p>
            <ul className=" mt25">
              <li className="offer__paragraph">
                Официальная ликвидация через налоговую, с подготовкой полного пакета документов, необходимых для
                закрытия компании.
              </li>
              <li className="offer__paragraph">
                Альтернативная ликвидация путем продажи корпоративных прав на номинального владельца.
              </li>
            </ul>
            <p className="offer__paragraph  mt25">Мы предлагаем услугу ликвидации как для ФЛП так и ООО.</p>
          </div>
        </OffersWrapper>
      </PageWrapper>
    </div>
  );
};

export default CompanyLiquidation;
