import React, {useMemo} from 'react';
// Componets
import ContentWrapper from '../../shared/components/ContentWrapper';
import Post from './Post';
// Style
import s from './style.module.scss';

const Publications = () => {
  const posts = useMemo(() =>
    Array(4)
      .fill(null)
      .map((_, index) => index)
  );

  return (
    <ContentWrapper headerName="Публикации">
      <div className={s.publications__wrapper}>
        <div className={s.publications__row}>
          {posts.map((item) => (
            <Post key={item} />
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Publications;
