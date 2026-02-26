import { addons } from 'storybook/manager-api';
import bundTheme from './bundTheme';
 
addons.setConfig({
  theme: bundTheme,
});