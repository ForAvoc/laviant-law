import React, {useMemo} from 'react';
// Componets
import ROUTERS from '../../core/_consts/routes';
import PageWrapper from '../../shared/components/PageWrapper';
import Post from './Post';

// Style
import s from './style.module.scss';

const Publications = () => {
  const posts = useMemo(() => [
    {title: 'Default', route: ROUTERS.ARTICLE, image: '', description: ''},
    {title: 'Default', route: ROUTERS.ARTICLE, image: '', description: ''},
    {title: 'Default', route: ROUTERS.ARTICLE, image: '', description: ''},
    {title: 'Default', route: ROUTERS.ARTICLE, image: '', description: ''},
  ]);

  const breadCrubmsRoutes = useMemo(
    () => [
      {title: 'Главная', route: ROUTERS.HOME},
      {title: 'Публикации', route: ROUTERS.PUBLICATIONS},
    ],
    []
  );

  return (
    <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="Публикации">
      <div className={s.publications__wrapper}>
        <div className={s.publications__row}>
          {posts.map((item) => (
            <Post key={item.title} data={item} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Publications;
