import React from 'react';
import {Typography, makeStyles} from '@material-ui/core';
import foto from '../../../../shared/media/Publications/CountriesForITBusiness.jpg';
import ROUTERS from '../../../../core/_consts/routes';
// Components
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
}));

const breadCrumbsRoutes = [
  {title: 'Главная', route: ROUTERS.HOME},
  {title: 'Публикации', route: ROUTERS.PUBLICATIONS},
  {
    title: 'Cтраны для IT бизнеса',
    route: ROUTERS.ARTICLE,
  },
];

const CountriesForITBusiness = () => {
  const classes = useStyles();

  return (
    <Article PageTitle="Cтраны для IT бизнеса" foto={foto} breadCrumbsRoutes={breadCrumbsRoutes}>
      <Typography className={classes.paragraph} variant="subtitle1">
        IT-сектор в Украине является одним из самых перспективных секторов экономики в Украине, эта тенденция особенно
        заметна с 2014 года, причин для этого несколько и высокая квалификация ИТ-специалистов в Украине, и конкурентная
        стоимость их услуг на мировом рынке, а также ряд других причин, которые влияют на IT-сектор в Украине.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        К особенностям работы IT-сектора в Украине стоит отнести, то, что большую часть на рынке составляют
        индивидуальные предприниматели, которые работают в форме физических лиц-предпринимателей, и в большинстве
        случаев работают как подрядчики по гражданско-правовому договору, или же небольшие IT-компании. Как показывает
        практика, в обеих случаях такие субъекты работают на упрощенной системе налогообложения на едином налоге 3
        группы. В своё время эта система налогообложения была одной из немногих возможностей для малого бизнеса, и очень
        пригодилась IT-специалистам, так как предложила либеральные условия по ведению отчетности, а самое главное
        низкую фискальную нагрузку, так как ставка по 3 группе составляет 5%, и 3% если «единщик» имеет статус
        плательщика НДС.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Но рано или поздно перед представителями профессии возникает необходимость в развитии и масштабировании их
        IT-бизнеса, например, работа с лимитом группы, который составляет 7 миллионов гривен. Можно оптимизировать сумму
        и вложиться в лимит, но, если компания быстро развивается, а 3 группа уже слишком мала, чтобы обеспечивать
        уровень работы предпринимателя, перед ним стоит вопрос, а что дальше?
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Далее можно переходить на общую систему налогообложения, но платить 18+1,5 % налога очень затратно. Следующим
        вариантом будет регистрация в системе ДияСити, но в таком случае есть ряд особенностей и ограничений. Но есть
        еще один вариант, регистрация бизнеса в иностранной юрисдикции. В таком случае достигается ряд преимуществ,
        таких как: уменьшение налоговой нагрузки, работа в престижной юрисдикции, защита имущественных прав и так далее.
        Также, компания в иностранной юрисдикции позволит более удобно работать с международными контрагентами, в глазах
        которых, такая компания будет выглядеть более респектабельно, нежели компания из Украины.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        С основными преимуществами мы разобрались, а как же выбрать иностранную юрисдикцию для IT-бизнеса, на что
        обращать внимание, и самое главное какую страну выбрать для ваших целей и под ваши запросы.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        По поводу основных критериев при выборе юрисдикции нужно обращать внимание на следующие пункты:
        <ul className={classes.list} style={{listStyleType: 'decimal'}}>
          <li className={classes.listitem}>
            Простые правила ведения деятельности, бухгалтерии и правил налоговой отчетности;
          </li>
          <li className={classes.listitem}>
            Удобная фискальная нагрузка, которая позволит оптимизировать налоги, и повысить окончательную доходность
            предприятия, которую можно будет реинвестировать в развитие IT-компании;
          </li>
          <li className={classes.listitem}>Невысокая стоимость регистрации и обслуживания юридического лица;</li>
          <li className={classes.listitem}>Надежная защита вашего имущества и интеллектуальных прав;</li>
          <li className={classes.listitem}>
            Простая процедура открытии счета в банке также является важным аспектом при выборе юрисдикции, так как с
            каждым годом требования банков имеют тенденцию увеличиваться, соответственно открыть счет в банке всё
            сложнее, из-за процедуры AМL и KYC;
          </li>
        </ul>
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Перед тем как порекомендовать юрисдикции для IT-бизнеса стоит отметить, что идеального варианта для всех нет, и
        нужно индивидуально подбирать страну под конкретные требования и запросы. Но мы можем посоветовать несколько
        вариантов, которые имеют ряд преимуществ для IT- деятельности.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Одной из наиболее благоприятных стран для IT-сектора является Эстония. Зарегистрировать компанию в Эстонии
        достаточно просто, требования к отчетности – либеральные, а стоимость обслуживания компании — ниже
        среднеевропейских. Особенно привлекательна Эстония для крипто-ринка, из-за политики государства по отношению к
        криптоиндустрии, и прозрачности данной деятельности. Также, процесс получения лицензии на осуществление
        деятельности, связанной с криптовалютой в Эстонии является бюрократически несложным.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Налогообложение в Эстонии выглядит привлекательным. В Эстонии действует нулевая ставка налога на
        нераспределенную прибыль, что позволяет значительно оптимизировать расходы. При распределении доходов
        предприятия уплачивается налог на дивиденды в размере 20%. Также, с 2018 года в Эстонии действует пониженная
        ставка в размере 14%, в случае если компания регулярно выплачивала дивиденды, и соответственно налоги, она с 3
        года может претендовать на льготную ставку.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        К плюсам регистрации компании в Эстонии можно отнести то, что директору не обязательно выплачивать зарплату, а
        уставной капитал можно не вносить, а только обозначить (минимум 2500 евро).
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Единственный значительный недостаток — открыть счет в Эстонии с нерезидентами в структуре и без обеспечения
        реального присутствия в стране невозможно, поэтому нужно использовать номинальный сервис.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Следующей страной для регистрации IT-бизнеса можно назвать Кипр, в основном из-за условий местного IP-Box.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        IP-Box представляет собой льготный режим, который создан, в первую очередь, для компаний, работающих в сфере IT
        и инноваций, действует в отношении налогообложения доходов от объектов интеллектуальной собственности.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Так, доходы, которые получены от объектов интеллектуальной собственности (патенты, полезные модели и др.), с
        помощью IP-Box будут облагаться налогом на Кипре по льготным налоговым ставкам, а именно всего 2.5%. А ставка
        корпоративного налога составляет 12,5%.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Вести предпринимательскую деятельность на Кипре достаточно комфортно, а юрисдикция за последние 20 лет прошла
        путь от классического оффшора, до вполне престижной для бизнеса страны. Однако, нужно обратить внимание на то,
        что процедура регистрации и обслуживания компании на Кипре может быть сложнее, чем многие себе представляют.
        Ввиду необходимости соответствия требованиям AML, на этапе регистрации нужно предоставить больше документов, чем
        при регистрации, например, в Эстонии.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Также стоит заметить, что кипрские компании должны проходить аудиторскую проверку как минимум один раз в год,
        еще обязательным в работе кипрской компании является наличие местного секретаря, который будет обслуживать
        компанию, но соответственно стоимость содержания тоже вырастет.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Стоимость регистрации и обслуживания компании на Кипре достаточно низкая, но открыть счет непросто.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Еще одной перспективной юрисдикцией является Ирландия, в которой базируются такие IT-гиганты, как Google,
        Microsoft и Apple.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Основными преимуществами Ирландии, как юрисдикции являются респектабельность страны для бизнеса и низкие ставки
        налогообложения.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Налог на прибыль — 6.25%. Это относится к IT-компаниям с годовым доходом менее 7 с половиной миллиона евро,
        который был получен от запатентованных объектов интеллектуальной собственности. В таком случае 50% прибыли будет
        освобождено от налогов. Поэтому эффективная ставка налога и будет составлять 6.25%.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        К минусам можно отнести высокую стоимость обслуживания компании, и невозможность открытия счёта для компании, в
        которой учредитель нерезидент.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Перспективной юрисдикцией можно назвать также Грузию, кроме того у правительства Грузии особое отношение к
        IT-сфере, поэтому с целью привлечения в страну IT-компаний были разработаны специальные налоговые режимы и
        статусы: Виртуальная зона и Международная компания.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Решив открыть компанию в Грузии в сфере ІТ, стоит учесть, что для международного бизнеса – это идеальная
        площадка, так как она обладает следующими неоспоримыми преимуществами:
        <ul className={classes.list}>
          <li className={classes.listitem}>идентичные требования как к резидентам, так и к нерезидентам страны;</li>
          <li className={classes.listitem}>возможность открытия компании и банковского счета в удаленном режиме;</li>
          <li className={classes.listitem}>
            конфиденциальность ваших банковских операций, банки Грузии не передают данные по своим клиентам налоговых
            ведомствам из других юрисдикций в рамках протокола CRS до 2023 года;
          </li>
          <li className={classes.listitem}>простая процедура регистрации компании в данной юрисдикции;</li>
        </ul>
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        В Грузии также действует налог с распределенной прибыли, который составляет 20%, аналогично эстонскому. Но
        дополнительным плюсом выступает так называемый сертификат виртуальной зоны, который выдается IT-компаниям. Этот
        сертификат позволяет вместо 20% налога платить всего лишь 5%, а получения данного сертификата не составит
        сложности.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        При этом эти 5% являются не налогом компании, а налогом на физические лица. На практике, это означает, что в
        дальнейшем при оплате НДФЛ в своей стране, вы сможете вычесть 5% (при наличии конвенции об избежании двойного
        налогообложения). В итоге, это один из лучших вариантов с точки зрения налоговой нагрузки, и также недорогое
        администрирование.
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Для IT-сектора могут быть перспективными такие страны: Польша, Великобритания, Гонконг, Сингапур и другие. Более
        детальную информацию по поводу создания бизнеса в иностранных юрисдикциях вы можете получить от наших экспертов,
        также вы сможете получить советы по поводу налогового планирования. ООО «ЮК ЛАВИАНТ» предоставляет полный спектр
        услуг, касающихся создания компаний, как в Украине, так и за рубежом, мы работаем индивидуально с каждым
        клиентом, так как только такой подход позволит достичь нужных результатов, как для вас, так и для ООО «ЮК
        ЛАВИАНТ».
      </Typography>
      <Typography className={classes.paragraph} variant="subtitle1">
        Мы специализируемся на работе с IT-предпринимателями, так как понимаем их ключевые запросы, и при нашем
        сотрудничестве вы получите не только готовую компанию, а и консультацию при выборе юрисдикций, возможность
        абонентского обслуживания, а также налоговый консалтинг, который поможет оптимизировать ваши издержки. Работайте
        только с профессионалами.
      </Typography>
    </Article>
  );
};

export default CountriesForITBusiness;
