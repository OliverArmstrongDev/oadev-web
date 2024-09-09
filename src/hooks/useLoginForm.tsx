import { useContext } from 'react';
import { FormContext } from '../contexts/FormContext';

export const useLoginForm = () => {
    const context = useContext(FormContext);

    if (context === null) {
        throw new Error('useLoginForm must be used within a FormContextProvider!');
    }

    return context;
}
