import React, {useEffect} from 'react';
import { Theme } from '../../../components/TournamentForm/Theme';
import {FormActions, useForm} from '../../../context/FormContext';
import { useHistory } from 'react-router-dom';
import { ReactComponent as CheckIcon } from '../../../assets/check.svg';
import styled from "styled-components";
import {useTheme} from "../../../utils/hooks";

const Container = styled.div`
  padding: 40px;

  p {
    display: block;
    font-size: 25px;
    color:${({ theme }) => (theme === 'light' ? 'rgb(91, 24, 153)'  : '#000000')};
  }
  h2 {
    display: block;
    margin-bottom: 5px;
    color: ${({ theme }) => (theme === 'light' ? 'rgb(91, 24, 153)'  : '#000000')};
    font-size: 35px;
  }
  .check-email {
    font-size: 15px;
  }
`;

const IconArea = styled.div`
  margin: 30px;
`;


function FormStep5() {
    const { theme } = useTheme()
    const { state, dispatch } = useForm()
    const history = useHistory();

    useEffect(() => {
        if (state.name === '') {
            history.push('/form/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 5,
            });
        }
    }, []);

    return (
        <Theme>
            <Container theme={theme}>
                <h2>Congrats!</h2>
                <p>Your tournament is ready to be generated!</p>

                <IconArea>
                    <CheckIcon fill="rgb(91, 24, 153)" width={120} height={120} />
                </IconArea>
            </Container>
        </Theme>
    );
}

export default FormStep5;
