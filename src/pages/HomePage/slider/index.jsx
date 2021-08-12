/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useEffect, useRef} from 'react';
import cx from 'classnames';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// Components
import CustomButton from '../../../shared/components/CustomButton';
// Media
import firstFoto from '../../../shared/media/mainPageSlider/first.jpg';
import secondFoto from '../../../shared/media/mainPageSlider/second.jpg';
import thirdFoto from '../../../shared/media/mainPageSlider/third.jpg';
// Styles
import styles from './style.module.scss';
import ROUTERS from '../../../core/_consts/routes';

const letsgo = [
  {
    name: 'Регистрация бизнеса',
    text: 'Регистрация бизнеса в инностраный юрисдикциях Регистрация бизнеса в инностраный юрисдикциях Регистрация бизнеса в инностраный юрисдикциях Регистрация бизнеса в инностраный юрисдикциях',
    foto: firstFoto,
  },
  {
    name: 'Регистрация бизнеса в инностраный юрисдикциях',
    text: 'Регистрация бизнеса в инностраный юрисдикциях Регистрация бизнеса в инностраный юрисдикциях Регистрация бизнеса в инностраный юрисдикциях',
    foto: secondFoto,
  },
  {
    name: 'Регистрация торговых марок',
    text: 'Регистрация бизнеса в инностраный юрисдикциях юрисдикциях Регистрация бизнеса в инностраный юрисдикциях',
    foto: thirdFoto,
  },
  {
    name: 'Регистрация торговых марок',
    text: 'Регистрация бизнеса в инностраный юрисдикциях юрисдикциях Регистрация бизнеса в инностраный юрисдикциях',
    foto: thirdFoto,
  },
];

const HomePageSlider = () => {
  const interval = useRef();
  const [active, setActive] = React.useState(0);

  const setInterval = () => {
    interval.current = window.setInterval(() => {
      setActive((prev) => (prev === letsgo.length - 1 ? 0 : prev + 1));
    }, 555000);
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
      <div className={styles.Slider__arrow} onClick={() => handleClick(active === 0 ? letsgo.length - 1 : active - 1)}>
        <CustomButton Icon={ArrowBackIosIcon} />
      </div>

      {letsgo.map((item, index) => (
        <div className={styles.container}>
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
      <div
        className={cx(styles.Slider__arrow, styles['Slider__arrow-forward'])}
        onClick={() => handleClick(active === letsgo.length - 1 ? 0 : active + 1)}
      >
        <CustomButton Icon={ArrowForwardIosIcon} />
      </div>
      <div className={styles.Slider__dots}>
        {letsgo.map((_, index) => (
          <div
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
