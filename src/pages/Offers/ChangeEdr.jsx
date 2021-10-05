import {useMemo} from 'react';
import PageWrapper from '../../shared/components/PageWrapper';
import ROUTERS from '../../core/_consts/routes';
import OffersWrapper from './OffersWrapper';

const ChangeEdr = () => {
  const breadCrubmsRoutes = useMemo(
    () => [
      {title: 'Главная', route: ROUTERS.HOME},
      {title: 'Внесения изменений в ЕДР', route: ROUTERS.TEST},
    ],
    []
  );

  return (
    <div className="offer">
      <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="Внесения изменений в ЕДР">
        <OffersWrapper>
          <div className="offer__description">
            <p className="offer__title">Что мы делаем?</p>
            <p className="offer__paragraph bg-white">
              Вторичная регистрация предприятия подразумевает под собой набор юридических действий, необходимый для
              изменения тех или иных данных юридического лица. У Вашей фирмы может возникнуть такая необходимость, ведь
              большинство компаний периодически меняет вид деятельности, адрес, уставной фонд и так далее. Например,
              может понадобиться вторичная регистрация устава ООО (ТОВ), замена руководителя или изменения юридического
              адреса – все эти действия называют вторичной регистрацией.
            </p>
            <p className="offer__paragraph bg-white">
              Наша компания предлагает полный спектр услуг в сфере изменения информации юридических и физических лиц
              предпринимателей.
            </p>
            <p className="offer__title">Мы предлагаем:</p>
            <ul className="bg-white">
              <li className="offer__paragraph">Изменения информации в ЕГР.</li>
              <li className="offer__paragraph">Сделки по купли-продаже долей ООО.</li>
              <li className="offer__paragraph">Смена директора, изменение местоположения, КВЕДов.</li>
              <li className="offer__paragraph">
                Переход с/на модельный/собственный устав, разработка устава по Вашим запросам.
              </li>
              <li className="offer__paragraph">увеличение уставного капитала.</li>
              <li className="offer__paragraph">Изменения КВЕДов ФЛП.</li>
              <li className="offer__paragraph">
                Внесение информации о конечном бенефициарном владельце государственному регистратору.
              </li>
              <li className="offer__paragraph">Создание структуры собственности бизнеса.</li>
            </ul>
          </div>
        </OffersWrapper>
      </PageWrapper>
    </div>
  );
};

export default ChangeEdr;
