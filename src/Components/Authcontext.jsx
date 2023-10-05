import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigation = useNavigation();
    const [accessToken, setAccessToken] = useState(null);



    const handleLogin = async (username, password) => {
        try {
            const response = await fetch('https://chat-api-with-auth.up.railway.app/auth/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            const data = await response.json();

            if (data.status === 200) {
                console.log("hej")

                await AsyncStorage.setItem('accessToken', data.data.accessToken);
                await AsyncStorage.setItem('userID', data.data._id);

                setAccessToken(data.data.accessToken);


            } else {

                console.log("hej")

            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleRegister = async (username, password) => {
        try {
            const response = await fetch('https://chat-api-with-auth.up.railway.app/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            const data = await response.json();
            console.log(data.status);

            if (data.status === 409) {

                console.log("hej")

            }
            else {

                console.log("hej")

            }
        } catch (error) {
            console.log(error);
        }
    };



    const handleLogout = async () => {
        console.log('handleLogout');
        try {
            await AsyncStorage.removeItem('accessToken');
            setAccessToken(null);
        } catch (error) {
            console.log(error);
        }
    };

    const isLoggedIn = async () => {
        console.log('isLoggedIn');
        try {
            const token = await AsyncStorage.getItem('accessToken');
            setAccessToken(token);

        } catch (error) {
            console.log(error);
        }
    };

   
    

    useEffect(() => {
        isLoggedIn();

    }, []);

    return (
        <AuthContext.Provider
            value={{
               accessToken,
               handleLogout,
               handleLogin,
               handleRegister
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

