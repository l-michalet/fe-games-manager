import {ReactNode, useContext} from 'react';
import Header from '../FormHeader';
import SidebarItem from '../SidebarItem';
import {FormContext} from '../../context/FormContext';
import styled from 'styled-components'

const Container = styled.div`
    background-color: whitesmoke ;
    height: 100vh ;
`

const Area = styled.div`
    width: 70% ;
    margin: auto ;
    height: 100vh ;
`

const Steps = styled.div`
    width: 100% ;
    display: flex ;
`

const Sidebar = styled.div`
    width: 40% ;
    border-right: 1px solid rgb(91, 24, 153);
`

const Page = styled.div`
    width: 60% ;
`

type Props = {
    children: ReactNode;
};

export const Theme = ({ children }: Props) => {
    const { state } = useContext(FormContext);
    return (
        <Container>
            <Area>
                <Header />
                <Steps>
                    <Sidebar>
                        <SidebarItem
                            title="Pessoal"
                            description="Se identifique"
                            icon="profile"
                            path="/form"
                            active={state.currentStep === 1}
                        />
                        <SidebarItem
                            title="Profissional"
                            description="Seu nível"
                            icon="book"
                            path="/form/step2"
                            active={state.currentStep === 2}
                        />
                        <SidebarItem
                            title="Contatos"
                            description="Como te achar"
                            icon="mail"
                            path="/form/step3"
                            active={state.currentStep === 3}
                        />
                        <SidebarItem
                            title="Concluído"
                            description="Sucesso"
                            icon="check"
                            path="/form/step4"
                            active={state.currentStep === 4}
                        />
                    </Sidebar>
                    <Page>{children}</Page>
                </Steps>
            </Area>
        </Container>
    );
};