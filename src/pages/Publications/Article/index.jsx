import React from 'react';
// Material UI
import {Button, makeStyles, Link} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import cx from 'classnames';
// Styles
import s from './style.module.scss';
// Components
import PageWrapper from '../../../shared/components/PageWrapper';
import Banner from '../../../shared/components/Banner';

const useStyles = makeStyles(() => ({
  socialItem: {
    backgroundColor: 'transparent',
    fontSize: '35px',
    cursor: 'pointer',
    transition: 'color .3s',
    '&:hover': {
      color: 'gray',
    },
  },
  twitter: {
    color: '#1c9cea',
  },
  facebook: {
    color: '#1773ea',
  },
  button: {
    padding: '15px 20px',
  },
}));

const Article = ({children, PageTitle, foto, breadCrumbsRoutes}) => {
  const classes = useStyles();
  return (
    <PageWrapper pageTitle={PageTitle} breadCrumbsRoutes={breadCrumbsRoutes}>
      <div className={s.article}>
        <div className={s.article__wrapper}>
          <div className={s.article__imgWraper}>
            <img
              className={s.article__imgWraper__img}
              src={
                foto ||
                'https://sblaw.vn/wp-content/uploads/2016/06/incorporating-a-foreign-invested-logistic-company-in-vietnam.jpg'
              }
              alt="123123"
            />
            <time className={s.article__imgWraper__time}>19.08.21</time>
          </div>
          <div className={s.article__content}>{children}</div>
          <div className={s.footer}>
            <Banner />
          </div>
          <p>Если статья была Вам полезна, Вы можете поделиться ею:</p>
          <div className={s.footer__social}>
            <Button
              component={Link}
              target="_blank"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
              rel="noreferrer"
            >
              <FacebookIcon className={cx(classes.socialItem, classes.facebook)} />
            </Button>
            <Button
              component={Link}
              target="_blank"
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              className="twitter-share-button"
              data-show-count="false"
            >
              <TwitterIcon className={cx(classes.socialItem, classes.twitter)} />
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Article;
