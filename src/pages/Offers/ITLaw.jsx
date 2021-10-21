import {useMemo} from 'react';
import PageWrapper from '../../shared/components/PageWrapper';
import ROUTERS from '../../core/_consts/routes';
import OffersWrapper from './OffersWrapper';
import foto from '../../shared/media/Offers/ITLaw.jpg';

const ITLaw = () => {
  const breadCrubmsRoutes = useMemo(
    () => [
      {title: 'Главная', route: ROUTERS.HOME},
      {title: 'IT право', route: ROUTERS.IT_LAW},
    ],
    []
  );

  return (
    <div className="offer">
      <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="IT право">
        <OffersWrapper foto={foto}>
          <div className="offer__description">
            <p className="offer__title">Что мы делаем?</p>
            <p className="offer__paragraph ">
              Любая предпринимательская деятельность на территории Украины должна быть урегулирована в соответствии с
              национальным законодательством. В том числе это касается ИТ специалистов, которые работают как фрилансеры
              на различных платформах (к примеру Fiverr, Upwork и тд). Несоблюдение требований по регистрации такой
              деятельности приведет к серьезным налоговым последствиям и начислению неуплаченных налогов. В связи с этим
              ЮК Лавиант предлагает услугу по регистрации и бухгалтерскому сопровождению ФЛП, подбор КВЕДов программного
              обеспечения под осуществляемую вами деятельность, регистрацию в платежных системах.
            </p>
            <p className="offer__paragraph ">
              Если же Вы вышли на новый уровень, и объём доходов и расходов для оплаты услуг субподрядчиков предполагает
              регистрацию юридического лица, мы предлагаем:
            </p>
            <ul className="">
              <li className="offer__paragraph">консультацию по налоговой оптимизации Вашей деятельности;</li>
              <li className="offer__paragraph">
                подбор и регистрация компании в необходимой организационно-правовой форме;
              </li>
              <li className="offer__paragraph">
                подбор подходящей для Вас системы налогообложения под структуру Вашего бизнеса, исходя из способа
                сотрудничества с подрядчиками.
              </li>
            </ul>
            <p className="offer__paragraph  mt25">
              Кроме этого, большим спросом среди ИТ специалистов пользуется релокация бизнеса за границу. Много
              зарубежных юрисдикций предлагают благоприятные налоговые системы для иностранных инвесторов. Поэтому ЮК
              Лавиант предлагает:
            </p>
            <ul className="">
              <li className="offer__paragraph">
                регистрацию компании за рубежом в соответствии с Вашим предпочтением, либо наиболее выгодную юрисдикцию
                под Вашу деятельность подберут наши специалисты.
              </li>
            </ul>
            <p className="offer__paragraph  mt25">
              Для иностранных ИТ специалистов, которые хотят релоцироваться в Украину, ми предлагаем:
            </p>
            <ul className="">
              <li className="offer__paragraph">
                регистрацию компании в необходимой организационно-правовой форме с подбором наиболее подходящей системой
                налогообложения;
              </li>
              <li className="offer__paragraph">регистрацию постоянного представительства компании-нерезидента;</li>
              <li className="offer__paragraph">регистрацию ИТ специалиста по системе е-резидентства.</li>
            </ul>
          </div>
        </OffersWrapper>
      </PageWrapper>
    </div>
  );
};

export default ITLaw;
