'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Sell() {
  const [title, setTitle] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [condition, setCondition] = useState('')
  const [area, setArea] = useState('')
  const [sellerName, setSellerName] = useState('')
  const [sellerPhone, setSellerPhone] = useState('')
  const [photos, setPhotos] = useState<string[]>([])
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

 async function handlePhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files
    if (!files) return
    if (photos.length + files.length > 6) {
      alert('Maximum 6 photos allowed!')
      return
    }
    setUploading(true)
    const uploaded: string[] = []
    for (let i = 0; i < files.length; i++) {
      const formData = new FormData()
      formData.append('file', files[i])
      formData.append('upload_preset', 'trueswap')
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dcutx5e1q/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      )
      const data = await res.json()
      if (data.secure_url) uploaded.push(data.secure_url)
    }
    setPhotos(prev => [...prev, ...uploaded])
    setUploading(false)
  }

  async function handleSubmit() {
    if (!title || !price || !category || !sellerName || !sellerPhone) {
      alert('Please fill all required fields!')
      return
    }
    if (photos.length < 1) {
      alert('Please upload at least 1 photo!')
      return
    }
    setLoading(true)
    const { error } = await supabase.from('listings').insert([{
      title,
      brand,
      category,
      description,
      price: parseInt(price),
      condition,
      area,
      seller_name: sellerName,
      seller_phone: sellerPhone,
      photos: photos,
    }])
    setLoading(false)
    if (error) {
      alert('Error posting listing. Please try again.')
    } else {
      setSuccess(true)
    }
  }

  if (success) {
    return (
      <main style={{fontFamily: 'sans-serif', background: '#f5f5f5', minHeight: '100vh'}}>
        <nav style={{background: '#fff', padding: '14px 24px', borderBottom: '1px solid #eee'}}>
          <a href="/" style={{fontSize: '22px', fontWeight: '600', color: '#185FA5', textDecoration: 'none'}}>True<span style={{color: '#1D9E75'}}>Swap</span></a>
        </nav>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 16px'}}>
          <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '16px', padding: '40px', textAlign: 'center', maxWidth: '400px'}}>
            <div style={{fontSize: '56px', marginBottom: '16px'}}>🎉</div>
            <h1 style={{fontSize: '22px', fontWeight: '600', color: '#111', marginBottom: '8px'}}>Listing posted!</h1>
            <p style={{fontSize: '14px', color: '#777', marginBottom: '24px'}}>Your item is now live on TrueSwap!</p>
            <a href="/" style={{display: 'block', padding: '12px', background: '#185FA5', color: '#fff', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>Go to homepage</a>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main style={{fontFamily: 'sans-serif', background: '#f5f5f5', minHeight: '100vh'}}>
      <nav style={{background: '#fff', padding: '14px 24px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a href="/" style={{fontSize: '22px', fontWeight: '600', color: '#185FA5', textDecoration: 'none'}}>True<span style={{color: '#1D9E75'}}>Swap</span></a>
        <a href="/login" style={{fontSize: '14px', color: '#185FA5', textDecoration: 'none'}}>Login</a>
      </nav>

      <div style={{maxWidth: '640px', margin: '0 auto', padding: '24px 16px'}}>
        <h1 style={{fontSize: '22px', fontWeight: '600', color: '#111', marginBottom: '4px'}}>Post your listing</h1>
        <p style={{fontSize: '14px', color: '#777', marginBottom: '20px'}}>Be honest — buyers trust sellers who describe items accurately</p>

        <div style={{background: '#FAEEDA', borderRadius: '10px', padding: '12px 16px', marginBottom: '20px'}}>
          <p style={{fontSize: '13px', color: '#633806', lineHeight: '1.6'}}>⚠️ Fake or misleading listings are permanently banned.</p>
        </div>

        {/* Seller Info */}
        <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '20px', marginBottom: '16px'}}>
          <h2 style={{fontSize: '15px', fontWeight: '600', marginBottom: '16px'}}>👤 Your details</h2>
          <div style={{marginBottom: '14px'}}>
            <label style={{display: 'block', fontSize: '13px', color: '#777', marginBottom: '6px'}}>Your name *</label>
            <input value={sellerName} onChange={e => setSellerName(e.target.value)} type="text" placeholder="e.g. Rahul Kumar" style={{width: '100%', padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
          </div>
          <div>
            <label style={{display: 'block', fontSize: '13px', color: '#777', marginBottom: '6px'}}>Phone number *</label>
            <div style={{display: 'flex', gap: '8px'}}>
              <div style={{padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', background: '#f5f5f5', fontSize: '14px', color: '#555'}}>🇮🇳 +91</div>
              <input value={sellerPhone} onChange={e => setSellerPhone(e.target.value)} type="tel" placeholder="10-digit number" maxLength={10} style={{flex: 1, padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', outline: 'none'}} />
            </div>
          </div>
        </div>

        {/* Item Details */}
        <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '20px', marginBottom: '16px'}}>
          <h2 style={{fontSize: '15px', fontWeight: '600', marginBottom: '16px'}}>📦 Item details</h2>
          <div style={{marginBottom: '14px'}}>
            <label style={{display: 'block', fontSize: '13px', color: '#777', marginBottom: '6px'}}>Category *</label>
            <select value={category} onChange={e => setCategory(e.target.value)} style={{width: '100%', padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', background: '#fff'}}>
              <option value="">Select category</option>
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
            <label style={{display: 'block', fontSize: '13px', color: '#777', marginBottom: '6px'}}>Item title *</label>
            <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="e.g. iPhone 13 128GB Black" style={{width: '100%', padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
          </div>
          <div style={{marginBottom: '14px'}}>
            <label style={{display: 'block', fontSize: '13px', color: '#777', marginBottom: '6px'}}>Brand</label>
            <input value={brand} onChange={e => setBrand(e.target.value)} type="text" placeholder="e.g. Apple, Samsung, Dell..." style={{width: '100%', padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
          </div>
          <div style={{marginBottom: '14px'}}>
            <label style={{display: 'block', fontSize: '13px', color: '#777', marginBottom: '6px'}}>Condition</label>
            <select value={condition} onChange={e => setCondition(e.target.value)} style={{width: '100%', padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', background: '#fff'}}>
              <option value="">Select condition</option>
              <option>Like new</option>
              <option>Good</option>
              <option>Fair</option>
              <option>Needs repair</option>
            </select>
          </div>
          <div>
            <label style={{display: 'block', fontSize: '13px', color: '#777', marginBottom: '6px'}}>Description</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Describe the item honestly. Mention scratches, repairs, missing parts..." style={{width: '100%', padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', outline: 'none', minHeight: '100px', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'sans-serif'}} />
          </div>
        </div>

        {/* Photo Upload */}
        <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '20px', marginBottom: '16px'}}>
          <h2 style={{fontSize: '15px', fontWeight: '600', marginBottom: '4px'}}>📸 Photos</h2>
          <p style={{fontSize: '12px', color: '#777', marginBottom: '16px'}}>Upload real photos of your item. Maximum 6 photos.</p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '12px'}}>
            {photos.map((url, i) => (
              <div key={i} style={{aspectRatio: '1', borderRadius: '10px', overflow: 'hidden', position: 'relative', border: '1px solid #eee'}}>
                <img src={url} alt={`photo ${i+1}`} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                <button onClick={() => setPhotos(photos.filter((_, j) => j !== i))} style={{position: 'absolute', top: '4px', right: '4px', background: '#ff4444', color: '#fff', border: 'none', borderRadius: '50%', width: '20px', height: '20px', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>×</button>
              </div>
            ))}
            {photos.length < 6 && (
              <label style={{aspectRatio: '1', border: '1px dashed #ccc', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: '#f9f9f9'}}>
                <div style={{fontSize: '24px', marginBottom: '4px'}}>{uploading ? '⏳' : '➕'}</div>
                <div style={{fontSize: '11px', color: '#777'}}>{uploading ? 'Uploading...' : 'Add photo'}</div>
                <input type="file" accept="image/*" multiple onChange={handlePhotoUpload} style={{display: 'none'}} disabled={uploading} />
              </label>
            )}
          </div>
          <div style={{fontSize: '12px', color: '#777'}}>ℹ️ Include a photo of you holding the item to build buyer trust!</div>
        </div>

        {/* Price & Location */}
        <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '20px', marginBottom: '16px'}}>
          <h2 style={{fontSize: '15px', fontWeight: '600', marginBottom: '16px'}}>💰 Price & location</h2>
          <div style={{marginBottom: '14px'}}>
            <label style={{display: 'block', fontSize: '13px', color: '#777', marginBottom: '6px'}}>Asking price *</label>
            <div style={{display: 'flex', gap: '8px'}}>
              <div style={{padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', background: '#f5f5f5', fontSize: '14px', color: '#555'}}>₹</div>
              <input value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder="e.g. 15000" style={{flex: 1, padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', outline: 'none'}} />
            </div>
          </div>
          <div>
            <label style={{display: 'block', fontSize: '13px', color: '#777', marginBottom: '6px'}}>Your area in Noida</label>
            <input value={area} onChange={e => setArea(e.target.value)} type="text" placeholder="e.g. Sector 18, Sector 62..." style={{width: '100%', padding: '10px 14px', border: '1px solid #eee', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
          </div>
        </div>

        <button onClick={handleSubmit} disabled={loading} style={{width: '100%', padding: '14px', background: loading ? '#aaa' : '#185FA5', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '16px', cursor: loading ? 'not-allowed' : 'pointer'}}>
          {loading ? 'Posting...' : '🚀 Post listing'}
        </button>

      </div>
    </main>
  )
}