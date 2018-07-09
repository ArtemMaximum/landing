import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import { mediaMaxWidth } from './lib/sizes'


export const themeAquamarine = {
  colors: {
    actionColor: '#46c1be',
    actionColorDark: '#104455',
    textColor: '#3d3d3d',
    secondaryTextColor: '#7f7f7f',
    borderColor: '#d8e3eb',
    borderColorDark: '#cccccc',
    tooltipBg: '#3d3d3d',
  },
  backgrounds: {
  },
  points: {
    lg: 1140,
    md: 960,
    sm: 720,
    xs: 540,
  },
}

export const globalStyles = () => injectGlobal`
  ${styledNormalize}

  body, html {
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.15;
    font-family: Raleway, Verdana;
  }

  * {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
  }
  
  ol, ul, dl {
    margin-top: 0;
    padding: 0;
    margin-bottom: 1rem;
  }

  a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-width: 320px;
    
    a {
      transition: all .5s;
    }
  }

  ${mediaMaxWidth('tablet')} {
    body, html {
      font-size: 14px;
    }
  }
`
