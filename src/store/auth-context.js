import React from 'react';

const AuthContext =React.createContext({
    isLoggedIn: false
});

export default AuthContext;

//note AuthContext is not a component but it has an object <AuthContext.provider> is a component