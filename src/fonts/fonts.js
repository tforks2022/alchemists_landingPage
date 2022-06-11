import { createGlobalStyle } from 'styled-components';

import segoeprb from './segoeprb.woff';
import segoeprb2 from './segoeprb.woff2';
import stylu from './stylu.woff';
import stylu2 from './stylu.woff2';
import papyrus from './PAPYRUS.woff';
import papyrus2 from './PAPYRUS.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'SegoePrint';
        src: local('SegoePrint'), local('SegoePrint'),
        url(${segoeprb}) format('woff');
        url(${segoeprb2}) format('woff2'),
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'StylusBT';
        src: local('StylusBT'), local('StylusBT'),
        url(${stylu}) format('woff');
        url(${stylu2}) format('woff2'),
        font-weight: 300;
        font-style: normal;
    }    
    @font-face {
        font-family: 'Papyrus';
        src: local('Papyrus'), local('Papyrus'),
        url(${papyrus}) format('woff');
        url(${papyrus2}) format('woff2'),
        font-weight: 300;
        font-style: normal;
    }    
`;