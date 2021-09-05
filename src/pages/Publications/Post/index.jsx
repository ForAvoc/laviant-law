import React from 'react';
import ROUTERS from '../../../core/_consts/routes';
import CustomButton from '../../../shared/components/CustomButton';
// Components

import {ReactComponent as LogoIcon} from '../../../shared/media/Logo.svg';
// style
import s from './style.module.scss';
// Material UI

const Post = ({data}) => {
  const handleClick = () => {
    //
  };
  return (
    <div className={s.post}>
      <div className={s.post__container}>
        <div className={s.post__content}>
          <div className={s.post__image}>
            <img
              className={s.post__image__img}
              alt="123123"
              src="https://links-stream.ru/assets/media/packs/business.jpg"
            />
            <LogoIcon className={s.post__image__LogoIcon} />

            <time className={s.post__image__Post_time}>20.04.21</time>
          </div>
          <div className={s.content}>
            <h3 className={s.content__heading}>Zagolovok helouuuuuu</h3>
            <p className={s.content__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate maxime dolore consectetur totam
              aperiam nam quo incidunt. Qui, sequi suscipit! Porro nisi unde quidem ea. Ad, maiores? Praesentium,
              perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate maxime dolore
              consectetur totam aperiam nam quo incidunt. Qui, sequi suscipit! Porro nisi unde quidem ea. Ad, maiores?
              Praesentium, perspiciatis.
            </p>
          </div>
          <div className={s.content__button}>
            <CustomButton linkUrl={data.route} text="Подробнее" onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
