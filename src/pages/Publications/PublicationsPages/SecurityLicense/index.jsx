import React from 'react';
import {Typography, makeStyles} from '@material-ui/core';
import foto from '../../../../shared/media/Publications/SecurityLicense.jpg';
import ROUTERS from '../../../../core/_consts/routes';
// Components
import Article from '../../Article';

// Material UI
// Media

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
}));

const breadCrumbsRoutes = [
  {title: 'Главная', route: ROUTERS.HOME},
  {title: 'Публикации', route: ROUTERS.PUBLICATIONS},
  {
    title: 'Процесс получения лицензии на охранную деятельность',
    route: ROUTERS.ARTICLE,
  },
];

const SecurityLicense = () => {
  const classes = useStyles();

  return (
    <Article
      PageTitle="Процесс получения лицензии на охранную деятельность"
      foto={foto}
      breadCrumbsRoutes={breadCrumbsRoutes}
    >
      <Typography className={classes.paragraph} variant="subtitle1">
        Процесс получения лицензии на охранную деятельность достаточно продолжительный, трудоемкий и не всегда приводит
        к желаемому результату. В данной статье мы рассмотрим основные вопросы, которые касаются охранной деятельности,
        лицензии, требований к лицензиату, перечень необходимых документов и прочее.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Во-первых, кому же нужна лицензия на охранную деятельность? Ответ тут прост: тем, кто хочет заниматься такой
        деятельностью полностью легально, что и предоставляет лицензия на охрану от Министерства внутренних дел. С
        момента получения, вы можете законно предоставлять свои услуги на рынок, контрагенты будут более охотно работать
        с лицом, которое имеет сертификацию в охранной сфере, а также вам не смогут выписать штраф за деятельность в
        охранной сфере в размере от 17 до 34 тис. гривен. Также, не стоит забывать, что на тендерных площадках
        предоставлено большое количество предложений, касающихся охранных услуг, и участвовать в таких тендерах могут
        только компании, которые имеют лицензию на осуществления охранной деятельности.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Что же нужно для того, чтобы получить лицензию на охрану?
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Полный пакет документов для лицензиата достаточно обширен, в него входят: выписка из Единого государственного
        реестра, копии устава, договор аренды помещения, информация о квалификации ответственного за направление
        охранной деятельности, которая должна отвечать требованиям, установленными законом, банковские реквизиты,
        справки об отсутствии судимости в учредителя, директора, бухгалтера, ответственного за охранную деятельность и
        так далее.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Данный пакет документов подаётся в Министерство внутренних дел, в котором комиссия изучает предоставленную
        информацию и в течении 20-40 дней дает заключения о предоставлении субъекту хозяйствования позитивного решения,
        или же укажет на недостатки, которые нужно будет устранить для получения лицензии на охранную деятельность.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Если вы ищете способ, как максимально быстро и результативно получить лицензию на охранную деятельность,
        сэкономить время, и получить то, что вы ожидаете, без лишних усилий, ООО «ЮК ЛАВИАНТ» поможет вам с этим. Мы
        предоставляем на продажу ТОВ с лицензией на охранную деятельность, а также другие компании с лицензиями.
      </Typography>
    </Article>
  );
};

export default SecurityLicense;
