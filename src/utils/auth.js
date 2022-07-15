import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { BASE_URL } from '../config';
import { Alert } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);

    const register = (email, username, password) => {
        setIsLoading(true);
        console.log(email, username, password);
        const data = { email: email, username: username, password: password };
        axios
            .post(`${BASE_URL}/api/v1/auth/users/`, data)
            .then(res => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setIsLoading(false);
                console.log(userInfo);
                login(username, password);
            })
            .catch(e => {
                let s = "";
                if (e.response.data.email)
                    s += 'Email:' + e.response.data.email.toString() + "\n";
                if (e.response.data.username)
                    s += 'Username: ' + e.response.data.username.toString() + "\n";
                if (e.response.data.password)
                    s += 'Password:' + e.response.data.password.toString() + "\n";

                alert(s);
                console.log(s);


                //console.log(`register error ${e}`);
                setIsLoading(false);
            });
    };

    const login = (username, password) => {
        setIsLoading(true);
        const data = { username: username, password: password };
        axios
            .post(`${BASE_URL}/auth/token/login/`, data)
            .then(res => {
                let userInf = res.data;

                setUserInfo(userInf);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setIsLoading(false);
            })
            .catch(e => {
                console.log(e.response.data);
                if (e.response.data) {
                    alert(JSON.stringify(e.response.data));
                }
                console.log(`login error ${e}`);
                setIsLoading(false);
            });
    };

    const logout = () => {

        setIsLoading(true);
        const data = { 'auth_token': userInfo.auth_token };
        axios
            .post(`${BASE_URL}/auth/token/logout/`, {}, { headers: { Authorization: `Token ${userInfo.auth_token}` } })
            .then(res => {
                console.log(res.data);
                AsyncStorage.removeItem('userInfo');
                setUserInfo({});
                setIsLoading(false);
            })
            .catch(e => {
                console.log(`logout error ${e}`);
                setIsLoading(false);
            });
    };

    const isLoggedIn = async () => {
        try {
            setSplashLoading(true);

            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);

            if (userInfo) {
                setUserInfo(userInfo);
            }

            setSplashLoading(false);
        } catch (e) {
            setSplashLoading(false);
            console.log(`is logged in error ${e}`);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                userInfo,
                splashLoading,
                register,
                login,
                logout,
            }}>
            {children}
        </AuthContext.Provider>
    );
};

