import { IData_SnippetNews } from '../types';
import newsText from './newsText.txt';
import flag from 'public/assets/img/favicon.svg';

export const news: IData_SnippetNews = {
  ID: 260855433,
  TI: 'Mobile bankers left vulnerable: 47% of UK consumers manage finances on insecure smartphones',
  AB: `${newsText}`,
  URL: 'https://www.globalsecuritymag.com/Mobile-bankers-left-vulnerable-47,20200819,101944.html',
  DP: '2025-03-06T21:00:00',
  DOM: 'globalsecuritymag.com',
  SENT: 'negative',
  LANG: 'en',
  AU: ['Kaspersky Au', 'Kaspersky Au', 'Kaspersky Au', 'Kaspersky Au', 'Kaspersky Au', 'Kaspersky Au'],
  FAV: `${flag}`,
  KW: [
    { value: 'antivirus', count: 10 },
    { value: 'kaspersky', count: 5 },
    { value: 'new', count: 1 },
    { value: 'antivirus', count: 10 },
    { value: 'kaspersky', count: 5 },
    { value: 'new', count: 1 },
    { value: 'antivirus', count: 10 },
    { value: 'kaspersky', count: 5 },
    { value: 'new', count: 1 }
  ],
  HIGHLIGHTS: [],
  REACH: 2392,
  CNTR: 'France',
  CNTR_CODE: 'Fr',
  TRAFFIC: [
    { value: 'India', count: 0.779 },
    { value: 'United States of America', count: 0.101 },
    { value: 'Mexico', count: 0.036 }
  ]
};
