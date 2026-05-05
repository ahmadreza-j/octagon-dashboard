// @mui
import { enUS, arSA } from '@mui/material/locale';

// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: 'فارسی',
    value: 'fa',
    // Persian (fa-IR) shares the Arabic script locale in MUI
    systemValue: arSA,
    icon: 'flagpack:ir',
  },
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: 'flagpack:gb-nir',
  },
];

export const defaultLang = allLangs[0]; // Persian

// GET MORE COUNTRY FLAGS
// https://icon-sets.iconify.design/flagpack/
