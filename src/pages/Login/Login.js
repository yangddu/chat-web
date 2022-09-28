import React from 'react';
import './Login.scss';

export default function Login() {
  return (
    <div className="wrapper">
      <div className="vertical-wrapper top"></div>
      <div className="vertical-wrapper middle">
        <img src="https://swit.io/assets/images/lib/ui/illust/normal-welcome-light.svg" />
        <div className="header-layout">협업의 시작, we chat!</div>
        <div className="button-layout">
          <button className="free-standard">Free/Standard</button>
          <button className="advanced">Advanced</button>
        </div>
      </div>
    </div>
  );
}
