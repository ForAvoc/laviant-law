import {useMemo} from 'react';
import PageWrapper from '../../shared/components/PageWrapper';
import OffersWrapper from './OffersWrapper';
import ROUTERS from '../../core/_consts/routes';
import foto from '../../shared/media/Offers/BusinessSupport.jpg';

const BusinessSupport = () => {
  const breadCrubmsRoutes = useMemo(
    () => [
      {title: 'Главная', route: ROUTERS.HOME},
      {title: 'Сопровождение бизнеса', route: ROUTERS.BUSINESS_SUPPORT},
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
      <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="Сопровождение бизнеса">
        <OffersWrapper prices={prices} foto={foto}>
          <div className="offer__description">
            <p className="offer__title">Что мы делаем?</p>
            <p className="offer__paragraph">
              В современных реалиях успешно вести бизнес без поддержки юристов невозможно. Это подтвердят опытные
              предприниматели всего мира. Список востребованных у украинских бизнесменов юридических услуг включает в
              себя:
            </p>
            <ul className=" mt25">
              <li className="offer__paragraph">консультации по вопросам законодательства;</li>
              <li className="offer__paragraph">налоговое планирование;</li>
              <li className="offer__paragraph">составление договоров и других документов;</li>
              <li className="offer__paragraph">сопровождение хозяйственных операций;</li>
              <li className="offer__paragraph">подготовка претензий и исковых заявлений;</li>
              <li className="offer__paragraph">проверка информации о партнерах, контрагентах и инвесторах.</li>
            </ul>
            <p className="offer__paragraph  mt25">
              Все эти пункты предоставляются в рамках юридического сопровождения бизнеса. При этом, подписав контракт на
              абонентское обслуживание с юридической компанией, вы будете платить меньше, чем за конкретную услугу
              отдельно.
            </p>
            <p className="offer__paragraph ">
              Помимо вышеперечисленных услуг мы также предлагаем бухгалтерское сопровождения ФЛП и ООО на упрощенной и
              общей системе налогообложения.
            </p>
            <p className="offer__paragraph ">
              Также, мы предлагаем услуги юридического сопровождения для ИТ-предпринимателей и ИТ-компаний.
            </p>
          </div>
        </OffersWrapper>
      </PageWrapper>
    </div>
  );
};

export default BusinessSupport;
