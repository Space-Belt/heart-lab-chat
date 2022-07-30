import { createContext, useState } from 'react';

const LoginJoinContext = createContext({
    ljCheck: 'login',
    changeStatus: () => {},
});

interface Props {
    children: JSX.Element | JSX.Element[];
}

const LJProvider = ({ children }: Props): JSX.Element => {
    const [ljCheck, setljCheck] = useState('login');

    const changeStatus = (): void => {
        if (ljCheck === 'login') {
            setljCheck('join');
        } else if (ljCheck === 'join') {
            setljCheck('login');
        }
    };
    return (
        <LoginJoinContext.Provider
            value={{
                ljCheck,
                changeStatus,
            }}
        >
            {children}
        </LoginJoinContext.Provider>
    );
};

export { LoginJoinContext, LJProvider };
