import {useMemo} from 'react';
import {Typography, makeStyles} from '@material-ui/core';
import PageWrapper from '../../shared/components/PageWrapper';
import ROUTERS from '../../core/_consts/routes';
import OffersWrapper from './OffersWrapper';
import foto from '../../shared/media/Offers/BuyCompany.jpg';

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

const prices = [{cost: 'от 2000 грн', offerType: ''}];

const BuyCompany = () => {
  const breadCrubmsRoutes = useMemo(
    () => [
      {title: 'Главная', route: ROUTERS.HOME},
      {title: 'Купить компанию', route: ROUTERS.BUY_COMPANY},
    ],
    []
  );

  const classes = useStyles();

  return (
    <div className="offer">
      <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="Купить компанию">
        <OffersWrapper prices={prices} foto={foto}>
          <div className="offer__description">
            <Typography className={classes.paragraph} variant="subtitle1">
              Часто компания нужна как можно быстрее и нет времени ждать, пока будет проведена регистрация, получен
              статус плательщика НДС или единого налога.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              В этом случае лучше купить готовое ООО (ТОВ)
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              ЮК ЛАВИАНТ предлагает готовые компании разных годов регистрации под Ваши запросы, наапример для участия в
              тендерах. Покупка готовой компании экономит Ваше время, и всего через два дня у вас будет работоспособное
              предприятие, которое будет готово к деятельности.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Мы предлагаем ООО высокого качества, зарегистрированные на немассовых учредителей, также компании с
              регистрацией от полугода, что особенно важно для тендерной деятельности.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              ООО которые мы предоставляем:
              <ul className={classes.list}>
                <li className={classes.listitem}>
                  не являются должниками по уплате налогов и сборов в государственный бюджет;
                </li>
                <li className={classes.listitem}>не являются должниками перед контрагентами;</li>
                <li className={classes.listitem}>
                  не фигурируют как сторона уголовных, административных, хозяйственных и прочих споров;
                </li>
                <li className={classes.listitem}>
                  не внесены в реестр должников и по ним нет открытых исполнительных производств;
                </li>
                <li className={classes.listitem}>
                  банковские счета и прочие активы фирмы не арестованы и не находятся в залоге;
                </li>
                <li className={classes.listitem}>
                  руководитель компании не имеет непогашенной или не снятой судимости за финансовые преступления.{' '}
                </li>
              </ul>
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Компании проверенные, не проблемные и с поданной отчетностью, без открытых счетов. В наличии есть компании
              с НДС, на общей системе налогообложения, а также компании с единым налогом 3 группы.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Также, к покупке мы предлагаем компании с полученными лицензиями, например, у нас Вы можете приобрести ООО
              с лицензией на:
              <ul className={classes.list}>
                <li className={classes.listitem}>Поставку электроэнергии </li>
                <li className={classes.listitem}>Поставку газа</li>
              </ul>
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Также, у нас есть готовые компании с лицензией на охранную деятельность, со строительной лицензией и так
              далее.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Купить фирму с лицензией — это реальный оптимизационный ресурс в плане времени и денег для запуска своего
              бизнес-проекта. Всегда проще и быстрее купить готовое лицензированное предприятие, чем регистрировать и
              развивать бизнес со дня его основания.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Процесс купли-продажи компании полностью сопровождается нами, от первичной консультации, составления
              документов для покупки до сопровождения сделки у нотариуса и получения Вами пакета документов, с которым
              Вы можете начать деятельность и открыть счет в банке.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              {' '}
              Стоимость покупки компании будет составлять от 2500 грн., стоимость компаний с лицензиями предоставляется
              по запросу.
            </Typography>
          </div>
        </OffersWrapper>
      </PageWrapper>
    </div>
  );
};

export default BuyCompany;
