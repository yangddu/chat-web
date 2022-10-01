import React from 'react';
import './LoginForm.scss';

export default function LoginForm() {
  return (
    <div>
      <header>
        <h1>
          <a href="">
            <span>logo</span>
          </a>
        </h1>
      </header>
      <div className="login">
        <div className="login-form-wrap">
          <div className="login-form">
            <h2 className="form-title">hi 계정으로 로그인</h2>
            <form>
              <fieldset>
                <ul>
                  <li>
                    <label>이메일 주소</label>
                    <input type="text" />
                  </li>
                  <li>
                    <label>비밀번호</label>
                    <input type="password" />
                  </li>
                </ul>
                <div className="form-buttons">
                  <button type="submit">로그인</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
