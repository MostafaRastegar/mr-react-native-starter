import { createGlobalStyle } from 'styled-components';
import { color, px, styles } from '~/constants/theme/helpers';

const GlobalStyle = createGlobalStyle`
  .global-shadow {
    box-shadow: ${styles('shadow')};
  }

  .radius-6 {
    border-radius: ${px(6)};
  }

  .bg{
    &-w{
      background-color: white;
    }
    &-gray{
      &-normal{
          background-color: ${color('gray', 'normal')};
      }
      &-dark{
          background-color: ${color('gray', 'dark')};
      }
      &-light{
          background-color: ${color('gray', 'light')};
      }
      &-ultraLight{
          background-color: ${color('gray', 'ultraLight')};
      }
    }

    &-b{
      &-normal{
          background-color: ${color('blue', 'normal')};
      }
      &-dark{
          background-color: ${color('blue', 'dark')};
      }
      &-light{
          background-color: ${color('blue', 'light')};
      }
    }

    &-g{
      &-normal{
          background-color: ${color('green', 'normal')};
      }
      &-dark{
          background-color: ${color('green', 'dark')};
      }
      &-light{
          background-color: ${color('green', 'light')};
      }
    }

    &-r{
      &-dark{
          background-color: ${color('red', 'dark')};
      }
      &-light{
          background-color: ${color('red', 'light')};
      }
    }

    &-y{
      &-dark{
          background-color: ${color('yellow', 'dark')};
      }
    }
  }

  .font{
    &-light{
      font-weight: 300;
    }
    &-20{
      font-size: ${px(20)} !important;
    }
    &-16{
      font-size: ${px(16)} !important;
    }
    &-14{
      font-size: ${px(14)} !important;
    }
    &-12{
      font-size: ${px(12)} !important;
    }
    &-white{
      color: white;
    }

    &-gray{
      &-normal{
          color: ${color('gray', 'normal')};
      }
      &-dark{
          color: ${color('gray', 'dark')};
      }
      &-light{
          color: ${color('gray', 'light')};
      }
      &-ultraLight{
          color: ${color('gray', 'ultraLight')};
      }
    }

    &-b{
      &-normal{
          color: ${color('blue', 'normal')};
      }
      &-dark{
          color: ${color('blue', 'dark')};
      }
      &-light{
          color: ${color('blue', 'light')};
      }
    }

    &-g{
      &-normal{
          color: ${color('green', 'normal')};
      }
      &-dark{
          color: ${color('green', 'dark')};
      }
      &-light{
          color: ${color('green', 'light')};
      }
    }

    &-r{
      &-dark{
          color: ${color('red', 'dark')};
      }
      &-light{
          color: ${color('red', 'light')};
      }
    }

    &-y{
      &-dark{
          color: ${color('yellow', 'dark')};
      }
    }
  }

  .margin{
    &-16{
      margin: ${px(16)} !important;
      &-l{
        margin-left: ${px(16)} !important;
      }
      &-r{
        margin-right: ${px(16)} !important;
      }
      &-t{
        margin-top: ${px(16)} !important;
      }
      &-b{
        margin-bottom: ${px(16)} !important;
      }
    }
    &-8{
      margin: ${px(8)} !important;
      &-l{
        margin-left: ${px(8)} !important;
      }
      &-r{
        margin-right: ${px(8)} !important;
      }
      &-t{
        margin-top: ${px(8)} !important;
      }
      &-b{
        margin-bottom: ${px(8)} !important;
      }
    }
    &-0{
      margin: ${px(0)} !important;
      &-l{
        margin-left: ${px(0)} !important;
      }
      &-r{
        margin-right: ${px(0)} !important;
      }
      &-t{
        margin-top: ${px(0)} !important;
      }
      &-b{
        margin-bottom: ${px(0)} !important;
      }
    }
  }

  .padding{
    &-16{
      padding: ${px(16)} !important;
      &-l{
        padding-left: ${px(16)} !important;
      }
      &-r{
        padding-right: ${px(16)} !important;
      }
      &-t{
        padding-top: ${px(16)} !important;
      }
      &-b{
        padding-bottom: ${px(16)} !important;
      }
    }
    &-8{
      padding: ${px(8)} !important;
      &-l{
        padding-left: ${px(8)} !important;
      }
      &-r{
        padding-right: ${px(8)} !important;
      }
      &-t{
        padding-top: ${px(8)} !important;
      }
      &-b{
        padding-bottom: ${px(8)} !important;
      }
    }
    &-0{
      padding: ${px(0)} !important;
      &-l{
        padding-left: ${px(0)} !important;
      }
      &-r{
        padding-right: ${px(0)} !important;
      }
      &-t{
        padding-top: ${px(0)} !important;
      }
      &-b{
        padding-bottom: ${px(0)} !important;
      }
    }
  }
`;

export default GlobalStyle;
