import React, {useEffect} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import SelectOption from '../../components/SelectOption';
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
  .passo {
    margin-bottom: 20px;
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
`;

function FormStep2() {
    const { state, dispatch } = useForm();
    const history = useHistory();

    const handleNextStep = () => {
        history.push('/form/step3');
    };

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

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level,
        });
    };

    return (
        <Theme>
            <Container>
                <p className="passo">Passo 2/3</p>
                <h2>{state.name}, o que melhor descreve você?</h2>
                <p>Escolha a melhor opção que descreve o seu nível atualmente</p>
                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />
                <SelectOption
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />
                <div>
                    <Link to="/">Voltar</Link>
                    <button onClick={handleNextStep}>Próximo</button>
                </div>
            </Container>
        </Theme>
    );
}

export default FormStep2;