import React, { ChangeEvent, useEffect } from 'react';
import { Theme } from '../../../components/TournamentForm/Theme';
import { Link, useHistory } from 'react-router-dom';
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
    color: rgb(91, 24, 153);
  }
  label {
    display: block;
    margin-top: 40px;
    margin-bottom: 5px;
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
    color: rgb(91, 24, 153);
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
    border: 2px solid ${({ theme }) => (theme === 'light' ? 'rgb(91, 24, 153)'  : '#000000')};
    border-radius: 10px;
    font-size: 28px;
    outline: 0;
    font-size: 15px;
    background-color: rgb(235, 235, 235);
  }
`;

function FormStep4() {
    const { theme } = useTheme()
    const { state, dispatch } = useForm()
    const history = useHistory();

    const handleNextStep = () => {
        if (state.email !== '' && state.github !== '') {
            history.push('/form/step5');
        } else {
            alert('something is wrong');
        }
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value,
        });
    };

    const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value,
        });
    };

    useEffect(() => {
        if (state.name === '') {
            history.push('/form/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4,
            });
        }
    }, []);

    return (
        <Theme>
            <Container theme={theme}>
                <p className='step'>Step 4/4</p>
                <h2>Let's choose your rules for {state.name}?</h2>
                <p>.</p>

                <label>How many teams per groups?</label>
                <input 
                type="email" 
                onChange={handleEmailChange}
                />

                <label>Do you want home-and-home games?</label>
                <input 
                type="url" 
                onChange={handleUrlChange}
                />

                <div>
                    <Link to='/form/step2'>Back</Link>
                    <button onClick={handleNextStep}>Complete</button>
                </div>

            </Container>
        </Theme>
    )
}

export default FormStep4;