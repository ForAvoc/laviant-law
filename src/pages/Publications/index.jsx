import React, {useMemo} from 'react';
// Componets
import ROUTERS from '../../core/_consts/routes';
import PageWrapper from '../../shared/components/PageWrapper';
import Post from './Post';
import foto1 from '../../shared/media/Publications/4groupsoft.jpg';
import foto2 from '../../shared/media/Publications/MakingChangesBENOwner.jpg';
import foto3 from '../../shared/media/Publications/BusinessRegistration.jpg';
import foto4 from '../../shared/media/Publications/CountriesForITBusiness.jpg';
import foto5 from '../../shared/media/Publications/JurisdictionsForBusiness.jpg';
import foto6 from '../../shared/media/Publications/SecurityLicense.jpg';
import foto7 from '../../shared/media/Publications/TaxEResidency.jpeg';
import foto8 from '../../shared/media/Publications/TOVRegistration.jpg';
import foto9 from '../../shared/media/Publications/TaxationOOO.jpg';

// Style
import s from './style.module.scss';

const Publications = () => {
  const posts = useMemo(() => [
    {
      title: '4 группа налогооблажения',
      route: ROUTERS.FOUR_GROUPS_OF_TAXATION,
      image: foto1,
      description:
        'Если вы интересуетесь агробизнесом или уже работаете в этой сфере, вы просто обязаны знать о возможности работать на 4ой группе налогообложения, созданной специально для сельхозпроизводителей. В этой статье мы разберём что это, для кого, какие особенности и ограничения существуют при работе в 4ой группе единого налога.',
    },
    {
      title: 'Внесения изменений конечных бенефициарных собственниках компании',
      route: ROUTERS.MAKING_CHANGES_BEN_OWNER,
      image: foto2,
      description:
        'Длительный процесс с внесениями ведомостей о конечном бенефициарном собственнике подошел к концу, начиная с 12 июля 2021 года, под давлением больших штрафов, а это от 1000 до 3000 необлагаемых минимумов доходов граждан, что составляет 51000 грн. Всем предприятиям нужно раскрыть или же обновить информацию о конечных бенефициарных владельцах.',
    },
    {
      title: 'Регистрация ТОВ',
      route: ROUTERS.TOV_REGISTRATION,
      image: foto8,
      description:
        'Создания бизнеса. Регистрация общества с ограниченной ответственностью (ООО/ТОВ) в Украине. Нюансы и юридические аспекты. После того, как вы решили создать свой бизнес нужно узаконить свою деятельность, сделать это можно при помощи регистрации как физическое лицо предпринимателя (ФЛП ФОП) или же создать компанию в форме общества с',
    },
    {
      title: 'Cтатус налогового е-резидентства',
      route: ROUTERS.TAX_E_RESIDENCY,
      image: foto7,
      description:
        'Украина развивает благоприятную экосистему для IТ-предпринимателей, одной из инноваций, направленных на улучшения климата для предпринимателей со всего мира стало принятия Верховным Советом Украины закона про «е-резидентство».',
    },
    {
      title: 'Процесс получения лицензии на охранную деятельность',
      route: ROUTERS.SECURITY_LICENSE,
      image: foto6,
      description:
        'Процесс получения лицензии на охранную деятельность достаточно продолжительный, трудоемкий и не всегда приводит к желаемому результату. В данной статье мы рассмотрим основные вопросы, которые касаются охранной деятельности, лицензии, требований к лицензиату, перечень необходимых документов и прочее.',
    },
    {
      title: 'Регистрация бизнеса в Украине. Для чего и как?',
      route: ROUTERS.BUSINESS_REGISTRATION,
      image: foto3,
      description:
        'Когда вы поняли, что нужно работать на себя, следующим этапом должен быть выбор направления, бизнес-идеи, составление бизнес-плана. После прохождения всех этих этапов нужно узаконить вашу предпринимательскую деятельность. Не сделав этого, вы можете понести как административную, так и уголовную ответственность.',
    },
    {
      title: 'Cтраны для IT бизнеса',
      route: ROUTERS.COUNTRES_FOR_IT_BUSINESS,
      image: foto4,
      description:
        'IT-сектор в Украине является одним из самых перспективных секторов экономики в Украине, эта тенденция особенно заметна с 2014 года, причин для этого несколько и высокая квалификация ИТ-специалистов в Украине, и конкурентная стоимость их услуг на мировом рынке, а также ряд других причин, которые влияют на IT-сектор в Украине.',
    },
    {
      title: 'Создание бизнеса в иностранных юрисдикциях',
      route: ROUTERS.JURISDICTIONS_FOR_BUSINESS,
      image: foto5,
      description:
        'Создание бизнеса в иностранных юрисдикциях это долгий и кропотливый процесс, и каждый с его этапов важен, так как будет влиять на вашу деятельность. Ваше дело может принести как доход, так и убытки, в случае неправильно выбранных методов при выборе юрисдикции, в которой вы планируете запускать свой бизнес.',
    },
    {
      title: 'Налогообложения ООО',
      route: ROUTERS.TAXATION_OOO,
      image: foto9,
      description:
        'Вы уже решили, каким бизнесом заняться и готовы к началу работы, но перед этим вам стоит еще одна фундаментальная задача – определиться с системой налогообложения, по которой вы будете работать.',
    },
  ]);

  const breadCrubmsRoutes = useMemo(
    () => [
      {title: 'Главная', route: ROUTERS.HOME},
      {title: 'Публикации', route: ROUTERS.PUBLICATIONS},
    ],
    []
  );

  return (
    <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="Публикации">
      <div className={s.publications__wrapper}>
        <div className={s.publications__row}>
          {posts.map((item) => (
            <Post key={item.title} data={item} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Publications;
