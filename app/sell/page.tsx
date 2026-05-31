export default function Sell() {
  return (
    <main style={{fontFamily: 'sans-serif', background: '#f5f5f5', minHeight: '100vh'}}>

      {/* Navbar */}
      <nav style={{background: '#fff', padding: '14px 24px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a href="/" style={{fontSize: '22px', fontWeight: '600', color: '#185FA5', textDecoration: 'none'}}>
          True<span style={{color: '#1D9E75'}}>Swap</span>
        </a>
        <a href="/login" style={{fontSize: '14px', color: '#185FA5', textDecoration: 'none'}}>Login</a>
      </nav>

      {/* Page Title */}
      <div style={{maxWidth: '640px', margin: '0 auto', padding: '24px 16px'}}>
        <h1 style={{fontSize: '22px', fontWeight: '600', color: '#111', marginBottom: '4px'}}>Post your listing</h1>
        <p style={{fontSize: '14px', color: '#777', marginBottom: '20px'}}>Be honest — buyers trust sellers who describe items accurately</p>

        {/* Warning */}
        <div style={{background: '#FAEEDA', borderRadius: '10px', padding: '12px 16px', display: 'flex', gap: '10px', marginBottom: '20px'}}>
          <span>⚠️</span>
          <p style={{fontSize: '13px', color: '#633806', lineHeight: '1.6'}}>Fake or misleading listings are permanently banned. Real photos and honest descriptions protect everyone.</p>
        </div>

        {/* Item Details */}
        <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '20px', marginBottom: '16px'}}>
          <h2 style={{fontSize: '15px', fontWeight: '600', marginBottom: '16px'}}>📦 Item details</h2>
          
          <div style={{marginBottom: '14px'}}>
            <label style={{display: 'block', fontSize: '13px', color: '#777', marginBottom: '6px'}}>Category</label>
            <select style={{width: '100%', padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', background: '#fff'}}>
              <option>Select category</option>
              <option>Mobile phones</option>
              <option>Laptops & computers</option>
              <option>TVs & monitors</option>
              <option>Cameras</option>
              <option>Audio & headphones</option>
              <option>Gaming consoles</option>
              <option>Printers</option>
              <option>PC parts & accessories</option>
            </select>
          </div>

          <div style={{marginBottom: '14px'}}>
            <label style={{display: 'block', fontSize: '13px', color: '#777', marginBottom: '6px'}}>Item title</label>
            <input type="text" placeholder="e.g. iPhone 13 128GB Black" style={{width: '100%', padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
          </div>

          <div style={{marginBottom: '14px'}}>
            <label style={{display: 'block', fontSize: '13px', color: '#777', marginBottom: '6px'}}>Brand</label>
            <input type="text" placeholder="e.g. Apple, Samsung, Dell..." style={{width: '100%', padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
          </div>

          <div style={{marginBottom: '4px'}}>
            <label style={{display: 'block', fontSize: '13px', color: '#777', marginBottom: '6px'}}>Description — be honest about condition and defects</label>
            <textarea placeholder="Describe the item honestly. Mention scratches, repairs, missing parts, battery health etc." style={{width: '100%', padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', outline: 'none', minHeight: '100px', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'sans-serif'}} />
          </div>
        </div>

        {/* Photos */}
        <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '20px', marginBottom: '16px'}}>
          <h2 style={{fontSize: '15px', fontWeight: '600', marginBottom: '4px'}}>📸 Photos — minimum 6 required</h2>
          <p style={{fontSize: '12px', color: '#777', marginBottom: '16px'}}>One photo must show you holding the item. Stock photos are auto rejected.</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px'}}>
            {['Front view', 'Back view', 'Side view', 'You holding it', 'Add photo', 'Add photo'].map((label, i) => (
              <div key={i} style={{aspectRatio: '1', border: '1px dashed #ccc', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: i < 4 ? '#E6F1FB' : '#f9f9f9'}}>
                <div style={{fontSize: '24px', marginBottom: '4px'}}>{i < 4 ? '✅' : '➕'}</div>
                <div style={{fontSize: '11px', color: '#777'}}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Video */}
        <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '20px', marginBottom: '16px'}}>
          <h2 style={{fontSize: '15px', fontWeight: '600', marginBottom: '4px'}}>🎥 Working video — required</h2>
          <div style={{border: '1px dashed #ccc', borderRadius: '10px', padding: '24px', textAlign: 'center', background: '#f9f9f9', cursor: 'pointer'}}>
            <div style={{fontSize: '32px', marginBottom: '8px'}}>📹</div>
            <p style={{fontSize: '13px', color: '#333', marginBottom: '4px'}}>Upload a 15–30 second video</p>
            <span style={{fontSize: '12px', color: '#777'}}>Show the item switched on and working</span>
          </div>
        </div>

        {/* Condition */}
        <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '20px', marginBottom: '16px'}}>
          <h2 style={{fontSize: '15px', fontWeight: '600', marginBottom: '16px'}}>✅ Honest condition report</h2>
          
          <div style={{marginBottom: '16px'}}>
            <p style={{fontSize: '13px', color: '#777', marginBottom: '10px'}}>Overall condition</p>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
              {[
                {icon: '🎁', label: 'Like new', desc: 'Barely used, no marks'},
                {icon: '✅', label: 'Good', desc: 'Works perfectly, minor wear'},
                {icon: '⚠️', label: 'Fair', desc: 'Works, visible signs of use'},
                {icon: '🔧', label: 'Needs repair', desc: 'Has issues, needs fixing'},
              ].map((c) => (
                <div key={c.label} style={{border: '1px solid #eee', borderRadius: '10px', padding: '12px', cursor: 'pointer'}}>
                  <div style={{fontSize: '20px', marginBottom: '4px'}}>{c.icon}</div>
                  <div style={{fontSize: '13px', fontWeight: '600', color: '#111'}}>{c.label}</div>
                  <div style={{fontSize: '11px', color: '#777'}}>{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {[
            'Original box included?',
            'All accessories included?',
            'Ever repaired or serviced?',
            'Any scratches or dents?',
            'Under warranty?',
          ].map((q) => (
            <div key={q} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', marginBottom: '8px'}}>
              <span style={{fontSize: '13px', color: '#333'}}>{q}</span>
              <div style={{display: 'flex', gap: '6px'}}>
                <button style={{padding: '5px 14px', borderRadius: '6px', border: '1px solid #3B6D11', background: '#EAF3DE', color: '#3B6D11', fontSize: '12px', cursor: 'pointer'}}>Yes</button>
                <button style={{padding: '5px 14px', borderRadius: '6px', border: '1px solid #eee', background: 'transparent', color: '#777', fontSize: '12px', cursor: 'pointer'}}>No</button>
              </div>
            </div>
          ))}
        </div>

        {/* Price */}
        <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '20px', marginBottom: '16px'}}>
          <h2 style={{fontSize: '15px', fontWeight: '600', marginBottom: '16px'}}>💰 Price & location</h2>
          
          <div style={{marginBottom: '14px'}}>
            <label style={{display: 'block', fontSize: '13px', color: '#777', marginBottom: '6px'}}>Your asking price</label>
            <div style={{display: 'flex', gap: '8px'}}>
              <div style={{padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', background: '#f5f5f5', fontSize: '14px', color: '#555'}}>₹</div>
              <input type="number" placeholder="e.g. 15000" style={{flex: 1, padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', outline: 'none'}} />
            </div>
          </div>

          <div style={{marginBottom: '14px'}}>
            <label style={{display: 'block', fontSize: '13px', color: '#777', marginBottom: '6px'}}>Negotiable?</label>
            <select style={{width: '100%', padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', background: '#fff'}}>
              <option>Yes, price is negotiable</option>
              <option>No, fixed price</option>
            </select>
          </div>

          <div>
            <label style={{display: 'block', fontSize: '13px', color: '#777', marginBottom: '6px'}}>Your area in Noida</label>
            <input type="text" placeholder="e.g. Sector 18, Sector 62, Greater Noida..." style={{width: '100%', padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
          </div>
        </div>

        {/* Submit */}
        <button style={{width: '100%', padding: '14px', background: '#185FA5', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '16px', cursor: 'pointer'}}>
          🚀 Post listing
        </button>

      </div>
    </main>
  )
}