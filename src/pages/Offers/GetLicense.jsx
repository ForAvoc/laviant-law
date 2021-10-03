import {useMemo} from 'react';
import PageWrapper from '../../shared/components/PageWrapper';
import ROUTERS from '../../core/_consts/routes';

const GetLicense = () => {
  const breadCrubmsRoutes = useMemo(
    () => [
      {title: 'Главная', route: ROUTERS.HOME},
      {title: 'Получить лицензию', route: ROUTERS.GET_LICENSE},
    ],
    []
  );

  return (
    <div className="offer">
      <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="Получить лицензию">
        <div className="offer__description">
          <p className="offer__title">Что мы делаем?</p>
          <p className="offer__paragraph bg-white">
            Существует ряд видов деятельности, для которых нужно получения лицензии.
          </p>
          <p className="offer__title">Мы предлагаем:</p>
          <ul className="bg-white">
            <li className="offer__paragraph">Строительная лицензия СС2 и СС3</li>
            <li className="offer__paragraph">Лицензия на розничную и оптовую продажу топлива</li>
            <li className="offer__paragraph">Лицензия на розничную и оптовую продажу алкоголя и табачных изделий</li>
            <li className="offer__paragraph">Лицензия на поставку электрoэнергии и газа</li>
            <li className="offer__paragraph">Лицензия на ветеринарную практику</li>
            <li className="offer__paragraph">Лицензия на трудоустройство заграницей</li>
            <li className="offer__paragraph">Охранная лицензия</li>
            <li className="offer__paragraph">Лицензия на пассажирские перевозки</li>
            <li className="offer__paragraph">Лицензия на аптечную деятельность</li>
          </ul>
          <p className="offer__paragraph bg-white mt25">
            Получение лицензии достаточно длительный и трудоемкий процесс, который может длиться от нескольких недель до
            нескольких месяцев, в зависимости от их вида. Чтобы получить возможность заняться бизнесом как можно быстрее
            Вы можете приобрести готовую компанию с интересующей вас лицензией. В наличии всегда есть соответствующие
            предприятия.
          </p>
        </div>
      </PageWrapper>
    </div>
  );
};

export default GetLicense;
