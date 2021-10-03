import React from 'react';
import {Typography, makeStyles} from '@material-ui/core';
import foto from '../../../../shared/media/Publications/TaxationOOO.jpg';
import table1 from '../../../../shared/media/Publications/TaxationOOO-table1.jpg';
import table2 from '../../../../shared/media/Publications/TaxationOOO-table2.jpg';
import ROUTERS from '../../../../core/_consts/routes';
import Article from '../../Article';

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
  table: {
    display: 'flex',
    maxWidth: '700px',
    marginBottom: '30px',
  },
  tableImg: {
    width: '100%',
    objectFit: 'cover',
  },
}));

const breadCrumbsRoutes = [
  {title: 'Главная', route: ROUTERS.HOME},
  {title: 'Публикации', route: ROUTERS.PUBLICATIONS},
  {
    title: 'Налогообложения ООО',
    route: ROUTERS.ARTICLE,
  },
];

const TaxationOOO = () => {
  const classes = useStyles();

  return (
    <Article PageTitle="Налогообложения ООО" foto={foto} breadCrumbsRoutes={breadCrumbsRoutes}>
      <Typography className={classes.paragraph} variant="subtitle1">
        Вы уже решили, каким бизнесом заняться и готовы к началу работы, но перед этим вам стоит еще одна
        фундаментальная задача – определиться с системой налогообложения, по которой вы будете работать.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Для ООО и ФЛП предусмотрены две основные системы – общая, с корпоративным налогом в{' '}
        <span className={classes.strongSpan}>18%</span> (плюс 1,5 военного сбора), а также упрощенная система с двумя
        ставками в <span className={classes.strongSpan}>5%</span> и <span className={classes.strongSpan}>3%</span>, во
        втором случае ставка применяется, если субъект хозяйствования выступает также плательщиком НДС.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Внутри упрошенной системы есть 4 основных группы, I и II предназначены сугубо для хозяйственной деятельности в
        форме ФЛП. III группа дает возможность работать как в форме ФЛП так и ООО, с определенными ограничениями. Что
        касается IV группы, то она создана специально для агро производителей, фермеров и тд, доля сельскохозяйственной
        продукции, в которых за предыдущий отчетный год выше 75%, и работать по нему могут как физические лица
        предприниматели, таки и общества с ограниченной ответственностью.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Ниже в таблице приведена актуальная информация по группам единого налога, ставкам и ограничениям, которые
        распространяться на каждую группу.
      </Typography>
      {/* TABLE */}
      <div className={classes.table}>
        <img className={classes.tableImg} src={table1} alt="123" />
      </div>
      <Typography className={classes.paragraph} variant="subtitle1">
        Стоит отметить, что даже самая широкая 3ая группа единого налога также имеет ряд ограничений по деятельности, а
        именно:
      </Typography>
      {/* TABLE */}
      <div className={classes.table}>
        <img className={classes.tableImg} src={table2} alt="123" />
      </div>
      <Typography className={classes.paragraph} variant="subtitle1">
        Также запрещены следующие виды деятельности вне зависимости от ее формы:
        <ul className={classes.list}>
          <li className={classes.listitem}>азартные игры, лотереи (кроме их распространения), тотализаторы;</li>
          <li className={classes.listitem}>обмен иностранной валюты; </li>
          <li className={classes.listitem}>
            производство, экспорт, импорт, продажа подакцизных товаров (кроме розничной продажи горюче-смазочных
            материалов до 20 л, пива и столовых вин). Например, запрещена продажа табачных и ликеро-водочных изделий.
            Исключение – розничная продажа столового вина, розничная продажа пива (при наличии лицензии и РРО), любая
            продажа безалкогольного пива (письмо ГФС от 15.11.2016 № 24600/6/99-95-42-01-1);{' '}
          </li>
          <li className={classes.listitem}>
            добыча, реализация полезных ископаемых общегосударственного значения, в т. ч. подземной воды. Исключение –
            добыча, реализация полезных ископаемых местного значения, например, бишофит, известняк, гипс, мел, песок,
            суглинок, супесь, гажа, сапропель и др. по перечню из постановления Кабмина от 12.12.1994 г. № 827. Еще одно
            исключение – торговля полезными ископаемыми (общегосударственного и местного значения), если они приобретены
            у других субъектов хозяйствования (разъяснения ГНС 107.01.02 ВИР);{' '}
          </li>
          <li className={classes.listitem}>
            добыча, производство и продажа ювелирных изделий из драгоценных металлов и камней (исключение – 3 группа ЕН
            по ставке 5%, они могут, п. 293.3 НК) ;{' '}
          </li>
          <li className={classes.listitem}>
            брокерская деятельность в сфере финансового посредничества, регистрация ценных бумаг;{' '}
          </li>
          <li className={classes.listitem}>деятельность по управлению предприятиями; </li>
          <li className={classes.listitem}>
            деятельность по предоставлению услуг связи, почты (кроме курьерской доставки);{' '}
          </li>
          <li className={classes.listitem}>
            деятельность по организации и проведению гастрольных мероприятий; деятельность по продаже предметов
            искусства и антиквариата, деятельность из организации торгов (аукционов) изделиями искусства, предметами
            коллекционирования или антиквариата; • нерезиденты;{' '}
          </li>
          <li className={classes.listitem}>брокерская деятельность в сфере страхования (перестрахования). </li>
        </ul>
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Не могут быть плательщиками ЕН налогоплательщики, которые на день представления заявления о регистрации
        плательщиком ЕН имеют налоговый долг, кроме безнадежного налогового долга, возникшего вследствие действия
        обстоятельств непреодолимой силы (форс-мажорных обстоятельств).
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        По поводу общей системы налогообложения, то основным является налог на прибыль. Главное отличие такой системы –
        налогооблагаемой базой (т.е. базой, с которой платится налог на прибыль) является прибыль - сумма, которая
        вычисляется путем отнимания от всех доходов суммы понесенных расходов. Такая модель налогообложения
        предусматривает более кропотливую систему бухгалтерского учета.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Как упоминалось ранее, ставка налога на прибыль - в 2021 году составляет{' '}
        <span className={classes.strongSpan}>18%</span>. По вопросу сроков оплаты налога законодательство разделяет
        предприятия на две категории в зависимости от размера годовой выручки:
        <ul className={classes.list} style={{listStyleType: 'lower-alpha'}}>
          <li className={classes.listitem}>
            менее 40 млн. - такие предприятия платят налог раз в год по итогу подачи годовой декларации;
          </li>
          <li className={classes.listitem}>более 40 млн. - такие ООО оплачивают налог на прибыль ежеквартально.</li>
        </ul>
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        ООО также дополнительно уплачивают налог на девиденды.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Налог на дивиденды составляет <span className={classes.strongSpan}>5%</span> для предприятий на общей системе
        налогообложения и <span className={classes.strongSpan}>9%</span> для единоналожников. С 2015 года начисленные
        дивиденды дополнительно подпадают под начисление и удержание военного сбора (1,5%).
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Подытоживая, можно сказать, что выбор налогообложения важная составляющая при старте вашего бизнеса. Упрощённая
        система даст вам более простое ведения бухгалтерии, и меньшая сума налогов в некоторых случаях, но существует
        достаточно большой перечень видов деятельности, которые прямо запрещены при выборе единого налога.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Также не стоит забывать об ограничении на доход по компании с единым налогом. Таким образом упрощенная форма
        подходит для нового бизнеса, или компании, которая имеет небольшой оборот. В случаях, если вы хотите заниматься
        деятельностью, которая запрещена при упрошенной системе налогообложения, или же ваше предприятия явно будет
        превышать 7 миллионов по обороту, выбор общей системы является единственным.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Для более детальной информации обращайтесь к нам. ООО «ЮК ЛАВИАНТ» поможет с выбором системы налогообложения,
        оптимальной под ваши потребности, а также даст полезные советы по оптимизации налогообложения для вашего бизнеса
        и предоставит сопутствующие услуги в сфере корпоративного и налогового права.
      </Typography>
    </Article>
  );
};

export default TaxationOOO;
