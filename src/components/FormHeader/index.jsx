import styled from "styled-components";

const Container = styled.div`
width: 100% ;
height: 120px ;
border-bottom: 1px solid rgb(91, 24, 153) ;
h1{
    padding: 30px 0 5px 30px ;
    color: rgb(91, 24, 153);
    
}
p{
    padding: 5px 0 10px 40px ;
}
`

function FormHeader() {
    return(
        <Container>
            <h1>Cadastro de Desenvolvedor</h1>
            <p>Faça seu cadastro para receber um emprego</p>
        </Container>
    )
}

export default FormHeader