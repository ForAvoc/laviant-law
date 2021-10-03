import {useMemo} from 'react';
import PageWrapper from '../../shared/components/PageWrapper';
import ROUTERS from '../../core/_consts/routes';
import ServiceHeader from '../../shared/components/ServiceHeader';

const RegisterBusiness = () => {
  const breadCrubmsRoutes = useMemo(
    () => [
      {title: 'Главная', route: ROUTERS.HOME},
      {title: 'Регистрация бизнеса', route: ROUTERS.REGISTER_BUSINESS},
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
      <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="Регистрация бизнеса">
        <div>
          <ServiceHeader prices={serviceHeaderPrices} />
          <div className="offer__description">
            <p className="offer__title">Что мы делаем?</p>
            <p className="offer__paragraph bg-white">
              ТОВ ЮК «ЛАВИАНТ» предлагает широкий спектр юридических услуг в сфере регистрации бизнеса, и внесения
              изменений в Единый государственный реестр. В процессе создания Вашего бизнеса мы проведем бесплатное
              консультирование по выбору формы деятельности и налогообложения.
            </p>
            <p className="offer__title">Мы предлагаем:</p>
            <ul className="bg-white">
              <li className="offer__paragraph">
                Регистрация ФЛП (для любых видов деятельности, предусмотренных законодательством, в том числе
                регистрацию физического-лица предпринимателя для IT-специалистов).
              </li>
              <li className="offer__paragraph">
                Регистрация ФЛП по доверенности, выбор местоположения деятельности без привязки к прописке.
              </li>
              <li className="offer__paragraph">
                Регистрация ООО, подбор КВЕДов, первичное налоговое консультирование, регистрация общества с
                ограниченной ответственностью на общей системе налогообложения, с НДС и на едином налоге.
              </li>
              <li className="offer__paragraph">
                Регистрация фермерского хозяйства, консультирование по созданию ФХ, подбору КВЕДов, подготовка к
                переходу на 4 группу единого налога, бухгалтерское и юридическое сопровождение деятельности фермерского
                хозяйства.
              </li>
              <li className="offer__paragraph">Регистрация иностранного представительства в Украине.</li>
              <li className="offer__paragraph">
                Создание отдельного структурного подразделения юридического лица, представительства, филии.
              </li>
              <li className="offer__paragraph">Строк выполнения услуг в течении 2-3 дней.</li>
            </ul>
            <p className="offer__title">
              Для подготовки проекта уставных и регистрационных документов по ООО от Вас требуется следующее:
            </p>
            <ol className="offer__list bg-white">
              <li>название ООО (подбор названия по Вашему запросу)</li>
              <li>юридический адрес (местонахождение) ООО (предоставление юридического адреса по Вашему запросу)</li>
              <li>размер уставного капитала в ООО и соотношение долей между учредителями;</li>
              <li>КВЕДЫ (виды деятельности);</li>
              <li>контактный номер телефона и e-mail для государственных органов;</li>
              <li>планируемая система налогообложения;</li>
              <li>скан-копия паспорта и ИНН учредителей (если учредители физические лица);</li>
              <li>скан-копия Выписки и извлечения с ЕГР учредителей (если учредители юридические лица);</li>
              <li>
                скан-копия документов, подтверждающих регистрацию иностранного лица в стране его местонахождения
                (выписка из торгового, банковского, судебного реестра) (если учредители юридические лица нерезиденты);
              </li>
              <li>скан-копия паспорта и ИНН директора.</li>
            </ol>
            <p className="offer__title">В стоимость услуг входит:</p>
            <ul className="bg-white">
              <li className="offer__paragraph">подготовка регистрационных и уставных документов;</li>
              <li className="offer__paragraph">подбор КВЕДОВ;</li>
              <li className="offer__paragraph">проверка названия по ООО;</li>
              <li className="offer__paragraph">регистрация устава ООО;</li>
              <li className="offer__paragraph">получение выписки и извлечения (расширенное) с ЕГР;</li>
              <li className="offer__paragraph">получение справки со статистики (Извлечение из ЕГР);</li>
              <li className="offer__paragraph">
                совместно с директором получение электронных ключей на подачу отчётов в электронном виде (ключи ГУ ДФС
                Украины);
              </li>
              <li className="offer__paragraph">открытие рассчетных счетов в банковских учреждениях;</li>
              <li className="offer__paragraph">подготовка приказа о принятии директора в ООО.</li>
            </ul>
            <p className="offer__title">Наши преимущества в предоставлении данных услуг:</p>
            <ul className="bg-white">
              <li className="offer__paragraph">Профессиональное консультирование.</li>
              <li className="offer__paragraph">Полное сопровождение в процессе регистрации.</li>
              <li className="offer__paragraph">
                Обработка заявки в день обращения, регистрация на следующий, получение выписки и описи на третий день
                после обращения.
              </li>
              <li className="offer__paragraph">Индивидуальный подход к каждому клиенту.</li>
              <li className="offer__paragraph">Многолетний опыт в предоставлении услуг регистрации, больше 5 лет.</li>
            </ul>
            <p className="offer__title">В результате Вы получите:</p>
            <ul className="bg-white">
              <li className="offer__paragraph">Выписку из государственного реестра </li>
              <li className="offer__paragraph">Опись</li>
              <li className="offer__paragraph">Устав</li>
              <li className="offer__paragraph">Статистика</li>
              <li className="offer__paragraph">Приказ о назначении директора</li>
              <li className="offer__paragraph">Протокол о создании ООО</li>
              <li className="offer__paragraph">Извлечения с реестра плательщиков НДС или единого налога</li>
              <li className="offer__paragraph">В случае необходимости изготовление печати</li>
            </ul>
            <div className="offer__remark">
              <p className="bold-text">
                Для заказа услуги обращайтесь по номеру телефона, в любой из мессенджеров, или оставьте заявку на сайте.
              </p>
              <p className="italic-text">
                Стоимость услуг по запросу, также дополнительно оплачиваются нотариальные услуги.
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default RegisterBusiness;
