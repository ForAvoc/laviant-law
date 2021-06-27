import React from 'react';
import s from './App.module.scss';
// Components
import MainPageLayout from './shared/components/MainPageLayout';

function App() {
  return (
    <div className={s.app}>
      <MainPageLayout>
        <div>Content</div>
      </MainPageLayout>
    </div>
  );
}

export default App;
