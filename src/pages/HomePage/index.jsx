import React from 'react';
// Material UI
import {Typography, makeStyles} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
// Component
import cx from 'classnames';
import HomePageSlider from './slider';
import ListItem from '../../shared/components/ListItem';
import OurBenefits from './OurBenefitsItem';
import {ReactComponent as GroupIcon} from '../../shared/media/ourBenefits/group.svg';
import {ReactComponent as BussinesIcon} from '../../shared/media/ourBenefits/hand-shake.svg';
import {ReactComponent as ResultsIcon} from '../../shared/media/ourBenefits/results.svg';
import {ReactComponent as SocialIcon} from '../../shared/media/ourBenefits/social-media.svg';
import {ReactComponent as ClockIcon} from '../../shared/media/ourBenefits/clock.svg';
import {ReactComponent as SaveMoneyIcon} from '../../shared/media/ourBenefits/hand.svg';
import {ReactComponent as PaperIcon} from '../../shared/media/ourBenefits/gdpr.svg';
import {ReactComponent as СonfidentiallyIcon} from '../../shared/media/ourBenefits/confidentiality.svg';
import {ReactComponent as MoneyIcon} from '../../shared/media/ourBenefits/money.svg';
// Styles
import s from './style.module.scss';

const useStyles = makeStyles(() => ({
  paragraph: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '30px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
  },
  socialIcon: {
    // height: '120px',
    // width: '120px',
  },
}));

const allServices = [
  'регистрация ООО/ФЛП, внесение изменений в ЕГР, регистрация плательщиком НДС/единого налога, ликвидация ФЛП и ООО, внесение ведомостей о конечном бенефициарном владельце, а также другие услуги в сфере корпоративного права',
  'продажа готовых компаний, продажа ООО с лицензиями и для тендеров',
  'регистрация фермерских хозяйств',
  'регистрация торговых марок',
  'регистрация бизнеса в европейских юрисдикциях и оффшорных зонах',
  'налоговый и бухгалтерский консалтинг',
  'юридический аудит компаний',
  'разработка договоров под ваши потребности',
  'проверка контрагентов',
  'номинальный сервис',
  'сопровождения в открытии счетов в Украине и в иностранных юрисдикциях',
  'получение разного рода лицензий',
];
const physicalPersonServices = [
  'получение вида на жительство для иностранцев, получение идентификационного кода',
  'подготовка документов для получения виз, правовое сопровождение иммигрантов',
  'аудит недвижимости, сопровождение сделок при купле-продаже недвижимости, а также земельных участков',
];
const ourBenefits = [
  {
    text: 'Многолетний опыт наших сотрудников',
    icon: GroupIcon,
    description:
      'Компания «Лавиант» отличается узкоспециализированыи специалистами с многолетним опытом работы в своих областях деятельности. Заказываю услугу у нас, Вы можете быть уверены что работу выполнят профессионалы',
  },
  {
    text: 'Комплексные решения для бизнеса',
    icon: BussinesIcon,
    description:
      'При сотрудничестве, мы не только выполняем нужную для Вас услугу, но и закрываем Вашу потребность, мы предлагаем индивидуальный подход и решаем Вашу проблему, доступными правовыми инструментами. ',
  },
  {
    text: 'Гарантированное и качественное исполнение наших обязательств',
    icon: ResultsIcon,
    description: 'Мы работаем на выполнение поставленной цели и достижение позитивного результата',
  },
  {
    text: 'Оперативная поддержка в удобном для вас мессенджере',
    icon: SocialIcon,
    description: 'Мы на связи с Вами, всегда и в любой удобной для Вас форме. Всё просто',
  },
  {
    text: 'Быстрое выполнение поставленных задач',
    icon: ClockIcon,
    description:
      'Заказывая услугу, Вы получаете не только качественное исполнение, но и оперативность, которую Вы ожидаете, быстрота для нас важна не меньше, чем качество, как и для Вас',
  },
  {
    text: 'Материальная защита заказчика',
    icon: SaveMoneyIcon,
    description:
      'Мы работаем на договорных основаниях, оплата наших услуг осуществляется по факту выполненной работы, сотрудничая с нами, Вы ничем не рискуете',
  },
  {
    text: 'Работа на основании понятного договора, открытости и доверия',
    icon: PaperIcon,
    description:
      'В наших интересах построить понятные партнерские отношения ради общего развития Вашего бизнеса. Договора, которые мы заключаем с клиентами предельно простые и понятные, мы не пытаемся усложнить Вашу предпринимательскую жизнь, а наоборот – упростить её, в этом наша философия, и договор, который Вы с нами подписываете начало нашего плодородного сотрудничества, и олицетворение нашей философии, как компании, которая упростит Вашу жизнь.',
  },
  {
    text: 'Конфиденциальность при нашем сотрудничестве',
    icon: СonfidentiallyIcon,
    description:
      'Для нас важно, чтобы Вы чувствовали себя защищенными, одни из аспектов защиты является конфиденциальность, которую мы обеспечиваем при сотрудничестве',
  },
  {
    text: 'Адекватная ценовая политика, которая соответствует соотношению цены/качества в предлагаемых нами услугах',
    icon: MoneyIcon,
    description:
      'Вы получаете ровно то, за что Вы платите, ценовая политика компании «Лавиант» отражает ту обоснованную цену, которую Вы отдаете за услугу. Всё просто.',
  },
];
const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={s.homePage}>
      <div className={s.homePage__title}>
        <p>Правовая помощь и Консалтинговые услуги</p>
        <p>
          для <span className={s.linkSpan}>Юридических, Физических</span> лиц и{' '}
          <span className={s.linkSpan}>Нерезидентов</span>
        </p>
      </div>
      <HomePageSlider />
      <div className={s.aboutCompany}>
        <Typography className={classes.paragraph} variant="subtitle1">
          <span className={s.strongSpan}>ООО «ЮК ЛАВИАНТ» </span> — это надежный партнер в правовом сопровождении вашего
          бизнеса. Мы предлагаем комплексное решение для физических и юридических лиц от юридических и налоговых
          консультаций, регистрации бизнеса, получения лицензий до полного абонентского обслуживания, что избавит вас от
          проблем, связанных с деятельностью компании.
          <br />
          Основными сферами нашей деятельности является корпоративное, миграционное и налоговое право.
        </Typography>
        <Typography className={classes.paragraph} variant="subtitle1">
          <span className={s.strongSpan}>Наша цель </span> — помочь вам в регистрации и ведении вашего дела. Мы
          предоставляем юридические услуги в сфере корпоративного права, абонентское и бухгалтерское обслуживание для
          вашего бизнеса, что позволит вам сфокусироваться на самой компании и на ее развитии.
        </Typography>
        <Typography className={classes.paragraph} variant="subtitle1">
          <span className={s.strongSpan}>Мы предоставляем качественные услуги для физических и юридических лиц:</span>
          <ul>
            {allServices.map((text) => (
              <ListItem text={text} Icon={CheckIcon} />
            ))}
          </ul>
        </Typography>

        <Typography className={classes.paragraph} variant="subtitle1">
          <span className={s.strongSpan}>Для физических лиц мы предлагаем следующий перечень услуг:</span>
          <ul>
            {physicalPersonServices.map((text) => (
              <ListItem text={text} Icon={CheckIcon} />
            ))}
          </ul>
        </Typography>
        <span className={cx(s.strongSpan, s.ourBenefitsWrapper__heading)}>В чем наши преимущества?</span>
        <ul className={classes.list}>
          {ourBenefits.map((item) => (
            <OurBenefits
              key={item.heading}
              Icon={item.icon}
              iconClass={item.iconClass}
              heading={item.text}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
