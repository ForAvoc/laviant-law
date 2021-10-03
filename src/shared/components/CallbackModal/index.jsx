import React, {useRef, useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import emailjs from 'emailjs-com';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Formik, Form} from 'formik';
import * as yup from 'yup';
import {connect} from 'react-redux';
import cx from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import s from './style.module.scss';
import {ReactComponent as Logo} from '../../media/Logo.svg';
import {selectorGetModalState} from '../../../store/modal-service/selector';
import {actionSetModalState} from '../../../store/modal-service/actions';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 15px',
  },
  formButton: {
    '& .MuiButton': {
      '&-label': {
        color: 'white',
        fontSize: '17px',
      },
    },
    '&.MuiButton-containedPrimary': {
      backgroundColor: '#8378db',
    },
    '&.MuiButton-root': {
      marginTop: '30px',
    },
  },
  formItem: {
    marginTop: '10px',
  },
  infoSuccess: {
    marginTop: '25px',
    alignSelf: 'center',
    color: 'green',
  },
  errorInfo: {
    marginTop: '25px',
    alignSelf: 'center',
    color: 'red',
  },
}));

const ValidationSchema = yup.object().shape({
  // nameSurname: yup.string().required('Пожалуйста укажите свое имя!'),
  phoneNumber: yup
    .number()
    .typeError('Номер введен некоректно')
    .required('Пожалуйста укажите свой номер телефона, что бы мы могли связаться с Вами!'),
  email: yup.string().email('Введите коректный Email').required('Обязательно'),
});

const CallbackModal = ({modalState, setModalState}) => {
  const classes = useStyles();
  const [isSended, setIsSended] = useState(false);
  const [isError, setIsError] = useState(false);
  // ?????
  // const [isModalStyle, setIsModalStyle] = React.useState(false);

  const form = useRef();

  useEffect(() => {
    if (!modalState) {
      setTimeout(() => {
        setIsError(false);
        setIsSended(false);
      }, 600);
    }
  }, [modalState]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_794b227', 'template_d9z77jl', form.current, 'user_IdywS1gEqj6tfeZh6PdHI')
      .then(() => setIsSended(true))
      .catch(() => setIsError(true));
  };

  const handleClose = () => {
    setModalState(false);
  };

  return (
    <Modal
      className={classes.modal}
      open={modalState}
      onClose={handleClose}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 600,
      }}
    >
      <Fade in={modalState}>
        <div className={cx(s.popup__content)}>
          <CloseIcon className={s.popup__closeIcon} onClick={handleClose} />
          <Logo className={s.popup__logo} />
          <div className={s.popup__title}>
            <h1>Заказать консультацию</h1>
          </div>
          <div className={s.popup__text}>
            <p>Оставьте свои контакты и мы свяжемся с вами в ближайшее время!</p>
          </div>

          <Formik
            initialValues={{nameSurname: '', email: '', phoneNumber: ''}}
            validateOnBlur
            validationSchema={ValidationSchema}
          >
            {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
              <Form onSubmit={sendEmail} ref={form} className={s.popup__callbackForm}>
                <TextField
                  className={cx(classes.root, classes.formItem)}
                  name="nameSurname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nameSurname}
                  label="Фамилия и Имя"
                  error={errors.nameSurname && touched.nameSurname && errors.nameSurname}
                  helperText={errors.nameSurname && touched.nameSurname && errors.nameSurname}
                />

                <TextField
                  className={cx(classes.formItem)}
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  label="Email"
                  error={errors.email && touched.email && errors.email}
                  helperText={errors.email && touched.email && errors.email}
                />
                <TextField
                  className={cx(classes.formItem)}
                  name="phoneNumber"
                  type="tel"
                  placeholder="063 123 4567"
                  multiline
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                  label="Телефон*"
                  error={errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                  helperText={errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                />
                {!isSended && !isError && (
                  <Button
                    className={classes.formButton}
                    color="primary"
                    fullWidth
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Отправить
                  </Button>
                )}
                {isSended && <p className={classes.infoSuccess}>Ваше сообщение было успешно отправлено!</p>}
                {isError && <p className={classes.errorInfo}>Произошла ошибка :(</p>}
              </Form>
            )}
          </Formik>
        </div>
      </Fade>
    </Modal>
  );
};

const mapStateToProps = (store) => ({
  modalState: selectorGetModalState(store),
});

const mapDispatchToProps = {
  setModalState: actionSetModalState,
};
const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(CallbackModal);
