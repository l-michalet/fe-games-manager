import React, {useEffect} from 'react';
import { Theme } from '../../components/Theme';
import {FormActions, useForm} from '../../context/FormContext';
import { useHistory } from 'react-router-dom';
import { ReactComponent as CheckIcon } from '../../assets/check.svg';
import styled from "styled-components";

const Container = styled.div`
  padding: 40px;

  p {
    display: block;
    font-size: 25px;
    color: rgb(91, 24, 153);
  }
  h2 {
    display: block;
    margin-bottom: 5px;
    color: rgb(91, 24, 153);
    font-size: 35px;
  }
  .check-email {
    font-size: 15px;
  }
`;

const IconArea = styled.div`
  margin: 30px;
`;


function FormStep4() {
    const { state, dispatch } = useForm()
    const history = useHistory();

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
            <Container>
                <h2>Parabéns</h2>
                <p>Cadastro enviado com sucesso!</p>

                <IconArea>
                    <CheckIcon fill="rgb(91, 24, 153)" width={120} height={120} />
                </IconArea>

                <p className="check-email">
                    Enviamos um e-mail para: <b>{state.email}</b> com a confirmação do
                    cadastro
                </p>
            </Container>
        </Theme>
    );
}

export default FormStep4;
