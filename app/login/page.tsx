'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function sendMagicLink() {
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address!')
      return
    }
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: 'https://trueswap.vercel.app'
      }
    })
    setLoading(false)
    if (error) {
      setError(error.message)
    } else {
      setSent(true)
    }
  }

  if (sent) {
    return (
      <main style={{fontFamily: 'sans-serif', background: '#f5f5f5', minHeight: '100vh'}}>
        <nav style={{background: '#fff', padding: '14px 24px', borderBottom: '1px solid #eee'}}>
          <a href="/" style={{fontSize: '22px', fontWeight: '600', color: '#185FA5', textDecoration: 'none'}}>
            True<span style={{color: '#1D9E75'}}>Swap</span>
          </a>
        </nav>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 16px'}}>
          <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '16px', padding: '40px', textAlign: 'center', maxWidth: '400px'}}>
            <div style={{fontSize: '56px', marginBottom: '16px'}}>📧</div>
            <h1 style={{fontSize: '22px', fontWeight: '600', color: '#111', marginBottom: '8px'}}>Check your email!</h1>
            <p style={{fontSize: '14px', color: '#777', marginBottom: '8px'}}>We sent a magic login link to:</p>
            <p style={{fontSize: '15px', fontWeight: '600', color: '#185FA5', marginBottom: '24px'}}>{email}</p>
            <p style={{fontSize: '13px', color: '#777', marginBottom: '24px'}}>Click the link in the email to login. Check spam folder if you don't see it!</p>
            <button onClick={() => setSent(false)} style={{padding: '10px 24px', background: 'transparent', color: '#185FA5', border: '1px solid #185FA5', borderRadius: '8px', fontSize: '14px', cursor: 'pointer'}}>
              ← Try different email
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main style={{fontFamily: 'sans-serif', background: '#f5f5f5', minHeight: '100vh'}}>

      <nav style={{background: '#fff', padding: '14px 24px', borderBottom: '1px solid #eee'}}>
        <a href="/" style={{fontSize: '22px', fontWeight: '600', color: '#185FA5', textDecoration: 'none'}}>
          True<span style={{color: '#1D9E75'}}>Swap</span>
        </a>
      </nav>

      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 16px'}}>
        <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '16px', padding: '32px 28px', width: '100%', maxWidth: '400px'}}>

          <div style={{textAlign: 'center', marginBottom: '24px'}}>
            <div style={{display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#EAF3DE', color: '#3B6D11', fontSize: '12px', padding: '4px 14px', borderRadius: '20px', marginBottom: '14px'}}>
              ✓ No password needed — just your email
            </div>
            <h1 style={{fontSize: '22px', fontWeight: '600', color: '#111', marginBottom: '6px'}}>Welcome to TrueSwap</h1>
            <p style={{fontSize: '14px', color: '#777'}}>We will send you a magic login link instantly</p>
          </div>

          {error && (
            <div style={{background: '#FCEBEB', color: '#A32D2D', padding: '10px 14px', borderRadius: '8px', fontSize: '13px', marginBottom: '16px'}}>
              ⚠️ {error}
            </div>
          )}

          <div style={{marginBottom: '16px'}}>
            <label style={{display: 'block', fontSize: '13px', color: '#777', marginBottom: '6px'}}>Your email address</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="yourname@gmail.com"
              style={{width: '100%', padding: '12px 14px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}}
            />
          </div>

          <button
            onClick={sendMagicLink}
            disabled={loading}
            style={{width: '100%', padding: '13px', background: loading ? '#aaa' : '#185FA5', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '15px', cursor: loading ? 'not-allowed' : 'pointer', marginBottom: '16px'}}
          >
            {loading ? 'Sending...' : '✉️ Send magic link'}
          </button>

          <div style={{background: '#E6F1FB', borderRadius: '8px', padding: '12px 14px', fontSize: '12px', color: '#0C447C', lineHeight: '1.6'}}>
            ℹ️ We will send a login link to your email. Click it and you are logged in — no password ever needed!
          </div>

        </div>
      </div>

    </main>
  )
}