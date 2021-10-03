import {useMemo} from 'react';
import PageWrapper from '../../shared/components/PageWrapper';
import ROUTERS from '../../core/_consts/routes';
import ServiceHeader from '../../shared/components/ServiceHeader';

const RegisterBusinessAbroad = () => {
  const breadCrubmsRoutes = useMemo(
    () => [
      {title: 'Главная', route: ROUTERS.HOME},
      {title: 'Регистрация бизнеса в инностранных юрисдикциях', route: ROUTERS.REGITER_BUSINESS_ABROAD},
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
      <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="Регистрация бизнеса в инностранных юрисдикциях">
        <div>
          <ServiceHeader prices={serviceHeaderPrices} />
          <div className="offer__description">
            <p className="offer__title">Что мы делаем?</p>
            <p className="offer__paragraph bg-white">
              Процесс создания бизнеса в любой иностранной юрисдикции невозможен без сопровождения юристов. Это
              необходимо для определения необходимой юрисдикции и рода деятельности Вашего бизнеса, и для других
              вопросов, с которыми Вам нужно будет столкнуться перед началом открытия бизнеса в иностранной юрисдикции.
              Также, не стоит забывать о том, что компания в другой стране — это не только новые возможности, но и
              обязанности, которые лягут на Вас, как на собственника бизнеса Поэтому к вопросу создания компании стоит
              относиться с максимальной ответственностью.
            </p>
            <p className="offer__paragraph bg-white">
              Мы подберем оптимальную юрисдикцию под Ваши запросы и зарегистрируем Ваш бизнес. Мы предлагаем два
              варианта этой услуги: первый, в котором вы будете выступать прямым собственником бизнеса, второй будет
              основываться на номинальных учредителях и директорах, в стране, где Вы планируете открывать компанию.
              Каждый из вариантов имеет свои плюсы и минусы, но выбирать нужно индивидуально. Одно мы знаем точно: в
              любом случае, мы предоставим Вам услуги высшего уровня. Мы можем предложить зарегистрировать компанию в
              более чем 30 юрисдикциях. Во всех странах у нас есть партнеры на месте.
            </p>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default RegisterBusinessAbroad;