import React, {useLayoutEffect, useState} from 'react';
import s from './App.module.scss';
// Components
import MainPageLayout from './shared/components/MainPageLayout';

function App() {
  const [isSideBarTemporary, setIsSideBarTemporary] = useState(false);
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  const [isSideBarVertical, setIsSideBarVertical] = useState(false);

  useLayoutEffect(() => {
    if (window.innerWidth < 1300) {
      setIsSideBarTemporary(true);
    } else {
      setIsSideBarTemporary(false);
    }
    if (window.innerWidth < 721) {
      setIsSideBarVertical(true);
    } else {
      setIsSideBarVertical(false);
    }
    window.addEventListener('resize', (e) => {
      if (e.currentTarget.innerWidth < 1300) {
        setIsSideBarTemporary(true);
      } else {
        setIsSideBarTemporary(false);
      }
      if (e.currentTarget.innerWidth < 721) {
        setIsSideBarVertical(true);
      } else {
        setIsSideBarVertical(false);
      }
    });
  }, []);
  return (
    <div className={s.app}>
      <MainPageLayout
        isSideBarOpened={isSideBarOpened}
        setIsSideBarOpened={setIsSideBarOpened}
        isSideBarTemporary={isSideBarTemporary}
        setIsSideBarTemporary={setIsSideBarTemporary}
        isSideBarVertical={isSideBarVertical}
      >
        <div>Content</div>
      </MainPageLayout>
    </div>
  );
}

export default App;
