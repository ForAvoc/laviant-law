import React from 'react';
import {Typography, makeStyles} from '@material-ui/core';
import foto from '../../../../shared/media/Publications/TOVRegistration.jpg';
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
    '@media (max-width: 768px)': {
      fontSize: '15px',
    },
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
    title: 'Регистрация ТОВ',
    route: ROUTERS.ARTICLE,
  },
];

const TOVRegistration = () => {
  const classes = useStyles();

  return (
    <Article PageTitle="Регистрация ТОВ" foto={foto} breadCrumbsRoutes={breadCrumbsRoutes}>
      <Typography className={classes.paragraph} variant="subtitle1">
        Создания бизнеса. Регистрация общества с ограниченной ответственностью (ООО/ТОВ) в Украине. Нюансы и юридические
        аспекты.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        После того, как вы решили создать свой бизнес нужно узаконить свою деятельность, сделать это можно при помощи
        регистрации как физическое лицо предпринимателя (ФЛП ФОП) или же создать компанию в форме общества с
        ограниченной ответственностью, то есть ООО (ТОВ). К созданию ООО может так же подтолкнуть необходимость его
        расширения, или вхождение в него партнера, с которым вы будете развивать ваше дело.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Создания общества с ограниченной ответственностью нужно в следующих случаях:
        <ul className={classes.list} style={{listStyleType: 'decimal'}}>
          <li className={classes.listitem}>
            Если вы имеете большой бизнес и в рамках ФЛП уже невозможно работать и развиваться;
          </li>
          <li className={classes.listitem}>
            Когда вы хотите работать в партнерстве, и с целью обеспечения юридической и имущественной защиты создания
            ООО жизненно необходимо;
          </li>
          <li className={classes.listitem}>
            Если вы хотите расширить бизнес, и создать предприятия, учредителем которого будет являться юридическое
            лицо;
          </li>
        </ul>
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Преимущества ООО следующие:
        <ul className={classes.list} style={{listStyleType: 'decimal'}}>
          <li className={classes.listitem}>
            Имущественная защита учредителя. ООО отвечает по своим обязательствам, только в пределах собственного
            имущества, соответственно риски учредителя состоят только в имущественных правах, которые находиться в его
            владении. Аналогично, обязательства учредителя не переходят на ООО. Можно сказать, что первым преимуществом
            есть имущественная независимость ООО и учредителя, чем не может похвастаться ФЛП, в котором имущество и
            обязательства вас как физического лица и ФЛП объединены.
          </li>
          <li className={classes.listitem}>
            Возможность заниматься предпринимательством в партнерстве. Количество учредителей, предусмотренное
            законодательством, составляет от 1 до 100 лиц
          </li>
          <li className={classes.listitem}>Возможность иметь собственное название для предприятия</li>
          <li className={classes.listitem}>Возможность выйти из бизнеса и продать принадлежащую вам долю.</li>
          <li className={classes.listitem}>
            При ведении ООО вы можете работать в любой сфере деятельности, предусмотренных законодательством, в случае
            если такая деятельность не требует лицензирования.
          </li>
        </ul>
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Чтобы помочь вам избежать ошибок, мы подготовили эту небольшую статью, так как предприниматели часто задаются
        вопросами, как зарегистрировать ООО, на что нужно обратить внимание, как избежать отказа в регистрации и какие
        подводные камни могут быть как при создании, так и при ведении деятельности.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Регистрация ООО является для предпринимателя серьезным шагом на его деловом пути. Скорее всего у вас уже есть
        наработанная база клиентов, а также есть новые клиенты, которые из-за больших оборотов принципиально работают
        только с ООО. Кроме того, большое количество ФЛП-подрядчиков у большой компании может вызвать лишние вопросы у
        налоговых служб, поэтому они предпочитают работать только с ООО.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Создание ООО более трудоемкий и сложный процесс нежели создание ФЛП, поэтому к нему нужно тщательно
        подготовиться. Изучить профильное законодательство: Гражданский кодекс, Хозяйственный кодекс, Закон «Про
        общества с ограниченной и дополнительной ответственностью», «Про государственную регистрацию юридических лиц,
        физических лиц - предпринимателей и общественных формирований». И это только ряд основных нормативно-правовых
        актов, которые стоит учесть при создании ООО.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Стоит заметить, что регистрация ООО, как и ФЛП возможна онлайн, через сервис ДИЯ, но есть определенные нюансы, а
        именно невозможно зарегистрировать общество на собственном уставе, есть возможность выбора только модельного
        устава, утвержденного Министерством юстиции.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Важным также является такие аспекты создания как: выбор названия компании, разработка устава, подбор нужных
        КВЕДов (классификатор видов экономической деятельности), выбор места регистрации и налоговой системе, по которой
        вы будете работать.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Собственно, для регистрации ООО нужен следующий перечень документов:
        <ul className={classes.list} style={{listStyleType: 'decimal'}}>
          <li className={classes.listitem}>Заявление о государственной регистрации.</li>
          <li className={classes.listitem}>Заявление о выборе системы налогообложения.</li>
          <li className={classes.listitem}>
            Два экземпляра оригинала решения учредителей о создании юридического лица, которые заверены нотариально.
          </li>
          <li className={classes.listitem}>
            Учредительный документ юридического лица — в случае создания юридического лица на основании собственного
            учредительного документа.
          </li>
          <li className={classes.listitem}>
            В случае если учредитель юридическое лицо нерезидент, нужен также документ, указывающий на регистрацию
            иностранного лица в стране его местонахождения (выписка из торгового, банковского, судебного реестра).
          </li>
          <li className={classes.listitem}>
            Если документы будет подавать кто-то вместо вас, то нужно нотариально заверенная доверенность.
          </li>
          <li className={classes.listitem}>
            Если подаете лично вы, то нужно иметь украинский паспорт и РНОКПП (идентификационный код).
          </li>
        </ul>
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Если вы гражданин другой страны, то должен быть документ, удостоверяющий личность, если лицо без гражданства —
        соответствующее удостоверение или вид на постоянное или временное жительство.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Во время предоставления регистратору перечисленных документов у него можно проверить правильность заполненных
        заявлений и других бланков, чтобы регистрацию ООО не отклонили или не приостановили из-за ошибок.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        После этого регистратором вносятся копии полученных документов в Единый реестр и проводятся регистрационные
        действия. Заявитель получает опись, при помощи которой можно получить выписку. С момента получения выписки
        создание ООО можно считать завершенным.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Также, в результате регистрационных действий ООО становится на учет в ГНС, Госстате и Пенсионном фонде, а
        регистратор формирует выписку из реестра.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Заключительным этапом является получения печати предприятия, открытия счета в банке, и формирование уставного
        капитала, для вашей ООО.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Не стоит забывать, что при самостоятельной регистрации ООО можно допустить ряд ошибок, которые либо не позволят
        создать общество, либо же устранение недостатков повлечет дополнительные материальные затраты.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        <ul className={classes.list}>
          <li className={classes.listitem}>
            <span className={classes.strongSpan}>
              Имеется неполный перечень документов необходимый при регистрации.
            </span>
          </li>
          <li className={classes.listitem}>
            <span className={classes.strongSpan}>
              Использованы неактуальные бланки заявлений или сделана двусторонняя печать.
            </span>
          </li>
          <li className={classes.listitem}>
            <span className={classes.strongSpan}>
              Бланки заполнены прописным текстом или некорректно внесена информация в формах.
            </span>
          </li>
          <li className={classes.listitem}>
            <span className={classes.strongSpan}>
              Выбрано неуникальное наименование для компании (повлечет за собой отказ в регистрации) или же которое
              нельзя использовать.
            </span>
          </li>
          <li className={classes.listitem}>
            <span className={classes.strongSpan}>Неправильно выбрана система налогообложения.</span>
          </li>
          <li className={classes.listitem}>
            <span className={classes.strongSpan}>Неправильно подобраные КВЕДы </span>
            (грозит начислением штрафов: предприниматели, которые собираются открыть бизнес на упрощенной системе,
            должны знать, какие ограничения касающиеся видов деятельности действуют на едином налоге).
          </li>
          <li className={classes.listitem}>
            <span className={classes.strongSpan}>
              В регистрационных документах отсутствует номер офиса (комнаты) или указан «массовый» адрес (например,
              улица и номер дома бизнес-центра). Этот пункт опасен тем, что государственные органы будут более
              пристально мониторить компанию, и в их глазах она будет вызывать подозрения, что негативно скажется на
              простоте дальнейшего ведения дел.
            </span>
          </li>
        </ul>
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Чтобы избежать подобных неприятностей, рекомендуем воспользоваться услугами ООО «ЮК ЛАВИАНТ», с нашей помощью мы
        сможем правильно подготовить нужные документы, выбрать оптимальные КВЕДы, определиться с системой
        налогообложения и создать для вас компанию, которая будет работать!
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Вы, как клиент, получите юридическое сопровождения в открытии ООО, первичную налоговую и правовую консультацию,
        получите пакет документов для открытия счета в банке, а также по запросу сможете получить ЕЦП и физическую
        печать. Также возможно получить статус плательщика НДС, или единого налога сразу с регистрацией компании.
      </Typography>
    </Article>
  );
};

export default TOVRegistration;