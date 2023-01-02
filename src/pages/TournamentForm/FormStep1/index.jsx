import React, { ChangeEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, FormActions } from '../../../context/FormContext';
import { Theme } from '../../../components/TournamentForm/Theme';
import styled from "styled-components";
import {useTheme} from "../../../utils/hooks";

const Container = styled.div`
  padding: 50px;

  p {
    display: block;
  }
  h2 {
    display: block;
    margin-bottom: 5px;
    color: ${({ theme }) => (theme === 'light' ? 'rgb(91, 24, 153)'  : '#000000')} ;
  }
  label {
    display: block;
    margin-top: 40px;
    margin-bottom: 5px;
  }
  button {
    width: 120px;
    height: 50px;
    border-radius: 10px;
    background-color: ${({ theme }) => (theme === 'light' ? 'rgb(91, 24, 153)'  : '#000000')} ;
    color: whitesmoke;
    border: none;
    margin-top: 20px;
  }
  .step {
    margin-bottom: 20px;
  }
  input {
    display: block;
    margin-top: 7px;
    box-sizing: border-box;
    width: 100%;
    padding: 20px 10px;
    border: 2px solid ${({ theme }) => (theme === 'light' ? 'rgb(91, 24, 153)'  : '#000000')} ;
    border-radius: 10px;
    font-size: 28px;
    outline: 0;
    font-size: 15px;
    background-color: rgb(235, 235, 235);
  }
`;

function FormStep1() {
    const { theme } = useTheme()
    const history = useHistory();
    const { state, dispatch} = useForm()

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value,
        });
    };

    const handleNextStep = () => {
        if (state.name !== '') {
            history.push('/form/step2');
        } else {
            alert('something is wrong');
        }
    };

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1,
        });
    }, []);

    return (
        <Theme>
            <Container theme={theme}>
                <p className="step">Step 1/4</p>
                <h2>Do you have a name for your tournament?</h2>
                <p>Please choose a nice one!</p>
                <label>Tournament's name:</label>
                <input type="text" autoFocus onChange={handleNameChange} />
                <button onClick={handleNextStep}>Next</button>
            </Container>
        </Theme>
    );
}

export default FormStep1;