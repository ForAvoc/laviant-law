import PageWrapper from '../../shared/components/PageWrapper';
import ROUTERS from '../../core/_consts/routes';
import OffersWrapper from './OffersWrapper';
import foto from '../../shared/media/Offers/MigrationLaw.jpg';

const prices = [{cost: 'от 9000 грн', offerType: 'временный вид на жительство'}];

const breadCrubmsRoutes = [
  {title: 'Главная', route: ROUTERS.HOME},
  {title: 'Миграционное право', route: ROUTERS.MIGRATION_LAW},
];

const MigrationLaw = () => (
  <div className="offer">
    <PageWrapper breadCrumbsRoutes={breadCrubmsRoutes} pageTitle="Миграционное право">
      <OffersWrapper prices={prices} foto={foto}>
        <div className="offer__description">
          <p className="offer__title">Что мы делаем?</p>
          <p className="offer__paragraph ">
            Существует множество проблем связанных с вопросом миграции, как иностранных граждан в Украину, так и
            украинцев за границу. Все вопросы, связанными с регулированием этой обширной области правоотношений,
            регулирует миграционное право.
          </p>
          <p className="offer__paragraph ">
            Эта область права регулирует перемещение граждан Украины за рубежом и тех, кто не имеет гражданства, но
            находится в пределах страны. Данная сфера права охватывает внутреннюю миграцию, эмиграцию и иммиграцию, а
            также временное пребывание граждан за пределами Украины – деловые или туристические поездки.
          </p>
          <p className="offer__title">Мы предлагаем:</p>
          <ul className=" mt25">
            <li className="offer__paragraph">Временный вид на жительство в Украине</li>
            <li className="offer__paragraph">Постоянный вид на жительство</li>
            <li className="offer__paragraph">Приглашение в Украину</li>
            <li className="offer__paragraph">Открытие бизнеса нерезиденту в Украине</li>
            <li className="offer__paragraph">Подготовка документов для эмиграции</li>
            <li className="offer__paragraph">Получение индивидуального налогового номера для резидентов</li>
            <li className="offer__paragraph">Консультирование в сфере миграционного права</li>
          </ul>
        </div>
      </OffersWrapper>
    </PageWrapper>
  </div>
);

export default MigrationLaw;
