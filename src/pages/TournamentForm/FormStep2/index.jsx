import React, {useEffect} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Theme } from '../../../components/TournamentForm/Theme';
import {FormActions, useForm} from '../../../context/FormContext';
import styled from "styled-components";
import {useFetch, useTheme} from "../../../utils/hooks";
import {Loader} from "../../../utils/style/atoms";
import TeamsCheckboxList from "../../../components/TournamentForm/TeamsCheckboxList";

const Container = styled.div`
  padding: 30px;

  p {
    display: block;
  }
  h2 {
    display: block;
    margin-bottom: 5px;
    color: ${({ theme }) => (theme === 'light' ? 'rgb(91, 24, 153)'  : '#000000')};
  }
  
  .step {
    margin-bottom: 20px;
  }
  button {
    cursor: pointer;
    width: 120px;
    height: 50px;
    border-radius: 10px;
    background-color: ${({ theme }) => (theme === 'light' ? 'rgb(91, 24, 153)'  : '#000000')};
    color: whitesmoke;
    border: none;
    margin-top: 20px;
  }

  a {
    padding: 0 15px 0 15px;
    text-decoration: none;
    color: ${({ theme }) => (theme === 'light' ? 'rgb(91, 24, 153)'  : '#000000')};
  }
`;

const ErrorText = styled.div`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const TeamsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TeamLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function FormStep2() {
    const { theme } = useTheme()
    const { state, dispatch } = useForm();
    const history = useHistory();

    useEffect(() => {
        if (state.name === '') {
            history.push('/form/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2,
            });
        }
    }, []);

    const { data, isLoading, error } = useFetch(`http://localhost:8080/teams`, 'GET', null, [])

    const handleSelectedTeamIdsChange = (selectedTeamIds) => {
        dispatch({
            type: FormActions.setSelectedTeamIds,
            payload: selectedTeamIds,
        });
    };

    const handleNextStep = () => {
        history.push('/form/step3');
    };

    return (
        <Theme>
            <Container theme={theme}>
                <p className="step">Step 2/4</p>
                <h2>Choose your teams</h2>
                <p>These are the available teams for now:</p>
                {isLoading ? (
                    <TeamLoaderWrapper>
                        <Loader data-testid="loader"/>
                    </TeamLoaderWrapper>
                ) : ( error? (
                        <ErrorText theme={theme}>There is a problem</ErrorText>
                    ) : (
                        <TeamsContainer theme={theme}>
                            <TeamsCheckboxList teamInfos={data} onSelectedTeamIdsChange={handleSelectedTeamIdsChange}></TeamsCheckboxList>
                        </TeamsContainer>
                    )
                )}
                <div>
                    <Link to="/form">Back</Link>
                    <button onClick={handleNextStep}>Next</button>
                </div>
            </Container>
        </Theme>
    );
}

export default FormStep2;