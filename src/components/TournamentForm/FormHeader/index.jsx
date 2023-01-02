import styled from "styled-components";
import {useTheme} from "../../../utils/hooks";

const Container = styled.div`
    width: 100% ;
    height: 120px ;
    border-bottom: 1px solid ${({ theme }) => (theme === 'light' ? 'rgb(91, 24, 153)'  : '#000000')};
    h1{
        padding: 30px 0 5px 30px ;
        color: ${({ theme }) => (theme === 'light' ? 'rgb(91, 24, 153)'  : '#000000')} ;
    }
    p{
        padding: 5px 0 10px 40px ;
    }
`

function FormHeader() {
    const { theme } = useTheme()
    return(
        <Container theme={theme}>
            <h1>Create a new Tournament</h1>
            <p>There are some little steps to proceed, but it won't be long</p>
        </Container>
    )
}

export default FormHeader