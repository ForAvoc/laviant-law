import {useMemo} from 'react';
import {Typography, makeStyles} from '@material-ui/core';
import PageWrapper from '../../shared/components/PageWrapper';
import ROUTERS from '../../core/_consts/routes';
import OffersWrapper from './OffersWrapper';
import foto from '../../shared/media/Offers/GetLicense.jpg';

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

const prices = [
  {cost: 'от 5000 грн', offerType: 'охранная'},
  {cost: 'от 1500$', offerType: 'строительная'},
  {cost: 'от 20 000 грн', offerType: 'на поставку электроэнергии/газа'},
  {cost: 'от 2500 грн', offerType: 'на розничную торговлю алкоголем/табачными изделиями'},
];

const GetLicense = () => {
  const breadCrubmsRoutes = useMemo(
    () => [
      {title: 'Главная', route: ROUTERS.HOME},
      {title: 'Получить лицензию', route: ROUTERS.GET_LICENSE},
    ],
    []
  );
  const classes = useStyles();

  return (
    <div className="offer">
      <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="Получить лицензию">
        <OffersWrapper prices={prices} foto={foto}>
          <div className="offer__description">
            <Typography className={classes.paragraph} variant="subtitle1">
              Законодательством Украины предусмотрено обязательное лицензирование отдельных видов деятельности субъектов
              хозяйствования. Периодически в перечень видов хозяйственной деятельности, требующей получения специальных
              разрешений, вносятся изменения и дополнения. Поэтому предпринимателям до начала ведения деятельности, а
              также в процессе ее осуществления, следует изучить данный вопрос.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Наша юридическая компания предоставит профессиональное сопровождение получения разрешительной
              документации. Мы сделаем всё оперативно и при минимальном вашем участии.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Существует ряд видов деятельности, для которых нужно получения лицензии. Лицензия на право деятельности,
              предусмотренной в ЗУ “О лицензировании определенных видов хозяйственной деятельности”, предоставляется
              лишь при условии соблюдения установленных лицензионных условий. Зачастую эти требования касаются
              материально-технической и нормативно-правовой базы, а также кадрового состава. Следует учитывать, что
              соответствие данным лицензионным требованиям необходимо подтверждать документально, что существенно
              отражается на объеме необходимого пакета документов.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Мы предлагаем услуги в получении лицензий следующих видов:
              <ul className={classes.list}>
                <li className={classes.listitem}>Строительная лицензия СС2 и СС3</li>
                <li className={classes.listitem}>Лицензия на розничную и оптовую продажу топлива</li>
                <li className={classes.listitem}>
                  Лицензия на розничную и оптовую продажу алкоголя и табачных изделий
                </li>
                <li className={classes.listitem}>Лицензия на поставку электроэнергии и газа</li>
                <li className={classes.listitem}>Лицензия на ветеринарную практику</li>
                <li className={classes.listitem}>Лицензия на трудоустройство за границей </li>
                <li className={classes.listitem}>Охранная лицензия </li>
                <li className={classes.listitem}>Лицензия на пассажирские перевозки</li>
                <li className={classes.listitem}>Лицензия на аптечную деятельность</li>
              </ul>
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Получение лицензии - достаточно длительный и трудоемкий процесс, который может длиться от нескольких
              недель до нескольких месяцев, в зависимости от их вида, чтобы получить возможность заняться бизнесом как
              можно быстрее вы можете приобрести готовую компанию с интересующей вас лицензией, в наличии всегда есть
              соответствующие предприятия.
            </Typography>
          </div>
        </OffersWrapper>
      </PageWrapper>
    </div>
  );
};

export default GetLicense;
