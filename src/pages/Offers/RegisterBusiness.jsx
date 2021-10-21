import {useMemo} from 'react';
import {Typography, makeStyles} from '@material-ui/core';
import PageWrapper from '../../shared/components/PageWrapper';
import ROUTERS from '../../core/_consts/routes';
import OffersWrapper from './OffersWrapper';
import foto from '../../shared/media/Offers/BusinessRegistration.jpg';

const useStyles = makeStyles(() => ({
  paragraph: {
    gap: '10px',
    marginBottom: '30px',
    color: '#4c555c',
  },
  list: {
    marginTop: '15px',
  },
  listitem: {
    padding: '5px 0',
  },
  strongSpan: {
    color: '#4c555c',
    fontWeight: '600',
    fontSize: '16px',
  },
  linkSpan: {
    position: 'relative',
    cursor: 'pointer',
    color: '#4c555c',
    fontWeight: '350',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    '&::after': {
      content: '',
      position: 'absolute',
      bottom: '0',
      left: '0',
      height: '1px',
      width: '100%',
      backgroundColor: '#4c555c',
    },
    '&:hover': {
      color: '#8B00FF',
      '&::after': {
        backgroundColor: '#8B00FF',
      },
    },
  },
}));

const RegisterBusiness = () => {
  const breadCrubmsRoutes = useMemo(
    () => [
      {title: 'Главная', route: ROUTERS.HOME},
      {title: 'Регистрация бизнеса', route: ROUTERS.REGISTER_BUSINESS},
    ],
    []
  );
  const classes = useStyles();

  return (
    <div className="offer">
      <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="Регистрация бизнеса">
        <OffersWrapper foto={foto}>
          <div className="offer__description">
            <Typography className={classes.paragraph} variant="subtitle1">
              <span className={classes.strongSpan}>Зачем нужна регистрация бизнеса?</span>
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              В Украине заниматься предпринимательской деятельностью без государственной регистрации запрещено, это
              ведет к достаточно серьёзным санкциям. Именно поэтому организация и осуществление бизнеса становятся
              возможными только после проведения его государственной регистрации. Государственным регистратором
              исключительно в исполнительном комитете городского совета города областного значения или в районной,
              районной в городе Киев государственной администрации проводится государственная регистрация субъектов
              предпринимательской деятельности по местонахождению юридического лица или по месту жительства физического
              лица – предпринимателя, но есть возможность проводить регистрацию по экстерриториальному принципу – без
              привязки к месту регистрации субъекта предпринимательской деятельности.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              <span className={classes.strongSpan}>Что мы делаем?</span>
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              ТОВ ЮК «ЛАВИАНТ» предлагает широкий спектр юридических услуг в сфере регистрации бизнеса, и внесения
              изменений в Единый государственный реестр. В процессе создания Вашего бизнеса мы проведем бесплатное
              консультирование по выбору формы деятельности и налогообложения.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              <span className={classes.strongSpan}>
                Чтобы открыть ООО в Украине, государственный регистратор требует предъявления следующих документов:
              </span>
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Физическими лицами-резидентами:
              <ul className={classes.list}>
                <li className={classes.listitem}>копии паспорта и налогового номера директора и всех учредителей;</li>
                <li className={classes.listitem}>
                  подтверждение полномочий представителя при подаче документов (нотариально удостоверенная
                  доверенность).
                </li>
                <ul className={classes.list}>
                  Физическими лицами-нерезидентами (дополнительно):
                  <li className={classes.listitem}>нотариально удостоверенный перевод паспорта на украинский язык;</li>
                  <li className={classes.listitem}>копия налогового номера.</li>
                </ul>
              </ul>
            </Typography>

            <Typography className={classes.paragraph} variant="subtitle1">
              Юридическими лицами-резидентами:
              <ul className={classes.list}>
                <li className={classes.listitem}>выписка из ЕГРПОУ;</li>
                <li className={classes.listitem}>подтверждение полномочий представителя при подаче документов;</li>
              </ul>
            </Typography>

            <Typography className={classes.paragraph} variant="subtitle1">
              Юридическими лицами-нерезидентами (государственная регистрация ООО дополнительно требует):
              <ul className={classes.list}>
                <li className={classes.listitem}>
                  документы, которые подтверждают регистрацию иностранного лица (например, извлечение из банковского или
                  торгового реестра);
                </li>
                <li className={classes.listitem}>протокол высшего собрания о решении стать учредителем;</li>
                <li className={classes.listitem}>
                  решение о назначении директора и доверенность на представление им учредителя.
                </li>
              </ul>
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Обратите внимание!!! Если речь идет о регистрации фермерского хозяйства, дополнительно потребуют
              документы, подтверждающие право собственности на землю или договор ее аренды. В Украине, как в аграрной
              стране, все большее количество будущих предпринимателей интересует именно такая регистрация предприятий.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              <span className={classes.strongSpan}>Что мы предлагаем:</span>
              <ul className={classes.list}>
                <li className={classes.listitem}>
                  Регистрация ФЛП (для любых видов деятельности, предусмотренных законодательством, в том числе
                  регистрацию физического-лица предпринимателя для IT-специалистов).
                </li>
                <li className={classes.listitem}>
                  Регистрация ФЛП по доверенности, выбор местоположения деятельности без привязки к прописке.
                </li>
                <li className={classes.listitem}>
                  Регистрация ООО, подбор КВЕДов, первичное налоговое консультирование, регистрация общества с
                  ограниченной ответственностью на общей системе налогообложения, с НДС и на едином налоге.
                </li>
                <li className={classes.listitem}>
                  Регистрация фермерского хозяйства, консультирование по созданию ФХ, подбору КВЕДов, подготовка к
                  переходу на 4 группу единого налога, бухгалтерское и юридическое сопровождение деятельности
                  фермерского хозяйства.
                </li>
                <li className={classes.listitem}>Регистрация иностранного представительства в Украине.</li>
                <li className={classes.listitem}>
                  Создание отдельного структурного подразделения юридического лица, представительства, филии.
                </li>
                <li className={classes.listitem}>
                  Строк выполнения услуг в течении 2-3 дней. Также мы можем провести регистрацию бизнеса в ускоренном
                  режиме{' '}
                </li>
              </ul>
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              <span className={classes.strongSpan}>
                Для подготовки проекта уставных и регистрационных документов по ООО от Вас требуется следующее:
              </span>
              <ul className={classes.list}>
                <li className={classes.listitem}>название ООО (подбор названия по Вашему запросу)</li>
                <li className={classes.listitem}>
                  юридический адрес (местонахождение) ООО (предоставление юридического адреса по Вашему запросу)
                </li>
                <li className={classes.listitem}>
                  размер уставного капитала в ООО и соотношение долей между учредителями;
                </li>
                <li className={classes.listitem}>КВЕДЫ (виды деятельности);</li>
                <li className={classes.listitem}>контактный номер телефона и e-mail для государственных органов;</li>
                <li className={classes.listitem}>планируемая система налогообложения;</li>
                <li className={classes.listitem}>
                  скан-копия паспорта и ИНН учредителей (если учредители физические лица);
                </li>
                <li className={classes.listitem}>
                  скан-копия Выписки и извлечения с ЕГР учредителей (если учредители юридические лица);
                </li>
                <li className={classes.listitem}>
                  скан-копия документов, подтверждающих регистрацию иностранного лица в стране его местонахождения
                  (выписка из торгового, банковского, судебного реестра) (если учредители юридические лица нерезиденты);
                </li>
                <li className={classes.listitem}>скан-копия паспорта и ИНН директора.</li>
              </ul>
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              <span className={classes.strongSpan}>
                Это общий список, но при индивидуальной работе с клиентами могут запрашиваться другие документы и
                сведения.{' '}
              </span>
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              <span className={classes.strongSpan}>В стоимость услуг входит:</span>
              <ul className={classes.list}>
                <li className={classes.listitem}>подготовка регистрационных и уставных документов;</li>
                <li className={classes.listitem}>подбор КВЕДОВ;</li>
                <li className={classes.listitem}>проверка названия по ООО;</li>
                <li className={classes.listitem}>регистрация устава ООО;</li>
                <li className={classes.listitem}>получение выписки и извлечения (расширенное) с ЕГР;</li>
                <li className={classes.listitem}>получение справки со статистики (Извлечение из ЕГР);</li>
                <li className={classes.listitem}>
                  совместно с директором получение электронных ключей на подачу отчётов в электронном виде (ключи ГУ ДФС
                  Украины);
                </li>
                <li className={classes.listitem}>открытие расчетных счетов в банковских учреждениях;</li>
                <li className={classes.listitem}>
                  взятия на учет в органах государственной налоговой инспекции и пенсионном фонде
                </li>
                <li className={classes.listitem}>подготовка приказа о принятии директора в ООО.</li>
              </ul>
            </Typography>

            <Typography className={classes.paragraph} variant="subtitle1">
              <span className={classes.strongSpan}>Наши преимущества в предоставлении данных услуг:</span>
              <ul className={classes.list}>
                <li className={classes.listitem}>Профессиональное консультирование.</li>
                <li className={classes.listitem}>Полное сопровождение в процессе регистрации.</li>
                <li className={classes.listitem}>
                  Обработка заявки в день обращения, регистрация на следующий, получение выписки и описи на третий день
                  после обращения.
                </li>
                <li className={classes.listitem}>Индивидуальный подход к каждому клиенту.</li>
                <li className={classes.listitem}>Многолетний опыт в предоставлении услуг регистрации, больше 5 лет.</li>
              </ul>
            </Typography>

            <Typography className={classes.paragraph} variant="subtitle1">
              В результате нашей работы Вы получите:
              <ul className={classes.list}>
                <li className={classes.listitem}>Выписку из государственного реестра</li>
                <li className={classes.listitem}>Опись</li>
                <li className={classes.listitem}>Устав</li>
                <li className={classes.listitem}>Статистика</li>
                <li className={classes.listitem}>Приказ о назначении директора</li>
                <li className={classes.listitem}>Протокол о создании ООО</li>
                <li className={classes.listitem}>Извлечения с реестра плательщиков НДС или единого налога</li>
                <li className={classes.listitem}>В случае необходимости изготовление печати</li>
              </ul>
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Стоимость выполнение работы оговаривается индивидуально, в таблице ниже приведена ориентировочная цена,
              также дополнительно оплачиваются нотариальные услуги.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              <ul className={classes.list} style={{listStyle: 'none'}}>
                <li className={classes.listitem}>
                  <span className={classes.strongSpan}>- Регистрация ФЛП - От 1300</span>
                </li>
                <li className={classes.listitem}>
                  <span className={classes.strongSpan}>- Регистрация ООО - От 1500</span>
                </li>
                <li className={classes.listitem}>
                  <span className={classes.strongSpan}>- Регистрация ФХ - От 2000</span>
                </li>
              </ul>
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Для заказа услуги обращайтесь по номеру телефона, в любой из мессенджеров, или оставьте заявку на сайте.
              Также читайте наши другие статьи на тематику регистрации и ведения бизнеса в разделе публикации. В случае,
              если Вам нужна компания «здесь и сейчас», ТОВ «ЮК ЛАВИАНТ» предлагает к покупке готовые фирмы. Также, мы
              предоставляем услугу оперативного предоставления печати предприятия в срок до двух дней.
            </Typography>
          </div>
        </OffersWrapper>
      </PageWrapper>
    </div>
  );
};

export default RegisterBusiness;
