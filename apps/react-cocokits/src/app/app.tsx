// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Checkbox, Option, FormField, Input, Label, removeAmountFormat, Select, ThemeConfigContext, toAmountFormat, Trailing } from '@cocokits/react-components';
import styles from './app.module.scss';

import { framesXThemeConfig } from '@cocokits/theme-frames-x';
import { useState } from 'react';

export function App() {
  const [value, setValue] = useState("");
  
  return (
    <ThemeConfigContext.Provider value={framesXThemeConfig}>
      <div className='app-host'>
        <Button>Hello</Button>
        <Checkbox>This is a checkbox</Checkbox>

        <FormField>
          <Label>Select amount</Label>
          <Input
            value={value}
            onFocus={() => setValue(removeAmountFormat(value))}
            onBlur={() => setValue(toAmountFormat(value))}
            onChange={(e) => setValue(e.target.value)}
          />
          <Trailing>
            <Select value="USD">
              <Option value="USD">USD</Option>
              <Option value="EUR">EUR</Option>
              <Option value="JPY">JPY</Option>
              <Option value="CNY">CNY</Option>
              <Option value="KRW">KRW</Option>
            </Select>
          </Trailing>
        </FormField>
      </div>
    </ThemeConfigContext.Provider>
  );
}

export default App;
