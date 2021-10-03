import {useMemo} from 'react';
import PageWrapper from '../../shared/components/PageWrapper';
import ROUTERS from '../../core/_consts/routes';
import ServiceHeader from '../../shared/components/ServiceHeader';

const RegisterTradeMark = () => {
  const breadCrubmsRoutes = useMemo(
    () => [
      {title: 'Главная', route: ROUTERS.HOME},
      {title: 'Регистрация торговых марок', route: ROUTERS.REGISTER_TRADEMARK},
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
      <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="Регистрация торговых марок">
        <div>
          <ServiceHeader prices={serviceHeaderPrices} />
          <div className="offer__description">
            <p className="offer__title">Что мы делаем?</p>
            <p className="offer__paragraph bg-white">
              После создания компании следующим шагом, необходимым для идентификации Вашего бренда является регистрация
              торговой марки. Давайте разберемся, кому и зачем нужна торговая марка.
            </p>
            <ul className="bg-white mt25">
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
            <p className="offer__paragraph bg-white mt25">
              Процес регистрации торговой марки достаточно долгий и трудоемкий, он может длиться до 12 до 14 месяцев, но
              можно использовать ускоренную процедуру, которая будет длиться в течении 9-12 месяцев. Наша компания
              сопроводит процесс регистрации Вашей компании до получения свидетельства.
            </p>
            <p className="offer__title">В наши услуги входит:</p>
            <ol className="offer__list bg-white">
              <li>Консультация по поводу регистрации ТМ.</li>
              <li>Подбор классов МКТУ для регистрации.</li>
              <li>Подготовка заявки и пакета документов на регистрацию ТМ.</li>
              <li>Подготовка квитанций на оплату государственных сборов.</li>
              <li>Подача документов на регистрацию ТМ.</li>
              <li>Получение свидетельства.</li>
            </ol>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default RegisterTradeMark;
