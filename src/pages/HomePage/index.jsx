import React from 'react';
// Material UI
import {Typography, makeStyles} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
// import MenuBookIcon from '@material-ui/icons/MenuBook';
// Component
import cx from 'classnames';
import HomePageSlider from './slider';
import ListItem from './ListItem';
import OurBenefits from './OurBenefitsItem';
import {ReactComponent as GroupIcon} from '../../shared/media/ourBenefits/group.svg';
import {ReactComponent as BussinesIcon} from '../../shared/media/ourBenefits/hand-shake.svg';
import {ReactComponent as ResultsIcon} from '../../shared/media/ourBenefits/results.svg';
import {ReactComponent as SocialIcon} from '../../shared/media/ourBenefits/bullhorn.svg';
import {ReactComponent as ClockIcon} from '../../shared/media/ourBenefits/clock.svg';
import {ReactComponent as SaveMoneyIcon} from '../../shared/media/ourBenefits/hand.svg';
import {ReactComponent as PaperIcon} from '../../shared/media/ourBenefits/gdpr.svg';
import {ReactComponent as СonfidentiallyIcon} from '../../shared/media/ourBenefits/confidentiality.svg';
import {ReactComponent as MoneyIcon} from '../../shared/media/ourBenefits/money.svg';

// Styles
import s from './style.module.scss';

const useStyles = makeStyles(() => ({
  paragraph: {
    marginBottom: '30px',
  },
  list: {
    padding: '0',
  },
}));

const allServices = [
  'регистрация ООО/ФЛП, внесения изменений в ЕГР, регистрация плательщиком НДС/единого налога, ликвидация ФЛП и ООО, внесения ведомостей о конечном бенефициарном владельце, а также другие услуги в сфере корпоративного права',
  'продажа готовых компаний, продажа ООО с лицензиями, и под тендера',
  'регистрация фермерских хозяйств',
  'регистрация торговых марок',
  'регистрация бизнеса в европейских юрисдикциях и офшорных зонах',
  'налоговый и бухгалтерский консалтинг',
  'юридический аудит компаний',
  'разработка договоров под ваши нужды',
  'проверка контрагентов',
  'номинальный сервис',
  'сопровождения в открытии счетов в Украине и в иностранных юрисдикциях',
  'получения разного рода лицензий',
];
const physicalPersonServices = [
  'получения вида на жительство для иностранцев, получения идентификационного кода ',
  'подготовка документов для получения виз, правовое сопровождения иммиграции ',
  'аудит недвижимости, сопровождения сделок при купле-продаже недвижимости, а также земли',
];
const ourBenefits = [
  {text: 'Во-первых, это многолетний опыт наших сотрудников', icon: GroupIcon},
  {text: 'Комплексные решения для бизнеса', icon: BussinesIcon},
  {
    text: 'Гарантированное и качественное исполнения наших обязательств, работа на выполнения поставленной цели и достижения позитивного результата',
    icon: ResultsIcon,
  },
  {text: 'Оперативная поддержка во всех популярных каналах связи', icon: SocialIcon},
  {text: 'Быстрое выполнения поставленных задач', icon: ClockIcon},
  {text: 'Материальная защита заказчика', icon: SaveMoneyIcon},
  {text: 'Работа на основании простого и понятного договора, открытости и доверия', icon: PaperIcon},
  {text: 'Конфиденциальность при нашем сотрудничестве', icon: СonfidentiallyIcon},
  {
    text: 'Адекватная ценовая политика, которая соответствует соотношению цены/качества в предлагаемых нами услугах',
    icon: MoneyIcon,
  },
];

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={s.homePage}>
      <h1 className={s.homePage__title}>
        Правовая помощь и Консалтинговые услуги
        <br /> для <span className={s.linkSpan}>Юридических, Физических</span> лиц и{' '}
        <span className={s.linkSpan}>Нерезидентов</span>
      </h1>
      <HomePageSlider />
      <div className={s.aboutCompany}>
        <Typography className={classes.paragraph} variant="subtitle1">
          <span className={s.strongSpan}>Юридическая компания «ЛАВИАНТ»</span> — это надежный партнер в правовом
          сопровождении вашего бизнеса. Мы предлагаем комплексное решения для физических и юридических лиц от
          юридических и налоговых консультаций, регистрации бизнеса, получения лицензий до полного абонентского
          обслуживания, что избавит вас от ряда проблем, связанных с деятельностью компании.
          <br />
          Основными сферами нашей деятельности является корпоративное, миграционного и налоговое право.
        </Typography>
        <Typography className={classes.paragraph} variant="subtitle1">
          Наша цель состоит в том, чтобы помочь вам в быстро изменчивом правовом поле Украины, избавить вас от головной
          боли, связанной с юридическим и бухгалтерским сопровождениям деятельности, что позволит вам сфокусироваться на
          самой компании, над ее развитием и масштабизацией вашего дела.
        </Typography>
        <Typography className={cx(classes.paragraph, s.ourBenefitsWrapper)} variant="subtitle1">
          <span className={cx(s.strongSpan, s.ourBenefitsWrapper__heading)}>В чем наши преимущества?</span>
          <ul className={classes.list}>
            {ourBenefits.map((item) => (
              <OurBenefits Icon={item.icon} heading={item.text} description="" />
            ))}
          </ul>
        </Typography>
        <Typography className={classes.paragraph} variant="subtitle1">
          <span className={s.strongSpan}>
            Мы предоставляем качественные услуги для физических и юридических лиц такие как:
          </span>
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
      </div>
    </div>
  );
};

export default HomePage;
