import React, {useEffect} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Theme } from '../../../components/TournamentForm/Theme';
import SelectOption from '../../../components/TournamentForm/SelectOption';
import {FormActions, useForm} from '../../../context/FormContext';
import styled from "styled-components";
import {useTheme} from "../../../utils/hooks";

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

function FormStep3() {
    const { theme } = useTheme()
    const { state, dispatch } = useForm();
    const history = useHistory();

    const handleNextStep = () => {
        history.push('/form/step4');
    };

    useEffect(() => {
        if (state.name === '') {
            history.push('/form/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3,
            });
        }
    }, []);

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level,
        });
    };

    return (
        <Theme>
            <Container theme={theme}>
                <p className="step">Step 3/4</p>
                <h2>How do you see {state.name}?</h2>
                <p>Please choose between</p>
                <SelectOption
                    title="Tournament"
                    description="A tournament contains group stages and a final phase. Rules will be defined next page."
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />
                <SelectOption
                    title="Championship"
                    description="A championship consists on all the teams playing against each others."
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />
                <div>
                    <Link to="/">Back</Link>
                    <button onClick={handleNextStep}>Next</button>
                </div>
            </Container>
        </Theme>
    );
}

export default FormStep3;