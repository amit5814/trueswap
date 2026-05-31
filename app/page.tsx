export default function Home() {
  return (
    <main style={{fontFamily: 'sans-serif', background: '#f5f5f5', minHeight: '100vh'}}>
      
      <nav style={{background: '#fff', padding: '14px 24px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{fontSize: '22px', fontWeight: '600', color: '#185FA5'}}>
          True<span style={{color: '#1D9E75'}}>Swap</span>
        </div>
        <div style={{display: 'flex', gap: '10px'}}>
          <button style={{padding: '8px 16px', border: '1px solid #ddd', borderRadius: '8px', background: 'transparent', cursor: 'pointer'}}>Login</button>
          <button style={{padding: '8px 16px', border: 'none', borderRadius: '8px', background: '#185FA5', color: '#fff', cursor: 'pointer'}}>+ Sell</button>
        </div>
      </nav>

      <div style={{background: '#EBF4FF', padding: '48px 24px', textAlign: 'center'}}>
        <h1 style={{fontSize: '32px', fontWeight: '600', color: '#111', marginBottom: '10px'}}>
          Buy & sell electronics you can actually trust
        </h1>
        <p style={{fontSize: '16px', color: '#555', marginBottom: '24px'}}>
          Only verified listings with real photos and videos — in Noida
        </p>
        <div style={{display: 'flex', maxWidth: '520px', margin: '0 auto', border: '1px solid #ddd', borderRadius: '12px', overflow: 'hidden', background: '#fff'}}>
          <input type="text" placeholder="Search mobiles, laptops, TVs..." style={{flex: 1, padding: '14px 16px', border: 'none', fontSize: '14px', outline: 'none'}} />
          <button style={{padding: '14px 20px', background: '#185FA5', color: '#fff', border: 'none', fontSize: '14px', cursor: 'pointer'}}>Search</button>
        </div>
        <div style={{marginTop: '12px', fontSize: '13px', color: '#777'}}>
          📍 Noida, Uttar Pradesh
        </div>
      </div>

      <div style={{padding: '32px 24px'}}>
        <h2 style={{fontSize: '18px', fontWeight: '600', marginBottom: '16px'}}>Browse by category</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '12px'}}>
          {[
            {icon: '📱', name: 'Mobiles'},
            {icon: '💻', name: 'Laptops'},
            {icon: '📺', name: 'TVs'},
            {icon: '📷', name: 'Cameras'},
            {icon: '🎧', name: 'Audio'},
            {icon: '🎮', name: 'Gaming'},
          ].map((cat) => (
            <div key={cat.name} style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '16px 8px', textAlign: 'center', cursor: 'pointer'}}>
              <div style={{fontSize: '28px', marginBottom: '8px'}}>{cat.icon}</div>
              <div style={{fontSize: '13px', color: '#555'}}>{cat.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{padding: '0 24px 32px'}}>
        <h2 style={{fontSize: '18px', fontWeight: '600', marginBottom: '16px'}}>Recent listings in Noida</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px'}}>
          {[
            {icon: '📱', title: 'iPhone 13 128GB', price: '₹38,500', condition: 'Good', area: 'Sector 18', seller: 'Rahul K.', rating: '4.8'},
            {icon: '💻', title: 'Dell Inspiron i5', price: '₹28,000', condition: 'Good', area: 'Sector 62', seller: 'Priya S.', rating: '4.5'},
            {icon: '📺', title: 'Samsung 43 TV', price: '₹18,000', condition: 'Fair', area: 'Sector 50', seller: 'Amit M.', rating: '4.2'},
          ].map((item) => (
            <div key={item.title} style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer'}}>
              <div style={{background: '#f0f4ff', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '56px'}}>
                {item.icon}
              </div>
              <div style={{padding: '12px'}}>
                <div style={{fontWeight: '600', fontSize: '14px', marginBottom: '4px'}}>{item.title}</div>
                <div style={{fontSize: '18px', fontWeight: '700', color: '#185FA5', marginBottom: '8px'}}>{item.price}</div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <span style={{fontSize: '11px', background: '#EAF3DE', color: '#3B6D11', padding: '3px 8px', borderRadius: '6px'}}>{item.condition}</span>
                  <span style={{fontSize: '11px', color: '#777'}}>📍 {item.area}</span>
                </div>
                <div style={{marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#777'}}>
                  <span>{item.seller}</span>
                  <span>⭐ {item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{background: '#fff', borderTop: '1px solid #eee', padding: '20px 24px', textAlign: 'center'}}>
        <div style={{fontSize: '18px', fontWeight: '600', color: '#185FA5', marginBottom: '4px'}}>
          True<span style={{color: '#1D9E75'}}>Swap</span>
        </div>
        <div style={{fontSize: '13px', color: '#777'}}>Trusted electronics marketplace · Noida · © 2025 TrueSwap</div>
      </div>

    </main>
  )
}