import React, { ChangeEvent, useEffect } from 'react';
import { Theme } from '../../components/Theme';
import { Link, useHistory } from 'react-router-dom';
import {FormActions, useForm} from '../../context/FormContext';
import styled from "styled-components";

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
    background-color: rgb(91, 24, 153);
    color: whitesmoke;
    border: none;
    margin-top: 20px;
  }
  a {
    padding: 0 15px 0 15px;
    text-decoration: none;
    color: rgb(91, 24, 153);
  }
  .passo {
    margin-bottom: 20px;
  }
  input {
    display: block;
    margin-top: 7px;
    box-sizing: border-box;
    width: 100%;
    padding: 20px 10px;
    border: 2px solid rgb(91, 24, 153);
    border-radius: 10px;
    font-size: 28px;
    outline: 0;
    font-size: 15px;
    background-color: rgb(235, 235, 235);
  }
`;

function FormStep3() {
    const { state, dispatch } = useForm()
    const history = useHistory();

    const handleNextStep = () => {
        if (state.email !== '' && state.github !== '') {
            history.push('/form/step4');
        } else {
            alert('preencha os dados corretamente');
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
                payload: 3,
            });
        }
    }, []);

    return (
        <Theme>
            <Container>
                <p className='passo'>Passo 3/3</p>
                <h2>Legal {state.name}, onde te achamos?</h2>
                <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

                <label>Qual o seu email?</label>
                <input 
                type="email" 
                onChange={handleEmailChange}
                />

                <label>Qual é seu GitHub?</label>
                <input 
                type="url" 
                onChange={handleUrlChange}
                />

                <div>
                    <Link to='/form/step2'>Voltar</Link>
                    <button onClick={handleNextStep}>Finalizar</button>
                </div>

            </Container>
        </Theme>
    )
}

export default FormStep3;