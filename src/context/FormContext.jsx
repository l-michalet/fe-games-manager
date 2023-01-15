import {createContext, useContext, useReducer} from 'react';

const initialData = {
    currentStep: 0,
    name: '',
    selectedTeamIds: [],
    nbOfGroups: 0,
    tournamentType: 'tournamentType',
};

export const FormActions = {
    setCurrentStep: 'setCurrentStep',
    setName: 'setName',
    setSelectedTeamIds: 'setSelectedTeamIds',
    setNbOfGroups: 'setNbOfGroups',
    setTournamentType: 'setTournamentType',
};


export const FormContext =  createContext()

const formReducer = (state, action) => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload };
        case FormActions.setName:
            return { ...state, name: action.payload };
        case FormActions.setSelectedTeamIds:
            return { ...state, selectedTeamIds: action.payload };
        case FormActions.setNbOfGroups:
            return { ...state, nbOfGroups: action.payload };
        case FormActions.setTournamentType:
            return { ...state, tournamentType: action.payload };
        default:
            return state;
    }
};

export const FormProvider = ({children}) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = {state, dispatch};

    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
};

export const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined) {
        throw new Error('useForm must be used within a FormProvider');
    }
    return context;
};

