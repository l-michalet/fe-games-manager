import React, { ChangeEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, FormActions } from '../../context/FormContext';
import { Theme } from '../../components/Theme';
import styled from "styled-components";

const Container = styled.div`
  padding: 50px;

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
    width: 120px;
    height: 50px;
    border-radius: 10px;
    background-color: rgb(91, 24, 153);
    color: whitesmoke;
    border: none;
    margin-top: 20px;
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

function FormStep1() {
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
            alert('preencha os dados corretamente');
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
            <Container>
                <p className="passo">Passo 1/3</p>
                <h2>Vamos começar com o seu nome</h2>
                <p>Preencha o campo com seu nome</p>
                <label>Seu nome completo </label>
                <input type="text" autoFocus onChange={handleNameChange} />
                <button onClick={handleNextStep}>Próximo</button>
            </Container>
        </Theme>
    );
}

export default FormStep1;