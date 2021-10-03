/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useEffect, useRef} from 'react';
import cx from 'classnames';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// Components
import CustomButton from '../../../shared/components/CustomButton';
// Media
import firstFoto from '../../../shared/media/mainPageSlider/ITFoto.jpg';
import secondFoto from '../../../shared/media/mainPageSlider/second.jpg';
import thirdFoto from '../../../shared/media/mainPageSlider/third.jpg';
import fourthFoto from '../../../shared/media/mainPageSlider/fourth.jpg';

// Styles
import styles from './style.module.scss';
import ROUTERS from '../../../core/_consts/routes';

const mainPageServices = [
  {
    name: 'Купить ООО с НДС',
    text: 'Мы предлагаем купить ООО с НДС, на едином налоге, и на общей системе налогообложения. Пустые компании по Вашим запросам, разных годов регистрации',
    foto: thirdFoto,
  },
  {
    name: 'Купить ООО с лицензией на поставку электроэнергии',
    text: 'Одной из ключевых практик, в которой мы работаем - это продажа ООО с лицензией на поставку электроэнергии и газа. У нас вы можете приобрести готовые компании с подключенным рынком электроэнергии. Также, мы предоставляем сопровождение деятельности таких компаний',
    foto: secondFoto,
  },
  {
    name: 'Зарегистрировать ФЛП для IT',
    text: 'Регистрация ФЛП для IT-предпринимателей, подбор КВЕДов, консультирование по поводу налогообложения. Бухгалтерское сопровождение IT бизнеса',
    foto: firstFoto,
  },
  {
    name: 'Получить вид на жительство в Украине',
    text: 'Мы предлагаем услугу для нерезидентов в получении вида на жительство в Украине, как временного, так и постоянного. Также, предоставляем ряд других услуг в сфере миграционного права, таких как: получение индивидуального налогового номера, разрешение на трудоустройство в Украине и так далее',
    foto: fourthFoto,
  },
];

const HomePageSlider = () => {
  const interval = useRef();
  const [active, setActive] = React.useState(0);

  const setInterval = () => {
    interval.current = window.setInterval(() => {
      setActive((prev) => (prev === mainPageServices.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  useEffect(() => {
    setInterval();
    return () => {
      window.clearInterval(interval.current);
    };
  }, []);

  const handleClick = (value) => {
    window.clearInterval(interval.current);
    setActive(value);
    setInterval();
  };

  return (
    <div className={styles.Slider}>
      <div
        className={styles.Slider__arrow}
        onClick={() => handleClick(active === 0 ? mainPageServices.length - 1 : active - 1)}
      >
        <CustomButton Icon={ArrowBackIosIcon} />
      </div>
      <div
        className={cx(styles.Slider__arrow, styles['Slider__arrow-forward'])}
        onClick={() => handleClick(active === mainPageServices.length - 1 ? 0 : active + 1)}
      >
        <CustomButton Icon={ArrowForwardIosIcon} />
      </div>
      {mainPageServices.map((item, index) => (
        <div className={styles.container} key={`${item.name.slice(0, 10)}_${Math.random()}`}>
          <div
            className={cx(styles.wrapper, {
              [styles.active]: index === active,
            })}
          >
            <img src={item.foto} alt="Foto" />
            <div className={styles.wrapper__textWrap}>
              <h1>{item.name}</h1>
            </div>
            <div
              className={styles.content}
              onMouseEnter={() => window.clearInterval(interval.current)}
              onMouseLeave={() => setInterval()}
            >
              <h2 className={styles.content__heading}>{item.name}</h2>
              <p className={styles.content__text}>{item.text}</p>
              <CustomButton classNameBtn={styles.content__button} text="Подробнее" linkUrl={ROUTERS.PUBLICATIONS} />
            </div>
          </div>
        </div>
      ))}
      <div className={styles.Slider__dots}>
        {mainPageServices.map((_, index) => (
          <div
            key={`${_.name}_${Math.random()}`}
            className={cx(styles.Slider__dot, {
              [styles.active]: index === active,
            })}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePageSlider;
