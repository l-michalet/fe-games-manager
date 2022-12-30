import {createGlobalStyle} from "styled-components";
import { ThemeContext } from '../context'
import {useContext} from "react";


const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {
        background-image: ${({isDarkMode}) => (isDarkMode ? 'linear-gradient(to bottom right, #2D3436, #FF6B6B)' : 'linear-gradient(to bottom right,  #FF6B6B, #FFFFFF)')};
        color: ${({isDarkMode}) => (isDarkMode ? '#2F2E41' : 'white')};
        margin: 0;  
    }
`

function GlobalStyle() {
    const { theme } = useContext(ThemeContext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle