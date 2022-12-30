import styled from 'styled-components'
import {useFetch, useTheme} from "../../utils/hooks";
import {Loader, StyledLink} from "../../utils/style/atoms";
import colors from "../../utils/style/colors";

const ScheduleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 90px;
    padding: 30px;
    background-color: ${({ theme }) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ScheduleTitle= styled.h2`
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    font-size: 30px;
    font-weight: bold;
    max-width: 60%;
    text-align: center;
    & > span {
        padding-left: 10px;
    }
`

const DaysContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 90px;
    padding: 30px;
    background-color: ${({ theme }) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const GroupsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 90px;
    padding: 30px;
    background-color: ${({ theme }) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const GamesList = styled.div`
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

const Game = styled.div`
  & > p {
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
    margin-block-start: 5px;
    font-size: 18px;
  }
  & > span {
    font-size: 20px;
  }
`

const GameName = styled.span`
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
`

const GroupName = styled.span`
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    text-transform: capitalize;
    padding-right: 15px;
`

const ErrorText = styled.div`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const ScheduleLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Schedule() {
    const { theme } = useTheme()

    const { data, isLoading, error } = useFetch(
        `http://localhost:8080/groups/schedule`
    )

    if (error) {
        return <ErrorText>There is a problem</ErrorText>
    }

    const resultsData = data

    return isLoading ? (
        <ScheduleLoaderWrapper>
            <Loader data-testid="loader"/>
        </ScheduleLoaderWrapper>
    ) : (
        <ScheduleContainer theme={theme}>
            <ScheduleTitle theme={theme}>
                Here is the schedule for all groups:
            </ScheduleTitle>
            <GroupsContainer theme={theme}>
                {resultsData && resultsData.map((group) => (
                    <DaysContainer theme={theme}>
                        <GroupName theme={theme}>
                            Group {group.groupName}
                        </GroupName>
                        {group && group.groupDays.map((groupDays) => (
                            <GamesList theme={theme}>
                                <GroupName theme={theme}>
                                    Day {groupDays.day}
                                </GroupName>
                                {groupDays.games.map((game) => (
                                    <Game theme={theme}>
                                        <GameName theme={theme}>{game.homeTeam} vs {game.awayTeam}</GameName>
                                    </Game>
                                ))}
                            </GamesList>
                        ))}
                    </DaysContainer>
                ))}
            </GroupsContainer>
            <StyledLink $isFullLink to="/schedule">
                Create groups
            </StyledLink>
        </ScheduleContainer>
    )
}

export default Schedule;