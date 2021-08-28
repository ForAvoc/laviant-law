import React from 'react';
// Material UI
import {Typography, makeStyles} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
// Component
import {Link} from 'react-router-dom';
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
import ROUTERS from '../../core/_consts/routes';
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
  {text: 'Многолетний опыт наших сотрудников', icon: GroupIcon},
  {text: 'Комплексные решения для бизнеса', icon: BussinesIcon},
  {
    text: 'Гарантированное и качественное исполнение наших обязательств, работа на выполнение поставленной цели и достижение позитивного результата',
    icon: ResultsIcon,
  },
  {text: 'Оперативная поддержка в удобном для вас мессенджере', icon: SocialIcon},
  {text: 'Быстрое выполнение поставленных задач', icon: ClockIcon},
  {text: 'Материальная защита заказчика', icon: SaveMoneyIcon},
  {text: 'Работа на основании понятного договора, открытости и доверия', icon: PaperIcon},
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
      <div className={s.homePage__title}>
        <p>Правовая помощь и Консалтинговые услуги</p>
        <p>
          для{' '}
          <Link to={ROUTERS.PUBLICATIONS} className={s.linkSpan}>
            Юридических, Физических
          </Link>{' '}
          лиц и{' '}
          <Link to={ROUTERS.CHANGE_EDR} className={s.linkSpan}>
            Нерезидентов
          </Link>
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
            <OurBenefits Icon={item.icon} heading={item.text} description="" />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
