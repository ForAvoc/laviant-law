import {useMemo} from 'react';
import PageWrapper from '../../shared/components/PageWrapper';
import ROUTERS from '../../core/_consts/routes';
import OffersWrapper from './OffersWrapper';
import foto from '../../shared/media/Offers/RegisterTradeMark.jpg';

const prices = [{cost: 'от 1500 грн', offerType: 'регистрация ООО'}];

const RegisterTradeMark = () => {
  const breadCrubmsRoutes = useMemo(
    () => [
      {title: 'Главная', route: ROUTERS.HOME},
      {title: 'Регистрация торговых марок', route: ROUTERS.REGISTER_TRADEMARK},
    ],
    []
  );

  return (
    <div className="offer">
      <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="Регистрация торговых марок">
        <OffersWrapper prices={prices} foto={foto}>
          <div className="offer__description">
            <p className="offer__title">Что мы делаем?</p>
            <p className="offer__paragraph ">
              После создания компании следующим шагом, необходимым для идентификации Вашего бренда является регистрация
              торговой марки. Давайте разберемся, кому и зачем нужна торговая марка.
            </p>
            <ul className=" mt25">
              <li className="offer__paragraph">
                Регистрация торговой марки позволяет защитить ваши товары или услуги от конкурентов. Если ваш продукт
                уникален, то Вы можете получить монополию на рынке.
              </li>
              <li className="offer__paragraph">
                При ориентации вашего бизнеса на международный рынок, регистрация торговой марки в Украине является
                первым этапом на пути к регистрации международной торговой марки.
              </li>
              <li className="offer__paragraph">
                Если провести оценку торговой марки, а потом поставить ее на баланс и внести в уставной фонд, то можно
                повысить стоимость предприятия.
              </li>
              <li className="offer__paragraph">За использование торговой марки можно получать лицензионные выплаты.</li>
              <li className="offer__paragraph">Вы можете улучшить репутацию и узнаваемость бренда.</li>
              <li className="offer__paragraph">
                Торговую марку можно использовать в качестве залога, если нужно получить кредит для развития бизнеса.
              </li>
            </ul>
            <p className="offer__paragraph  mt25">
              Процес регистрации торговой марки достаточно долгий и трудоемкий, он может длиться до 12 до 14 месяцев, но
              можно использовать ускоренную процедуру, которая будет длиться в течении 9-12 месяцев. Наша компания
              сопроводит процесс регистрации Вашей компании до получения свидетельства.
            </p>
            <p className="offer__title">В наши услуги входит:</p>
            <ol className="offer__list ">
              <li>Консультация по поводу регистрации ТМ.</li>
              <li>Подбор классов МКТУ для регистрации.</li>
              <li>Подготовка заявки и пакета документов на регистрацию ТМ.</li>
              <li>Подготовка квитанций на оплату государственных сборов.</li>
              <li>Подача документов на регистрацию ТМ.</li>
              <li>Получение свидетельства.</li>
            </ol>
          </div>
        </OffersWrapper>
      </PageWrapper>
    </div>
  );
};

export default RegisterTradeMark;
