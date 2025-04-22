// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Checkbox, Option, FormField, Input, Label, removeAmountFormat, Select, ThemeConfigContext, toAmountFormat, Trailing } from '@cocokits/react-components';
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
