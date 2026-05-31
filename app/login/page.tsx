export default function Login() {
  return (
    <main style={{fontFamily: 'sans-serif', background: '#f5f5f5', minHeight: '100vh'}}>

      {/* Navbar */}
      <nav style={{background: '#fff', padding: '14px 24px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a href="/" style={{fontSize: '22px', fontWeight: '600', color: '#185FA5', textDecoration: 'none'}}>
          True<span style={{color: '#1D9E75'}}>Swap</span>
        </a>
      </nav>

      {/* Login Card */}
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 16px'}}>
        <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '16px', padding: '32px 28px', width: '100%', maxWidth: '400px'}}>
          
          <div style={{textAlign: 'center', marginBottom: '24px'}}>
            <div style={{display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#EAF3DE', color: '#3B6D11', fontSize: '12px', padding: '4px 14px', borderRadius: '20px', marginBottom: '14px'}}>
              ✓ No KYC — just your phone number
            </div>
            <h1 style={{fontSize: '22px', fontWeight: '600', color: '#111', marginBottom: '6px'}}>Welcome to TrueSwap</h1>
            <p style={{fontSize: '14px', color: '#777'}}>Login or create your account in seconds</p>
          </div>

          {/* Tabs */}
          <div style={{display: 'flex', border: '1px solid #eee', borderRadius: '10px', overflow: 'hidden', marginBottom: '24px'}}>
            <button style={{flex: 1, padding: '10px', background: '#185FA5', color: '#fff', border: 'none', fontSize: '14px', cursor: 'pointer'}}>Login</button>
            <button style={{flex: 1, padding: '10px', background: 'transparent', color: '#777', border: 'none', fontSize: '14px', cursor: 'pointer'}}>New Account</button>
          </div>

          {/* Phone Input */}
          <div style={{marginBottom: '16px'}}>
            <label style={{display: 'block', fontSize: '13px', color: '#777', marginBottom: '6px'}}>Mobile number</label>
            <div style={{display: 'flex', gap: '8px'}}>
              <div style={{padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', background: '#f5f5f5', fontSize: '14px', color: '#555'}}>🇮🇳 +91</div>
              <input type="tel" placeholder="10-digit number" maxLength={10} style={{flex: 1, padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', outline: 'none'}} />
            </div>
          </div>

          {/* OTP Button */}
          <button style={{width: '100%', padding: '12px', background: 'transparent', color: '#185FA5', border: '1px solid #185FA5', borderRadius: '8px', fontSize: '14px', cursor: 'pointer', marginBottom: '16px'}}>
            Send OTP
          </button>

          {/* Divider */}
          <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px'}}>
            <div style={{flex: 1, height: '1px', background: '#eee'}}></div>
            <span style={{fontSize: '12px', color: '#aaa'}}>or</span>
            <div style={{flex: 1, height: '1px', background: '#eee'}}></div>
          </div>

          {/* Google Button */}
          <button style={{width: '100%', padding: '12px', background: '#f5f5f5', color: '#333', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', cursor: 'pointer', marginBottom: '20px'}}>
            🔵 Continue with Google
          </button>

          {/* Info note */}
          <div style={{background: '#E6F1FB', borderRadius: '8px', padding: '12px 14px', fontSize: '12px', color: '#0C447C', lineHeight: '1.6'}}>
            ℹ️ Your phone number is your identity on TrueSwap. No Aadhaar, no PAN required.
          </div>

        </div>
      </div>

    </main>
  )
}