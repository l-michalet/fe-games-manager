import styled from 'styled-components'
import {useFetch, useTheme} from "../../utils/hooks";
import {Loader, StyledLink} from "../../utils/style/atoms";
import colors from "../../utils/style/colors";

const GroupsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 90px;
    padding: 30px;
    background-color: ${({ theme }) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const GroupsTitle= styled.h2`
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    font-size: 30px;
    font-weight: bold;
    max-width: 60%;
    text-align: center;
    & > span {
        padding-left: 10px;
    }
`

const GroupsList = styled.div`
  & > p {
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
    margin-block-start: 5px;
    font-size: 18px;
  }
  & > span {
    font-size: 20px;
  }
  padding-bottom: 20px;
`

const GroupList = styled.div`
  & > p {
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
    margin-block-start: 5px;
    font-size: 18px;
  }
  & > span {
    font-size: 20px;
  }
`

const TeamName = styled.span`
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
    text-transform: capitalize;
`

const GroupName = styled.span`
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    text-transform: capitalize;
    padding-right: 15px;
`

const ErrorText = styled.div`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const GroupsLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Groups() {
    const { theme } = useTheme()

    const { data, isLoading, error } = useFetch(
        `http://localhost:8080/groups/prepare`
    )

    if (error) {
        return <ErrorText>There is a problem</ErrorText>
    }

    const resultsData = data
    console.log(data)

    return isLoading ? (
        <GroupsLoaderWrapper>
            <Loader data-testid="loader"/>
        </GroupsLoaderWrapper>
    ) : (
        <GroupsContainer theme={theme}>
            <GroupsTitle theme={theme}>
                Here are the different groups for your tournament:
            </GroupsTitle>
            <GroupsList theme={theme}>
                {resultsData && resultsData.map((group) => (
                    <GroupList theme={theme}>
                        <GroupName theme={theme}>
                            Group {group.name}
                        </GroupName>
                        {group.teams.map((team) => (
                            <TeamName theme={theme}>
                                {team.fullName} | {}
                            </TeamName>
                        ))}
                    </GroupList>
                ))}
            </GroupsList>
            <StyledLink $isFullLink to="/schedule">
                Create groups
            </StyledLink>
        </GroupsContainer>
    )
}

export default Groups;