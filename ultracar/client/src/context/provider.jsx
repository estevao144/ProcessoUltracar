import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function Provider({ children }) {

    const [user, setUser] = useState({
        name: '',
        email: '',
        cpf:'',
        role: '',
    });
    
    const contextValue = useMemo(() => ({ user, setUser }), [user, setUser]);
    
    return (
        <Context.Provider value={ contextValue }>
        { children }
        </Context.Provider>
    );
    }