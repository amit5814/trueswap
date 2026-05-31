export default function ItemDetail() {
  return (
    <main style={{fontFamily: 'sans-serif', background: '#f5f5f5', minHeight: '100vh'}}>

      {/* Navbar */}
      <nav style={{background: '#fff', padding: '14px 24px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a href="/" style={{fontSize: '22px', fontWeight: '600', color: '#185FA5', textDecoration: 'none'}}>
          True<span style={{color: '#1D9E75'}}>Swap</span>
        </a>
        <a href="/login" style={{fontSize: '14px', color: '#185FA5', textDecoration: 'none'}}>Login</a>
      </nav>

      <div style={{maxWidth: '680px', margin: '0 auto', padding: '24px 16px'}}>

        {/* Image Area */}
        <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '20px', marginBottom: '16px'}}>
          <div style={{background: '#f0f4ff', borderRadius: '10px', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '80px', marginBottom: '12px', position: 'relative'}}>
            📱
            <div style={{position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px'}}>
              <span style={{background: '#EAF3DE', color: '#3B6D11', fontSize: '11px', padding: '3px 10px', borderRadius: '20px'}}>✓ Verified listing</span>
              <span style={{background: '#E6F1FB', color: '#185FA5', fontSize: '11px', padding: '3px 10px', borderRadius: '20px'}}>🎥 Video uploaded</span>
            </div>
          </div>
          <div style={{display: 'flex', gap: '8px'}}>
            {['📱', '📱', '📱', '📱', '🎥'].map((icon, i) => (
              <div key={i} style={{width: '56px', height: '56px', borderRadius: '8px', background: i === 4 ? '#E6F1FB' : '#f0f4ff', border: i === 0 ? '2px solid #185FA5' : '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', cursor: 'pointer'}}>
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Item Info */}
        <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '20px', marginBottom: '16px'}}>
          <h1 style={{fontSize: '22px', fontWeight: '600', color: '#111', marginBottom: '8px'}}>iPhone 13 — 128GB Black</h1>
          <div style={{fontSize: '28px', fontWeight: '700', color: '#185FA5', marginBottom: '14px'}}>₹38,500</div>
          
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px'}}>
            <span style={{background: '#EAF3DE', color: '#3B6D11', fontSize: '12px', padding: '4px 12px', borderRadius: '20px'}}>✅ Good condition</span>
            <span style={{background: '#E6F1FB', color: '#185FA5', fontSize: '12px', padding: '4px 12px', borderRadius: '20px'}}>📍 Sector 18, Noida</span>
            <span style={{background: '#f5f5f5', color: '#777', fontSize: '12px', padding: '4px 12px', borderRadius: '20px'}}>🕐 Posted 2 hours ago</span>
            <span style={{background: '#f5f5f5', color: '#777', fontSize: '12px', padding: '4px 12px', borderRadius: '20px'}}>Negotiable</span>
          </div>

          <h2 style={{fontSize: '14px', fontWeight: '600', color: '#111', marginBottom: '8px'}}>Description</h2>
          <p style={{fontSize: '14px', color: '#555', lineHeight: '1.7', marginBottom: '16px'}}>
            Selling my iPhone 13 128GB in black. Bought in Nov 2022. Battery health is 89%. Minor scratch on the back, not visible with cover. Original charger included, box available. No repair history. Reason for selling — upgrading to iPhone 15.
          </p>

          <h2 style={{fontSize: '14px', fontWeight: '600', color: '#111', marginBottom: '10px'}}>Honest condition report</h2>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px'}}>
            {[
              {label: 'Original box', value: 'Yes', good: true},
              {label: 'All accessories', value: 'Yes', good: true},
              {label: 'Ever repaired', value: 'No', good: true},
              {label: 'Scratches/dents', value: 'Minor', good: false},
              {label: 'Under warranty', value: 'No', good: false},
              {label: 'Battery health', value: '89%', good: true},
            ].map((row) => (
              <div key={row.label} style={{display: 'flex', justifyContent: 'space-between', padding: '8px 12px', border: '1px solid #eee', borderRadius: '8px'}}>
                <span style={{fontSize: '12px', color: '#777'}}>{row.label}</span>
                <span style={{fontSize: '12px', fontWeight: '600', color: row.good ? '#3B6D11' : '#A32D2D'}}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Seller Info */}
        <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '20px', marginBottom: '16px'}}>
          <h2 style={{fontSize: '14px', fontWeight: '600', color: '#111', marginBottom: '14px'}}>About the seller</h2>
          
          <div style={{display: 'flex', alignItems: 'center', gap: '14px', background: '#f5f5f5', borderRadius: '10px', padding: '14px', marginBottom: '12px'}}>
            <div style={{width: '48px', height: '48px', borderRadius: '50%', background: '#E6F1FB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '600', color: '#185FA5', flexShrink: 0}}>RK</div>
            <div style={{flex: 1}}>
              <div style={{fontSize: '15px', fontWeight: '600', color: '#111', marginBottom: '2px'}}>Rahul Kumar</div>
              <div style={{fontSize: '12px', color: '#777'}}>📍 Sector 18, Noida · Member since Jan 2025</div>
              <div style={{fontSize: '12px', color: '#854F0B', marginTop: '4px'}}>⭐ 4.8 · 12 deals done</div>
            </div>
          </div>

          <div style={{background: '#EAF3DE', borderRadius: '8px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px'}}>
            <span>🛡️</span>
            <span style={{fontSize: '13px', color: '#3B6D11'}}><strong>Trust score: 94/100</strong> — All past listings matched descriptions</span>
          </div>

          <button style={{width: '100%', padding: '13px', background: '#185FA5', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '15px', cursor: 'pointer', marginBottom: '10px'}}>
            💬 Chat with seller
          </button>

          <button style={{width: '100%', padding: '11px', background: 'transparent', color: '#777', border: '1px solid #eee', borderRadius: '10px', fontSize: '13px', cursor: 'pointer', marginBottom: '14px'}}>
            🚩 Report this listing
          </button>

          <div style={{background: '#FAEEDA', borderRadius: '8px', padding: '12px 14px', fontSize: '12px', color: '#633806', lineHeight: '1.6'}}>
            ⚠️ Always meet in a public place. Inspect the item before paying. Never pay in advance to a stranger.
          </div>
        </div>

        {/* Reviews */}
        <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '20px', marginBottom: '16px'}}>
          <h2 style={{fontSize: '14px', fontWeight: '600', color: '#111', marginBottom: '14px'}}>Reviews from buyers</h2>
          
          {[
            {name: 'Amit K.', rating: '5.0', text: 'Exactly as described! Very honest seller, highly recommend.', date: 'May 2025'},
            {name: 'Pooja S.', rating: '4.5', text: 'Good experience. Item matched the listing. Minor scratch was mentioned and it was there. Trustworthy.', date: 'April 2025'},
          ].map((review) => (
            <div key={review.name} style={{paddingBottom: '14px', marginBottom: '14px', borderBottom: '1px solid #f0f0f0'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px'}}>
                <div style={{width: '28px', height: '28px', borderRadius: '50%', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '600', color: '#777'}}>
                  {review.name.charAt(0)}
                </div>
                <span style={{fontSize: '13px', fontWeight: '600', color: '#111'}}>{review.name}</span>
                <span style={{marginLeft: 'auto', fontSize: '11px', color: '#854F0B'}}>⭐ {review.rating}</span>
              </div>
              <p style={{fontSize: '13px', color: '#555', lineHeight: '1.5', marginBottom: '4px'}}>{review.text}</p>
              <span style={{fontSize: '11px', color: '#aaa'}}>{review.date}</span>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}