import { useState } from "react";
import styled from "styled-components";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    function login (e) {
        e.preventDefault()
        if (!email && !password) {
            return setError('Please enter your email address <br/> or mobile number. ')
        } else if (!password) {
            return setError('Please enter your password.')
        }
        setError('')
        console.log('Login', email);
    }
    function register (e) {
        e.preventDefault()
        console.log('Register');
    }
    
  return (
    <LoginStyled>
      <div className="left-container">
        <div className="left">
          <img src="/logo.svg" alt="logo" />
          <h1>
            Welcome to your <br />
            professional <br />
            community
          </h1>
          <form action="">
            <span>Email</span>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <span className="password">Password</span>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            {error ? <span dangerouslySetInnerHTML={{__html: error}} className='error'/> : ''}
            <div className="options">
              <div className="checkbox">
                <div className="wrapper">
                  <input type="checkbox" />
                </div>
                <span>Stay connected</span>
              </div>
              <span>Forgot your password?</span>
            </div>
            <button onClick={login}>Login</button>
            <button className="register" onClick={register}>Register</button>
          </form>
        </div>
      </div>
      <div className="right">
        <img src="/office.svg" alt="office" />
      </div>
    </LoginStyled>
  );
}

const LoginStyled = styled.div`
  display: flex;
  height: 100vh;
  color: white;
  .left-container {
    flex: 0.4;
    padding: 0px 20px;
    background: rgb(1, 71, 107);
    background: linear-gradient(
      rgba(1, 71, 107, 1) 0%,
      rgba(26, 130, 203, 1) 100%
    );
    display: flex;
    .left {
      margin: auto;
      h1 {
        font-size: 34px;
        margin-bottom: 40px;
      }
      img {
        height: 100px;
        width: 120px;
      }
      form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-weight: 300;
        .password {
          margin-top: 30px;
        }
        .error {
            font-weight: 600;
            margin-top: 10px;
        }
        input {
          padding: 6px 0;
          outline: none;
          border: none;
          color: white;
          background-color: transparent;
          border-bottom: 1px solid white;
          &::placeholder {
            color: white;
            font-weight: 300;
          }
        }

        .options {
          margin: 20px 0;
          font-size: 12px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: space-between;
          .checkbox {
            display: flex;
            gap: 6px;
            align-items: center;
            .wrapper {
              width: 10px;
              height: 10px;
              padding: 3px;
              border: 1px solid white;
              border-radius: 50%;
            }
            input {
              padding: 0;
              appearance: none;
              -webkit-appearance: none;
              height: 100%;
              width: 100%;
              background-color: transparent;
              border-radius: 50px;
              border: none;
              cursor: pointer;
              transition: background-color 300ms;
              &:checked {
                background-color: white;
              }
            }
          }
        }
        button {
          cursor: pointer;
          border: none;
          padding: 10px 0;
          border-radius: 40px;
          color: #1a82cb;
          font-weight: 500;
          background-color: white;
        }
        .register {
          background-color: #01476b;
          color: white;
        }
      }
    }
  }

  .right {
    flex: 0.6;
    display: flex;
    padding: 50px;
    img {
        margin: auto;
        max-width: 600px;
      width: 100%;
    }
  }
`;
