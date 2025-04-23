// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {  ThemeConfigContext } from '@cocokits/react-components';
import styles from './app.module.scss';

import { framesXThemeConfig } from '@cocokits/theme-frames-x';
import Header from './header/header';

export function App() {
  
  return (
    <ThemeConfigContext.Provider value={framesXThemeConfig}>
      <div className={styles['app-host']}>
        <Header />
      </div>
    </ThemeConfigContext.Provider>
  );
}

export default App;
