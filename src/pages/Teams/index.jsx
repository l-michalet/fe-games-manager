import styled from 'styled-components'
import {useFetch, useTheme} from "../../utils/hooks";
import {Loader, StyledLink} from "../../utils/style/atoms";
import colors from "../../utils/style/colors";

const TeamsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 90px;
    padding: 30px;
`

const TeamsTitle= styled.h2`
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    font-size: 30px;
    font-weight: bold;
    max-width: 60%;
    text-align: center;
    & > span {
        padding-left: 10px;
    }
`

const TeamsList = styled.span`
    display: flex;
    align-items: left;
    flex-direction: column;
    padding-bottom: 20px;
`

const TeamTitle = styled.span`
    font-size: 20px;
    color: ${({ theme }) => theme === 'light' ? colors.primary : colors.backgroundLight};
    text-transform: capitalize;
`

const TeamLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ErrorText = styled.div`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`


function Teams() {
    const { theme } = useTheme()

    const { data, isLoading, error } = useFetch(
        `http://localhost:8080/teams`
    )

    if (error) {
        return <ErrorText>There is a problem</ErrorText>
    }

    const resultsData = data

    return isLoading ? (
        <TeamLoaderWrapper>
            <Loader data-testid="loader"/>
        </TeamLoaderWrapper>
    ) : (
        <TeamsContainer theme={theme}>
            <TeamsTitle theme={theme}>
                Here are the international teams available for your tournament:
            </TeamsTitle>
            <TeamsList>
                {resultsData && resultsData.map((result, index) => (
                    <TeamTitle key={`result-title-${index}-${result.fullName}`} theme={theme}>
                        {result.fullName}
                    </TeamTitle>
                ))}
            </TeamsList>
            <StyledLink $isFullLink to="/groups">
                Create groups
            </StyledLink>
        </TeamsContainer>
    )
}

export default Teams;