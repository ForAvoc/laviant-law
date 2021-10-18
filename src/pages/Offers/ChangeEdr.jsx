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

const ChangeEdr = () => {
  const breadCrubmsRoutes = useMemo(
    () => [
      {title: 'Главная', route: ROUTERS.HOME},
      {title: 'Внесения изменений в ЕДР', route: ROUTERS.TEST},
    ],
    []
  );
  const classes = useStyles();

  return (
    <div className="offer">
      <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="Внесение изменений в Единый государственный реестр">
        <OffersWrapper>
          <div className="offer__description">
            <Typography className={classes.paragraph} variant="subtitle1">
              Перерегистрация подразумевает под собой набор юридических действий, необходимый для изменения тех или иных
              данных юридического лица. У Вашей фирмы может возникнуть такая необходимость, ведь большинство компаний
              периодически меняет вид деятельности, адрес, уставной фонд и так далее. Например, может понадобиться
              вторичная регистрация устава ООО (ТОВ), замена руководителя или изменения юридического адреса – все эти
              действия называют перерегистрацией или внесением изменений в существующие данные.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Наша компания предлагает полный спектр услуг в сфере изменения информации юридических и физических лиц
              предпринимателей.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              <span className={classes.strongSpan}>Мы предлагаем:</span>
              <ul className={classes.list}>
                <li className={classes.listitem}>изменение наименования юрлица;</li>
                <li className={classes.listitem}>
                  изменение размера уставного (составленного) капитала. Сменить уставной капитал ООО: увеличить или
                  уменьшить;
                </li>
                <li className={classes.listitem}>изменение местонахождения юрлица (юридический адрес фирмы);</li>
                <li className={classes.listitem}>изменение учредительных документов (устава фирмы);</li>
                <li className={classes.listitem}>изменение органов управления (высший, исполнительный);</li>
                <li className={classes.listitem}>
                  изменение руководителя или сведений о руководителе (смена директора);
                </li>
                <li className={classes.listitem}>
                  изменение лица, который может совершать действия от имени юридического лица, или сведений о таком лице
                  (смена подписанта, представителя);
                </li>
                <li className={classes.listitem}>
                  смена учредителей (участников, владельцев, собственников) или сведений о таких лицах;
                </li>
                <li className={classes.listitem}>
                  смена конечного бенефициарного владельца (собственника) юридического лица или сведений о таком
                  владельце;
                </li>
                <li className={classes.listitem}>создание и подача структуры собственности бизнеса</li>
                <li className={classes.listitem}>внесение изменений в устав компании;</li>
                <li className={classes.listitem}>
                  изменение видов экономической деятельности (смена КВЕДов: удаление, добавление, изменение);
                </li>
                <li className={classes.listitem}>
                  изменение контактной информации для связи с компанией (телефон, e-mail);
                </li>
                <li className={classes.listitem}>внесение сведений о правопреемника (в случае выделения);</li>
                <li className={classes.listitem}>
                  переход на деятельность на основании модельного устава (согласно Постановлению Кабинета Министров
                  Украины № 367 «Некоторые вопросы дерегуляции хозяйственной деятельности»);
                </li>
                <li className={classes.listitem}>
                  переход из модельного устава на деятельность на основании собственного учредительного документа
                  (устава фирмы);
                </li>
                <li className={classes.listitem}>
                  внесение сведений о юридическом лице, правопреемником которого является юридическое лицо (в случае
                  присоединения);
                </li>
                <li className={classes.listitem}>
                  изменение государственного органа, к сфере управления которого относится юридическое лицо публичного
                  права.
                </li>
              </ul>
            </Typography>
            <Typography className={classes.strongSpan} variant="subtitle1">
              Дальше мы опишем самые популярные среди наших клиентов запросы по проведению изменений в юридических
              лицах.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              <span className={classes.strongSpan}>Смена директора предприятия</span>требует, в первую очередь,
              соответствующего решения учредителей и государственной ее регистрации. Для внесения изменений необходимо
              обратиться к регистратору.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              <span className={classes.strongSpan}>Регистрация смены </span>директора пройдет оперативно, если собрать
              полный пакет необходимых документов:
              <ul className={classes.list}>
                <li className={classes.listitem}>протокол с принятым решением относительно смены управления;</li>
                <li className={classes.listitem}>
                  изначальная версия устава предприятия и его новая редакция (изменения обязательны в случае, если в
                  документе указано ФИО директора);
                </li>
                <li className={classes.listitem}>копии паспорта и налогового номера нового директора;</li>
                <li className={classes.listitem}>
                  подтверждение полномочий представителя при подаче документов (доверенность или решение, в котором
                  подтверждается смена директора ООО).
                </li>
              </ul>
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              <span className={classes.strongSpan}>
                Изменение состава участников юридического лица и его регистрация Смена участника ООО{' '}
              </span>
              требует предоставление государственному регистратору следующих документов:
              <ul className={classes.list}>
                <li className={classes.listitem}>
                  документ, подтверждающий его выход и передачу доли в капитале. Это может быть заявление о выходе
                  (обязательно нотариальное заверение), договор о продаже своих активов, решение о выходе из состава
                  участников юридического лица. Также причиной может быть вход в состав нового участника. В любом
                  случае, это информация, которая требует регистрации;
                </li>
                <li className={classes.listitem}>изначальная версия устава предприятия и его новая редакция;</li>
                <li className={classes.listitem}>протокол собрания с соответствующим решением;</li>
                <li className={classes.listitem}>
                  подтверждение полномочий представителя при подаче документов (доверенность).
                </li>
                <li className={classes.listitem}>
                  <span className={classes.strongSpan}>
                    Государственная регистрация изменения юридического адреса предприятия
                  </span>
                </li>
              </ul>
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              <span className={classes.strongSpan}>Смена юридического адреса </span> означает изменение местонахождения
              предприятия. Причины этого могут быть разные. Но, если при смене руководства не всегда нужно изменять
              учредительные документы, то меняя юридический адрес, зафиксировать изменения придется обязательно.
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              <span className={classes.strongSpan}>Изменение юридического адреса предприятия </span> требует наличия
              следующих документов:
              <ul className={classes.list}>
                <li className={classes.listitem}>старая и новая редакции Устава;</li>
                <li className={classes.listitem}>новый договор аренды;</li>
                <li className={classes.listitem}>
                  подтверждение полномочий представителя при подаче документов (нотариально заверенная доверенность).
                </li>
              </ul>
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              <span className={classes.strongSpan}>Смена юридического адреса ООО </span> проходит в довольно оперативные
              сроки, если речь не идет о смене населенного пункта, или в случае смены районов в пределах одного города.
            </Typography>
            <Typography className={classes.strongSpan} variant="subtitle1">
              Регистрация изменения видов деятельности предприятия
            </Typography>
            <Typography className={classes.paragraph} variant="subtitle1">
              Государственной регистрации также подлежит изменение видов деятельности. Она происходит при необходимости
              расширить или изменить перечень видов и требует наличия следующих документов:
              <ul className={classes.list}>
                <li className={classes.listitem}>копия Выписки из ЕГР;</li>
                <li className={classes.listitem}>информация о новых видах деятельности;</li>
                <li className={classes.listitem}>
                  подтверждение полномочий представителя при подаче документов (доверенность или решение о назначение
                  директора).
                </li>
              </ul>
            </Typography>

            <Typography className={classes.paragraph} variant="subtitle1">
              Что касается стоимости услуг по перерегистрации предприятия, то оно зависит от того, что именно Вам нужно,
              обычно стоимость изменения составляет в среднем 500 гривен, дополнительно нужно заплатить административный
              сбор. Также, может появиться необходимость оплатить нотариальные услуги.
            </Typography>
          </div>
        </OffersWrapper>
      </PageWrapper>
    </div>
  );
};

export default ChangeEdr;
