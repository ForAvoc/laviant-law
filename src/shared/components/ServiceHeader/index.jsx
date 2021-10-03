/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {useState} from 'react';
import {connect} from 'react-redux';
// import {makeStyles} from '@material-ui/core/styles';
import s from './ServiceHeader.module.scss';
import DocumenView from '../DocumentView';
import DocumentImage from '../../media/mainPageSlider/first.jpg';
import CustomButton from '../CustomButton';
import {actionSetModalState} from '../../../store/modal-service/actions';

const ServiceHeader = ({prices, setModalState}) => {
  const [isViewOpened, setIsViewOpened] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({numPages}) => {
    setNumPages(numPages);
  };

  return (
    <div className={s.serviceHeader}>
      <p className={s.serviceHeader__title}>Стоимость услуг</p>
      <div className={s.preview}>
        <div className={s.preview__document}>
          <img className={s.preview__image} src={DocumentImage} alt="preview" onClick={() => setIsViewOpened(true)} />
        </div>
        <div className={s.prices}>
          <p className={s.prices__cost}>Стоимость услуг:</p>
          <div className={s.prices__items}>
            {prices.map((item) => (
              <div className={s.priceItem} key={`${item.offerType}_${Math.random()}`}>
                <p className={s.priceItem__cost}>{item.cost}</p>
                <p className={s.priceItem__offerType}>{item.offerType}</p>
              </div>
            ))}
          </div>
          <CustomButton text="Заказать услугу" onClick={() => setModalState(true)} />
        </div>
      </div>
      <DocumenView isViewOpened={isViewOpened} setIsViewOpened={setIsViewOpened} />
    </div>
  );
};

const mapDispatchToProps = {
  setModalState: actionSetModalState,
};

const connector = connect(null, mapDispatchToProps);

export default connector(ServiceHeader);
