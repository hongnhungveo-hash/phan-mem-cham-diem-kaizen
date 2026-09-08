import { useState } from 'react';
import './Login.css';
import logoImg from './assets/logo.png';

function Login({ onLoginSuccess }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      setError('Vui lòng nhập mật khẩu');
      return;
    }

    // Passcode chung cho tất cả ban giám khảo
    if (password === 'hungvuong' || password === '123456') {
      setError('');
      onLoginSuccess(true);
    } else {
      setError('Mật khẩu không đúng');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box glass-panel">
        <div className="login-header">
          <img 
            src={logoImg} 
            alt="Logo Bệnh viện Đa khoa Hùng Vương" 
            className="login-logo" 
            onError={(e) => { e.currentTarget.src = './logo.png' }}
          />
          <h2 className="login-title">Hệ thống Y tế Hùng Vương</h2>
          <p className="login-subtitle">Đăng nhập để chấm điểm đề án</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="login-error">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="password">Mật khẩu truy cập</label>
            <input 
              type="password" 
              id="password"
              placeholder="Nhập mật khẩu..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary login-btn"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
