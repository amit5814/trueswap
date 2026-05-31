export default function SellerProfile() {
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

        {/* Profile Card */}
        <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '24px', marginBottom: '16px'}}>
          
          <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px'}}>
            <div style={{width: '64px', height: '64px', borderRadius: '50%', background: '#E6F1FB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: '600', color: '#185FA5', flexShrink: 0}}>RK</div>
            <div>
              <div style={{fontSize: '20px', fontWeight: '600', color: '#111', marginBottom: '4px'}}>Rahul Kumar</div>
              <div style={{fontSize: '13px', color: '#777', marginBottom: '3px'}}>📍 Sector 18, Noida</div>
              <div style={{fontSize: '13px', color: '#777', marginBottom: '6px'}}>📅 Member since January 2025</div>
              <span style={{background: '#EAF3DE', color: '#3B6D11', fontSize: '12px', padding: '4px 12px', borderRadius: '20px'}}>🛡️ Trusted seller</span>
            </div>
          </div>

          {/* Stats */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px'}}>
            {[
              {num: '12', label: 'Deals done'},
              {num: '4.8', label: 'Avg rating'},
              {num: '94', label: 'Trust score'},
            ].map((stat) => (
              <div key={stat.label} style={{background: '#f5f5f5', borderRadius: '10px', padding: '14px', textAlign: 'center'}}>
                <div style={{fontSize: '24px', fontWeight: '700', color: '#185FA5'}}>{stat.num}</div>
                <div style={{fontSize: '12px', color: '#777', marginTop: '2px'}}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust Bar */}
          <div style={{marginBottom: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '13px'}}>
            <span style={{color: '#777'}}>Trust score</span>
            <strong style={{color: '#3B6D11'}}>94 / 100</strong>
          </div>
          <div style={{height: '8px', background: '#eee', borderRadius: '4px', marginBottom: '8px'}}>
            <div style={{height: '8px', background: '#1D9E75', borderRadius: '4px', width: '94%'}}></div>
          </div>
          <p style={{fontSize: '12px', color: '#777', lineHeight: '1.5'}}>Score is based on listing accuracy, buyer reviews, and completed deals. All 12 past listings matched their descriptions.</p>
        </div>

        {/* Active Listings */}
        <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '20px', marginBottom: '16px'}}>
          <h2 style={{fontSize: '15px', fontWeight: '600', color: '#111', marginBottom: '14px'}}>Active listings (3)</h2>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
            {[
              {icon: '📱', title: 'iPhone 13 128GB', price: '₹38,500', condition: 'Good condition'},
              {icon: '🎧', title: 'Sony WH-1000XM4', price: '₹12,000', condition: 'Like new'},
              {icon: '🎮', title: 'PS4 Slim 1TB', price: '₹16,500', condition: 'Good condition'},
            ].map((item) => (
              <div key={item.title} style={{border: '1px solid #eee', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer'}}>
                <div style={{background: '#f0f4ff', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px'}}>
                  {item.icon}
                </div>
                <div style={{padding: '10px'}}>
                  <div style={{fontSize: '13px', fontWeight: '600', color: '#111', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{item.title}</div>
                  <div style={{fontSize: '15px', fontWeight: '700', color: '#185FA5'}}>{item.price}</div>
                  <div style={{fontSize: '11px', color: '#3B6D11'}}>{item.condition}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '20px'}}>
          <h2 style={{fontSize: '15px', fontWeight: '600', color: '#111', marginBottom: '14px'}}>Reviews from buyers</h2>
          
          {[
            {init: 'AK', name: 'Amit K.', rating: '5.0', text: 'Exactly as described! The item was in perfect condition. Very honest seller, highly recommend.', date: 'May 2025'},
            {init: 'PS', name: 'Pooja S.', rating: '4.5', text: 'Good experience. Item matched the listing. Minor scratch was mentioned and it was there. Trustworthy.', date: 'April 2025'},
            {init: 'VR', name: 'Vikram R.', rating: '5.0', text: 'Best seller on TrueSwap. Came on time, item was exactly as shown. Will buy from him again!', date: 'March 2025'},
          ].map((review) => (
            <div key={review.name} style={{paddingBottom: '14px', marginBottom: '14px', borderBottom: '1px solid #f0f0f0'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px'}}>
                <div style={{width: '28px', height: '28px', borderRadius: '50%', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '600', color: '#777'}}>
                  {review.init}
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