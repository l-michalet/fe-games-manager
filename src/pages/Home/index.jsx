import trophy from '../../assets/trophy.png'
import styled from "styled-components";
import colors from "../../utils/style/colors";
import {StyledLink} from "../../utils/style/atoms";
import {useTheme} from "../../utils/hooks";

const HomeWrapper = styled.div`
    width: 100%; 
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const HomeContainer = styled.div`
    justify-content: center;
    background-color: ${({ theme }) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    margin: 30px;
    padding: 60px 90px;
`

const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1.5;
    ${StyledLink} {
        max-width: 250px;
    }
`

const HomeTitle = styled.h2`
    padding-bottom: 30px;
    max-width: 280px;
    line-height: 50px;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const TrophyImage = styled.img`
    flex: 0.5;
`

function Home() {
    const { theme } = useTheme()

    return (
        <HomeWrapper>
            <HomeContainer theme={theme}>
                <LeftColumn>
                    <HomeTitle theme={theme}>
                        Prepare, schedule and manage your tournaments and championships
                    </HomeTitle>
                    <StyledLink to="/form" $isFullLink>
                        Start
                    </StyledLink>
                </LeftColumn>
                <TrophyImage src={trophy}/>
            </HomeContainer>
        </HomeWrapper>
    )
}

export default Home
