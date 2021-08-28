import {useMemo} from 'react';
import PageWrapper from '../../shared/components/PageWrapper';
import ROUTERS from '../../core/_consts/routes';
import ServiceHeader from '../../shared/components/ServiceHeader';

const RegisterBusiness = () => {
  const breadCrubmsRoutes = useMemo(
    () => [
      {title: 'Главная', route: ROUTERS.HOME},
      {title: 'Услуга', route: ROUTERS.REGISTER_BUSINESS},
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
    <div>
      <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="Купить лицензию">
        <div>
          <ServiceHeader prices={serviceHeaderPrices} />
        </div>
      </PageWrapper>
    </div>
  );
};

export default RegisterBusiness;
