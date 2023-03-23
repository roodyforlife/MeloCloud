import React from 'react'
import Input from '../components/UI/Input/Input';
import cl from '../styles/Login.module.css';
import GoogleButton from '../components/UI/GoogleButton/GoogleButton';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import DefaultButton from '../components/UI/Buttons/DefaultButton/DefaultButton';
import logo1 from '../assets/logo1_white.png'

export default function UserLogin() {
    const googleLogin = useGoogleLogin({
        onSuccess: async response => {
            const {data} = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo?access_token=AIzaSyD-eYvlHA1reXDjzcXan1Q-peKyPVAj3ZA", {
              headers: {
                "Authorization": `Bearer ${response.access_token}`
              }
            })
        }
      });
  return (
    <div className={cl.login}>
        <div className={cl.logo}>
            <div className={cl.image}>
                <img src={logo1} alt="" />
            </div>
        </div>
        <div className={cl.content}>
        <GoogleButton onClick={(event) => {
        event.preventDefault();
        googleLogin();
       }}>
          Sign in with Google
       </GoogleButton>
       <div className={cl.hr}>
        <span>Или</span>
        <div className={cl.hrLine}>
        </div>
       </div>
            <Input title="Електронная почта" type="email" />
            <Input title="Пароль" type="password" />
            <DefaultButton>Войти</DefaultButton>
        </div>
    </div>
  )
}
