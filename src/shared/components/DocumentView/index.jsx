import React, {useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import {Modal, makeStyles, withStyles, IconButton, ThemeProvider, createMuiTheme} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import cx from 'classnames';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CloseIcon from '@material-ui/icons/Close';
import PDF from '../../media/documents/example.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
  },
  document: {
    outline: 'none',
  },
  page: {
    scale: 0.5,
  },
  iconButton: {
    position: 'absolute',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  leftArrow: {
    top: '50%',
    left: '10px',
    transform: 'translate(0, -50%)',
  },
  rightArrow: {
    top: '50%',
    right: '5px',
    transform: 'translate(0, -50%)',
  },
  closeButton: {
    top: '15px',
    right: '15px',
  },
  counter: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '20px',
    color: 'white',
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fafafa',
    },
  },
});

const StyledCircularProgress = withStyles({
  colorPrimary: {
    color: '#8B00FF',
  },
})(CircularProgress);

export default function DocumentView({isViewOpened, setIsViewOpened}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const classes = useStyles();

  function onDocumentLoadSuccess({numPages: nextNumPages}) {
    setNumPages(nextNumPages);
  }

  const prevPage = () => {
    const newPageNumber = pageNumber > 1 ? pageNumber - 1 : numPages;
    setPageNumber(newPageNumber);
  };

  const nextPage = () => {
    const newPageNumber = pageNumber < numPages ? pageNumber + 1 : 1;
    setPageNumber(newPageNumber);
  };

  return (
    <Modal className={classes.modal} open={isViewOpened} onClose={() => setIsViewOpened(false)}>
      <>
        <ThemeProvider theme={theme}>
          <IconButton disableRipple className={cx(classes.iconButton, classes.leftArrow)}>
            <ArrowBackIosIcon color="primary" fontSize="large" onClick={prevPage} />
          </IconButton>
          <Document
            className={classes.document}
            file={PDF}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <>
                <StyledCircularProgress />
              </>
            }
          >
            <Page className={classes.page} pageNumber={pageNumber} />
          </Document>
          <IconButton disableRipple className={cx(classes.iconButton, classes.rightArrow)}>
            <ArrowForwardIosIcon color="primary" fontSize="large" onClick={nextPage} />
          </IconButton>
          <p className={classes.counter}>{`${pageNumber}/${numPages}`}</p>
          <IconButton
            disableRipple
            className={cx(classes.iconButton, classes.closeButton)}
            onClick={() => setIsViewOpened(false)}
          >
            <CloseIcon color="primary" fontSize="large" />
          </IconButton>
        </ThemeProvider>
      </>
    </Modal>
  );
}
