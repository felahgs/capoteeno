// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    background: string,
    lightBackground: string,
    inputBackground: string,
    selection: string,
    badge: string,
    logo: string,
    titles: string,
    text: {
    primary: string,
      secondary: string,
    },
    button: 
    { 
      primary: string,
      secondary: string,
    }
  }
}