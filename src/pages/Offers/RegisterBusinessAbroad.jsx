import {useMemo} from 'react';
import {Typography, makeStyles} from '@material-ui/core';
import PageWrapper from '../../shared/components/PageWrapper';
import ROUTERS from '../../core/_consts/routes';
import OffersWrapper from './OffersWrapper';

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

const RegisterBusinessAbroad = () => {
  const breadCrubmsRoutes = useMemo(
    () => [
      {title: 'Главная', route: ROUTERS.HOME},
      {title: 'Регистрация бизнеса в инностранных юрисдикциях', route: ROUTERS.REGITER_BUSINESS_ABROAD},
    ],
    []
  );
  const classes = useStyles();

  return (
    //   <Typography className={classes.paragraph} variant="subtitle1">
    //   <ul className={classes.list}>
    //     <li className={classes.listitem}>111</li>
    // </ul>
    // </Typography>

    <div className="offer">
      <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="Регистрация бизнеса в инностранных юрисдикциях">
        <OffersWrapper>
          <div className="offer__description">
            <Typography className={classes.paragraph} variant="subtitle1">
              Процесс создания бизнеса в любой иностранной юрисдикции невозможен без сопровождения юристов. Это
              необходимо для определения необходимой юрисдикции и рода деятельности Вашего бизнеса, и для других
              вопросов, с которыми Вам нужно будет столкнуться перед началом открытия бизнеса в иностранной юрисдикции.
              Также, не стоит забывать о том, что компания в другой стране — это не только новые возможности, но и
              обязанности, которые лягут на Вас, как на собственника бизнеса. Поэтому к вопросу создания компании стоит
              относиться с максимальной ответственностью.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Самое популярное и оптимальное решение для ведения малого и среднего бизнеса вне зависимости от юрисдикции
              — регистрация компании за границей в организационно-правовой форме общества с ограниченной
              ответственностью (ООО, названия в других странах: LTD, GmbH, SARL и т.д.). Требования законодательства
              разных стран к регистрации иностранных предприятий, количеству основателей, размеру уставного капитала,
              резидентству директора, ведению бухгалтерского учета могут отличаться, но суть общества с ограниченной
              ответственостью универсальна.
            </Typography>
            <Typography className={classes.strongSpan} variant="subtitle1">
              Где лучше всего открыть фирму за рубежом?
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Не менее важным, а иногда и решающим аспектом, от которого зависит регистрация иностранных компаний,
              является выбор юрисдикции для регистрации компании. Как зарегистрировать международную компанию и где
              лучше открыть фирму за границей – неразрывно связанные вопросы.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Регистрация иностранных предприятий требует учета нескольких аспектов:
              <ul className={classes.list}>
                <li className={classes.listitem}>
                  вид деятельности (разработка ІТ-продуктов, игорный бизнес, предоставление информационных услуг,
                  инвестиционный бизнес);
                </li>
                <li className={classes.listitem}>
                  где будет осуществляться деятельность и где находятся основные клиенты/потребители;
                </li>
                <li className={classes.listitem}>
                  с каким государством у основателей есть фактические экономические и деловые связи (для соответствия
                  требований KYC и других проверок);
                </li>
                <li className={classes.listitem}>политическая, экономическая и правовая стабильность страны;</li>
                <li className={classes.listitem}>
                  респектабельность юрисдикции, где планируется регистрация иностранных компаний;
                </li>
                <li className={classes.listitem}>
                  система налогообложения, ставки корпоративного налога, НДС, налога на выведенный капитал, возможность
                  избежать двойного налогообложения с другими странами;
                </li>
                <li className={classes.listitem}>
                  формы ведения бизнеса в стране, в которой планируется открытие компаний за рубежом, размер уставного
                  капитала, состав участников компании (физические, юридические лица), особенности бухгалтерского учета
                  и финансовой отчетности, стоимость обслуживания операционной деятельности.
                </li>
              </ul>
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Мы поможем подбирать оптимальную юрисдикцию под Ваши запросы и зарегистрируем Ваш бизнес. Мы предлагаем
              два варианта этой услуги: первый, в котором вы будете выступать прямым собственником бизнеса, второй будет
              основываться на номинальных учредителях и директорах, в стране, где Вы планируете открывать компанию.
              Каждый из вариантов имеет свои плюсы и минусы, но выбирать нужно индивидуально. В любом случае, мы
              предоставим Вам услуги высшего уровня. Мы можем предложить зарегистрировать компанию в более чем 30
              юрисдикциях. Во всех странах у нас есть партнеры на месте.
            </Typography>
          </div>
        </OffersWrapper>
      </PageWrapper>
    </div>
  );
};

export default RegisterBusinessAbroad;
