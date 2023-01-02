import {ReactNode, useContext} from 'react';
import Header from '../FormHeader';
import SidebarItem from '../SidebarItem';
import {FormContext} from '../../../context/FormContext';
import styled from 'styled-components'
import {useTheme} from "../../../utils/hooks";

const Container = styled.div`
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
    border-right: 1px solid ${({ theme }) => (theme === 'light' ? 'rgb(91, 24, 153)'  : '#000000')} ;;
`

const Page = styled.div`
    width: 60% ;
`

type Props = {
    children: ReactNode;
};

export const Theme = ({ children }: Props) => {
    const theme = useTheme()
    const { state } = useContext(FormContext);
    return (
        <Container theme={theme}>
            <Area>
                <Header />
                <Steps>
                    <Sidebar>
                        <SidebarItem
                            title="Name and sport"
                            description="Do you want 6-3 6-4 scores in your football matches?"
                            icon="profile"
                            path="/form"
                            active={state.currentStep === 1}
                        />
                        <SidebarItem
                            title="Choose your teams"
                            description="The team name makes everything"
                            icon="book"
                            path="/form/step2"
                            active={state.currentStep === 2}
                        />
                        <SidebarItem
                            title="Tournament's type"
                            description="Classic tournament or championship?"
                            icon="mail"
                            path="/form/step3"
                            active={state.currentStep === 3}
                        />
                        <SidebarItem
                            title="More settings"
                            description="For people who don't want to do like the others"
                            icon="check"
                            path="/form/step4"
                            active={state.currentStep === 4}
                        />
                        <SidebarItem
                            title="Final step"
                            description="Success"
                            icon="check"
                            path="/form/step5"
                            active={state.currentStep === 5}
                        />
                    </Sidebar>
                    <Page>{children}</Page>
                </Steps>
            </Area>
        </Container>
    );
};