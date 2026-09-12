import { useState } from 'react';
import './Login.css';

function Login({ onLoginSuccess, onCancel, roleTitle = "Ban Giám Khảo & Thư Ký" }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      setError('Vui lòng nhập mật khẩu truy cập');
      return;
    }

    if (password === 'hungvuong' || password === '123456') {
      setError('');
      onLoginSuccess(true);
    } else {
      setError('Mật khẩu không đúng. Vui lòng liên hệ Thư ký Hội đồng.');
    }
  };

  return (
    <div className="login-panel-container">
      <div className="login-card">
        <div className="login-header">
          <span className="login-badge">Xác thực quyền truy cập</span>
          <h2 className="login-title">Khu Vực {roleTitle}</h2>
          <p className="login-subtitle">Vui lòng nhập mật khẩu để thao tác chấm điểm và quản trị đề án</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="login-error">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="password">Mật khẩu bảo mật</label>
            <input 
              type="password" 
              id="password"
              className="login-input"
              placeholder="Nhập mật khẩu..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
          </div>

          <div className="login-actions">
            <button 
              type="submit" 
              className="btn btn-primary login-submit-btn"
            >
              Xác Nhận Đăng Nhập
            </button>
            {onCancel && (
              <button 
                type="button" 
                className="btn btn-outline"
                onClick={onCancel}
              >
                Quay Lại Trang Chủ
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
