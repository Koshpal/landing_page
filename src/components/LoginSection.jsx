import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://api.koshpal.com/api/v1';

const LoginSection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('EMPLOYEE');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(
        `${API_URL}/auth/login`,
        { email, password, role },
        { withCredentials: true }
      );

      // Redirect to the portal on success
      window.location.href = response.data.redirectUrl;
    } catch (err) {
      // On failure, redirect to the login page
      const portalMap = {
        EMPLOYEE: 'https://employee.koshpal.com/login',
        HR: 'https://hr.koshpal.com/login',
        COACH: 'https://coach.koshpal.com/login',
        ADMIN: 'https://admin.koshpal.com/login',
      };
      
      setError(err.response?.data?.message || 'Authentication failed. Redirecting to login page...');
      
      // Redirect to portal login page after 2 seconds
      setTimeout(() => {
        window.location.href = portalMap[role] || 'https://koshpal.com/login';
      }, 2000);
      
      setLoading(false);
    }
  };

  const roleOptions = [
    { value: 'EMPLOYEE', label: 'Employee', icon: '👤' },
    { value: 'HR', label: 'HR Manager', icon: '👥' },
    { value: 'COACH', label: 'Financial Coach', icon: '💼' },
    { value: 'ADMIN', label: 'Administrator', icon: '⚙️' }
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#f5f5f5' }} id="login">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 style={{ 
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: '52px',
            letterSpacing: '-0.01em',
            color: '#262626',
            marginBottom: '16px'
          }}>
            Access Your Dashboard
          </h2>
          <p style={{ 
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.01em',
            color: '#666666'
          }}>
            Sign in to manage your financial wellness journey
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error Message */}
            {error && (
              <div className="px-4 py-3 rounded-lg" style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '12px',
                color: '#d5332a',
                backgroundColor: '#fff0f0',
                border: '1px solid #fad3d1'
              }}>
                {error}
              </div>
            )}

            {/* Role Selector - Card Style */}
            <div>
              <label className="block mb-3" style={{ 
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 600,
                fontSize: '12px',
                lineHeight: '16px',
                letterSpacing: '0.04em',
                color: '#262626'
              }}>
                SELECT YOUR ROLE
              </label>
              <div className="grid grid-cols-2 gap-3">
                {roleOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setRole(option.value)}
                    className="p-4 rounded-lg border-2 transition-all cursor-pointer text-left"
                    style={{
                      backgroundColor: role === option.value ? '#eff1f8' : '#ffffff',
                      borderColor: role === option.value ? '#334eac' : '#e0e0e0',
                      boxShadow: role === option.value ? '0 0 0 3px rgba(51, 78, 172, 0.1)' : 'none'
                    }}
                  >
                    <div className="text-2xl mb-1">{option.icon}</div>
                    <div style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontWeight: 600,
                      fontSize: '14px',
                      color: role === option.value ? '#334eac' : '#262626'
                    }}>
                      {option.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block mb-2" style={{ 
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 600,
                fontSize: '12px',
                lineHeight: '16px',
                letterSpacing: '0.04em',
                color: '#262626'
              }}>
                WORK EMAIL
              </label>
              <div className="relative">
                <Mail className="absolute transform -translate-y-1/2 left-3 top-1/2" style={{ 
                  width: '18px', 
                  height: '18px',
                  color: '#808080'
                }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2.5 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0.01em',
                    color: '#262626',
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #e0e0e0'
                  }}
                  placeholder="you@company.com"
                  required
                  onFocus={(e) => {
                    e.target.style.backgroundColor = '#ffffff';
                    e.target.style.borderColor = '#334eac';
                    e.target.style.boxShadow = '0 0 0 2px rgba(51, 78, 172, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.backgroundColor = '#f5f5f5';
                    e.target.style.borderColor = '#e0e0e0';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block mb-2" style={{ 
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 600,
                fontSize: '12px',
                lineHeight: '16px',
                letterSpacing: '0.04em',
                color: '#262626'
              }}>
                PASSWORD
              </label>
              <div className="relative">
                <Lock className="absolute transform -translate-y-1/2 left-3 top-1/2" style={{ 
                  width: '18px', 
                  height: '18px',
                  color: '#808080'
                }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-2.5 pl-10 pr-12 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0.01em',
                    color: '#262626',
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #e0e0e0'
                  }}
                  placeholder="Enter your password"
                  required
                  onFocus={(e) => {
                    e.target.style.backgroundColor = '#ffffff';
                    e.target.style.borderColor = '#334eac';
                    e.target.style.boxShadow = '0 0 0 2px rgba(51, 78, 172, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.backgroundColor = '#f5f5f5';
                    e.target.style.borderColor = '#e0e0e0';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute transform -translate-y-1/2 right-3 top-1/2 hover:opacity-70"
                  style={{ color: '#808080' }}
                >
                  {showPassword ? <EyeOff style={{ width: '18px', height: '18px' }} /> : <Eye style={{ width: '18px', height: '18px' }} />}
                </button>
              </div>
            </div>

            {/* Demo Credentials */}
            <div className="p-3 rounded-lg" style={{ backgroundColor: '#eff1f8' }}>
              <p style={{ 
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 600,
                fontSize: '11px',
                lineHeight: '16px',
                letterSpacing: '0.02em',
                color: '#334eac',
                marginBottom: '4px'
              }}>
                DEMO CREDENTIALS
              </p>
              <p style={{ 
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '18px',
                color: '#666666'
              }}>
                Email: {role.toLowerCase()}@abc.com<br />
                Password: password123
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0.06em',
                color: '#ffffff',
                background: 'linear-gradient(to right, #334eac, #17a2b8)'
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.target.style.background = 'linear-gradient(to right, #081f5c, #117a8a)';
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.target.style.background = 'linear-gradient(to right, #334eac, #17a2b8)';
                }
              }}
            >
              {loading ? (
                'Signing in...'
              ) : (
                <>
                  Sign In as {roleOptions.find(r => r.value === role)?.label}
                  <ArrowRight style={{ width: '16px', height: '16px' }} />
                </>
              )}
            </button>

            {/* Additional Link */}
            <div className="text-center pt-2">
              <p style={{ 
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '18px',
                color: '#999999'
              }}>
                Need help? <a href="/contact" style={{ color: '#17a2b8', textDecoration: 'none', fontWeight: 600 }}>Contact Support</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
