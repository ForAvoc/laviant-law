import React from 'react';
import {Typography, makeStyles} from '@material-ui/core';
import foto from '../../../../shared/media/Publications/TaxEResidency.jpeg';

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
    title: 'Cтатус налогового е-резидентства',
    route: ROUTERS.ARTICLE,
  },
];

const TaxEResidency = () => {
  const classes = useStyles();

  return (
    <Article PageTitle="Cтатус налогового е-резидентства" foto={foto} breadCrumbsRoutes={breadCrumbsRoutes}>
      <Typography className={classes.paragraph} variant="subtitle1">
        Украина развивает благоприятную экосистему для IТ-предпринимателей, одной из инноваций, направленных на
        улучшения климата для предпринимателей со всего мира стало принятия Верховным Советом Украины закона про
        «е-резидентство».
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Как и в случае платформы Дия Сити, Украинский законодатель имплементировал зарубежный опыт, такой, как,
        например, е-резидентство, реализованное в Эстонии. Эта система была реализована первой в мире, и на сегодня
        имеет порядка 80 тысяч е-резидентов, а за шесть лет работы они создали больше 16 тысяч компаний и принесли в
        бюджет страны 54 миллиона евро.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Что касается Украины, то по подсчетам, проект ежегодно будет приносить 1.5 миллиона долларов США.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Целью создания является оптимизация налоговой системы Украины и создание более привлекательной среды для
        IT-сектора, которое будет реализовано посредством простой и удобной системы налогообложения. IT-предприниматели
        со всего мира смогут получить прозрачные условия ведения своей деятельности, комфортное налогообложение, смогут
        вести деятельность без привязки к Украине и платить налоги дистанционно, так как все нужные услуги можно
        получить онлайн.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Так что же такое е-резидентство. Закон о е-резидентстве обеспечивает иностранцам и лицам без гражданства
        возможность работать в IT-сфере и платить налоги без физического присутствия в Украине.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Его задача — урегулировать механизмы налогообложения е-резидентов и предоставить им определенные возможности:
        <ul className={classes.list}>
          <li className={classes.listitem}>дистанционную регистрацию е-резидента как физлица-предпринимателя;</li>
          <li className={classes.listitem}>ведение предпринимательской деятельности в юрисдикции Украины;</li>
          <li className={classes.listitem}>открытие банковских счетов онлайн;</li>
          <li className={classes.listitem}>
            доступ к административным услугам с квалифицированной электронной подписью;
          </li>
        </ul>
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Согласно законодателю, электронный резидент(е-резидент) – это иностранец, или человек без гражданства, который
        достиг 18 лет и приобрел статус электронного резидента, получил соответствующие услуги, в том числе
        квалификационный электронную подпись, а информация о таком лице внесена в информационную систему «Е-резидент».
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        В дальнейшем, е-резидент может зарегистрироваться как е-резидент-предприниматель, на основании заявления,
        которое подается онлайн. Форма ведения хозяйственной деятельности такого субъекта будет как физическое лицо
        предприниматель(ФЛП), а налогообложение возможно только в форме упрощенной системы на едином налоге 3 группы,
        ставка по которому 5%, без возможности становиться плательщиком НДС.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Важной особенностью является то, что ФЛП е-резидент, могут работать только по 5 КВЕДам, а именно: 58.21, 58.29,
        62.01, 62.09, 63.11, что отвечает таким видам деятельности как разработка компьютерных игр, программного
        обеспечения, деятельность в сфере информационных технологий или обработки данных. Можно с уверенностью сказать,
        что это не ограничения, так как именно такие виды деятельности зачастую выбираются украинскими IT-ФЛП. В случае
        выбора иного КВЕДа, пользоваться статусом не получится. Что касается других особенностей, то e-резидент не
        вправе использовать труд наемных сотрудников. Также e-резидент может открывать счет только в одном украинском
        банке.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Как же получить статус электронного резидента в Украине?
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Статус е-резидента можно получить бесплатно, алгоритм достаточно прост, но требует определенный уровень знаний.
        Первое, что нужно сделать это заполнить заявления на сайте Дия, после этого оно будет принято в работу МВД и
        СБУ, и в случае положительного ответа, за будущим предпринимателем резервируют индивидуальный налоговый номер.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Следующим этапом будет приглашение в украинское консульство, в стране заявителя, которое пройдёт посредством
        портала Дия. Нужно будет лично явиться в консульство вместе с паспортом и таким образом верифицировать себя для
        платформы. После успешного прохождения данного этапа, информацию о прохождения идентификации будет внесено в
        систему, и на основании этого, возможно сгенерировать квалификационную электронную подпись(КЭП) и получить
        индивидуальный налоговый номер.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Что касается, нюансов, которые могут возникнуть в процессе получения статуса e-резидента, то в первую очередь
        это необходимость в адресе, аналогично обычному украинскому ФЛП, она нужна для установления места деятельности и
        ведения официальной переписки. В случае обычного физического лица предпринимателя в Украине используется адрес
        прописки. В законопроекте №5270 указано, что налоговым адресом для е-резидента может быть место пребывания
        регистратора. А официальным регистратором является государственное предприятие «Дія».
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Если вы хотите получить статус налогового е-резидентства, или у вас возникают дополнительные вопросы по поводу
        e-резидента лучше обращаться к специалистам в сфере налогового права, которые помогут в его получении и
        дополнительно помогут разобраться со всеми сопутствующими вопросами.
      </Typography>
    </Article>
  );
};

export default TaxEResidency;