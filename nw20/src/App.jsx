import React from 'react';
import { useMsal } from '@azure/msal-react'; /* add */
import { loginRequest } from './authConfig';

function App() {

    const { instance, accounts } = useMsal();

    const handleLogin = () => {
        instance.loginPopup(loginRequest).catch(e => {
            console.error(e);
        });
    };

    const handleLogout = () => {
        instance.logoutPopup();
    };


    return (
        <>

            {accounts.length > 0 ? (
                <>
                    <p>Welcome, {accounts[0].username}</p>

                    <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <button className="btn btn-primary" onClick={handleLogin}>Login with Azure</button>
            )}



            <div className="m-2" data-theme="dark">
                <button className="btn btn-primary">Dark Themed Button</button>
            </div>
            <div className="m-2" data-theme="light">
                <button className="btn btn-primary">Light Themed Button</button>
            </div>
        </>
    )
}
export default App