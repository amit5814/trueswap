export default function Search() {
  return (
    <main style={{fontFamily: 'sans-serif', background: '#f5f5f5', minHeight: '100vh'}}>

      {/* Navbar */}
      <nav style={{background: '#fff', padding: '14px 24px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a href="/" style={{fontSize: '22px', fontWeight: '600', color: '#185FA5', textDecoration: 'none'}}>
          True<span style={{color: '#1D9E75'}}>Swap</span>
        </a>
        <a href="/login" style={{fontSize: '14px', color: '#185FA5', textDecoration: 'none'}}>Login</a>
      </nav>

      <div style={{maxWidth: '900px', margin: '0 auto', padding: '24px 16px'}}>

        {/* Search Bar */}
        <div style={{display: 'flex', gap: '8px', marginBottom: '16px'}}>
          <div style={{flex: 1, display: 'flex', border: '1px solid #eee', borderRadius: '10px', overflow: 'hidden', background: '#fff'}}>
            <input type="text" defaultValue="iPhone" style={{flex: 1, padding: '12px 16px', border: 'none', fontSize: '15px', outline: 'none'}} />
            <button style={{padding: '12px 20px', background: '#185FA5', color: '#fff', border: 'none', fontSize: '14px', cursor: 'pointer'}}>Search</button>
          </div>
        </div>

        <div style={{display: 'flex', gap: '16px'}}>

          {/* Filters Sidebar */}
          <div style={{width: '200px', flexShrink: 0}}>

            <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '16px', marginBottom: '12px'}}>
              <h3 style={{fontSize: '14px', fontWeight: '600', marginBottom: '12px'}}>Category</h3>
              {[
                'All categories',
                'Mobiles',
                'Laptops',
                'TVs',
                'Cameras',
                'Audio',
                'Gaming',
                'Printers',
                'PC Parts',
              ].map((cat, i) => (
                <div key={cat} style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', cursor: 'pointer'}}>
                  <input type="radio" name="category" defaultChecked={i === 0} />
                  <span style={{fontSize: '13px', color: '#555'}}>{cat}</span>
                </div>
              ))}
            </div>

            <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '16px', marginBottom: '12px'}}>
              <h3 style={{fontSize: '14px', fontWeight: '600', marginBottom: '12px'}}>Price range</h3>
              <div style={{display: 'flex', gap: '8px', marginBottom: '8px'}}>
                <input type="number" placeholder="Min ₹" style={{width: '100%', padding: '8px', border: '1px solid #eee', borderRadius: '6px', fontSize: '13px', outline: 'none'}} />
              </div>
              <div style={{display: 'flex', gap: '8px'}}>
                <input type="number" placeholder="Max ₹" style={{width: '100%', padding: '8px', border: '1px solid #eee', borderRadius: '6px', fontSize: '13px', outline: 'none'}} />
              </div>
            </div>

            <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '16px', marginBottom: '12px'}}>
              <h3 style={{fontSize: '14px', fontWeight: '600', marginBottom: '12px'}}>Condition</h3>
              {['Any condition', 'Like new', 'Good', 'Fair', 'Needs repair'].map((cond, i) => (
                <div key={cond} style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', cursor: 'pointer'}}>
                  <input type="radio" name="condition" defaultChecked={i === 0} />
                  <span style={{fontSize: '13px', color: '#555'}}>{cond}</span>
                </div>
              ))}
            </div>

            <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '16px'}}>
              <h3 style={{fontSize: '14px', fontWeight: '600', marginBottom: '12px'}}>Trust level</h3>
              {['Any seller', 'Trusted sellers only', 'Top rated (4.5+)'].map((trust, i) => (
                <div key={trust} style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', cursor: 'pointer'}}>
                  <input type="radio" name="trust" defaultChecked={i === 0} />
                  <span style={{fontSize: '13px', color: '#555'}}>{trust}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Results */}
          <div style={{flex: 1}}>

            {/* Results Header */}
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px'}}>
              <p style={{fontSize: '14px', color: '#777'}}>Showing <strong style={{color: '#111'}}>6 results</strong> for "iPhone" in Noida</p>
              <select style={{padding: '8px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '13px', background: '#fff'}}>
                <option>Latest first</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest rated</option>
              </select>
            </div>

            {/* Listing Cards */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px'}}>
              {[
                {icon: '📱', title: 'iPhone 13 128GB Black', price: '₹38,500', condition: 'Good', area: 'Sector 18', seller: 'Rahul K.', rating: '4.8', verified: true},
                {icon: '📱', title: 'iPhone 12 64GB White', price: '₹28,000', condition: 'Fair', area: 'Sector 62', seller: 'Priya S.', rating: '4.5', verified: true},
                {icon: '📱', title: 'iPhone 11 128GB Red', price: '₹22,000', condition: 'Good', area: 'Sector 50', seller: 'Amit M.', rating: '4.2', verified: false},
                {icon: '📱', title: 'iPhone XR 64GB Blue', price: '₹18,500', condition: 'Like new', area: 'Sector 15', seller: 'Sneha R.', rating: '5.0', verified: true},
                {icon: '📱', title: 'iPhone SE 2022', price: '₹24,000', condition: 'Good', area: 'Sector 76', seller: 'Rohit K.', rating: '4.6', verified: true},
                {icon: '📱', title: 'iPhone 14 256GB', price: '₹58,000', condition: 'Like new', area: 'Sector 44', seller: 'Neha S.', rating: '4.9', verified: true},
              ].map((item) => (
                <a href="/item" key={item.title} style={{textDecoration: 'none'}}>
                  <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer'}}>
                    <div style={{background: '#f0f4ff', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '52px', position: 'relative'}}>
                      {item.icon}
                      {item.verified && (
                        <span style={{position: 'absolute', top: '8px', left: '8px', background: '#EAF3DE', color: '#3B6D11', fontSize: '10px', padding: '2px 8px', borderRadius: '20px'}}>✓ Verified</span>
                      )}
                    </div>
                    <div style={{padding: '10px'}}>
                      <div style={{fontSize: '13px', fontWeight: '600', color: '#111', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{item.title}</div>
                      <div style={{fontSize: '16px', fontWeight: '700', color: '#185FA5', marginBottom: '6px'}}>{item.price}</div>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px'}}>
                        <span style={{fontSize: '11px', background: '#EAF3DE', color: '#3B6D11', padding: '2px 8px', borderRadius: '6px'}}>{item.condition}</span>
                        <span style={{fontSize: '11px', color: '#777'}}>📍 {item.area}</span>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#777', paddingTop: '6px', borderTop: '1px solid #f0f0f0'}}>
                        <span>{item.seller}</span>
                        <span>⭐ {item.rating}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}