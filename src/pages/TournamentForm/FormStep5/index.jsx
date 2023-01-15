import React, {useEffect, useState} from 'react';
import { Theme } from '../../../components/TournamentForm/Theme';
import {FormActions, useForm} from '../../../context/FormContext';
import { useHistory } from 'react-router-dom';
import { ReactComponent as CheckIcon } from '../../../assets/check.svg';
import styled from "styled-components";
import {useCreateTournament, useFetch, useTheme} from "../../../utils/hooks";
import {Loader} from "../../../utils/style/atoms";

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

const ErrorText = styled.div`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`


function FormStep5() {
    const { theme } = useTheme()
    const { state, dispatch } = useForm()
    const history = useHistory();
    const { isLoading, error, createTournament } = useCreateTournament();

    useEffect(() => {
        if (state.name === '') {
            history.push('/form/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 5,
            });
        }
    }, [createTournament]);

    return (
        <Theme>
            <Container theme={theme}>
                {isLoading ? (
                        <LoaderWrapper>
                            <Loader data-testid="loader"/>
                        </LoaderWrapper>
                    ) : ( error ? (
                            <ErrorText theme={theme}>There is a problem</ErrorText>
                        ) : (
                            <>
                                <h2>Congrats!</h2>
                                <p>Your tournament is ready to start!</p>
                                <IconArea>
                                    <CheckIcon fill="rgb(91, 24, 153)" width={120} height={120} />
                                </IconArea>
                            </>
                        )
                    )
                }
            </Container>
        </Theme>
    );
}

export default FormStep5;
