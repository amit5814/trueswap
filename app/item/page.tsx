'use client'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'

const categoryIcons: any = {
  'Mobile phones': '📱',
  'Laptops & computers': '💻',
  'TVs & monitors': '📺',
  'Cameras': '📷',
  'Audio & headphones': '🎧',
  'Gaming consoles': '🎮',
  'Printers': '🖨️',
  'PC parts & accessories': '🖥️',
}

function ItemContent() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [item, setItem] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchItem() {
      if (!id) return
      const { data } = await supabase
        .from('listings')
        .select('*')
        .eq('id', id)
        .single()
      setItem(data)
      setLoading(false)
    }
    fetchItem()
  }, [id])

  if (loading) return (
    <div style={{textAlign: 'center', padding: '80px', color: '#777'}}>Loading...</div>
  )

  if (!item) return (
    <div style={{textAlign: 'center', padding: '80px', color: '#777'}}>
      <div style={{fontSize: '48px', marginBottom: '16px'}}>😕</div>
      <p>Listing not found!</p>
      <a href="/" style={{display: 'inline-block', marginTop: '16px', padding: '12px 24px', background: '#185FA5', color: '#fff', borderRadius: '10px', textDecoration: 'none'}}>Go home</a>
    </div>
  )

  return (
    <div style={{maxWidth: '680px', margin: '0 auto', padding: '24px 16px'}}>

      <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '20px', marginBottom: '16px'}}>
        <div style={{background: '#f0f4ff', borderRadius: '10px', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '80px', marginBottom: '12px'}}>
          {categoryIcons[item.category] || '📦'}
        </div>
      </div>

      <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '20px', marginBottom: '16px'}}>
        <h1 style={{fontSize: '22px', fontWeight: '600', color: '#111', marginBottom: '8px'}}>{item.title}</h1>
        <div style={{fontSize: '28px', fontWeight: '700', color: '#185FA5', marginBottom: '14px'}}>₹{item.price?.toLocaleString()}</div>

        <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px'}}>
          {item.condition && <span style={{background: '#EAF3DE', color: '#3B6D11', fontSize: '12px', padding: '4px 12px', borderRadius: '20px'}}>✅ {item.condition}</span>}
          {item.area && <span style={{background: '#E6F1FB', color: '#185FA5', fontSize: '12px', padding: '4px 12px', borderRadius: '20px'}}>📍 {item.area}, Noida</span>}
          {item.negotiable && <span style={{background: '#f5f5f5', color: '#777', fontSize: '12px', padding: '4px 12px', borderRadius: '20px'}}>Negotiable</span>}
        </div>

        {item.description && (
          <>
            <h2 style={{fontSize: '14px', fontWeight: '600', color: '#111', marginBottom: '8px'}}>Description</h2>
            <p style={{fontSize: '14px', color: '#555', lineHeight: '1.7', marginBottom: '16px'}}>{item.description}</p>
          </>
        )}

        <h2 style={{fontSize: '14px', fontWeight: '600', color: '#111', marginBottom: '10px'}}>Condition report</h2>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px'}}>
          {[
            {label: 'Original box', value: item.has_box},
            {label: 'All accessories', value: item.has_accessories},
            {label: 'Ever repaired', value: item.repaired},
            {label: 'Scratches/dents', value: item.scratches},
            {label: 'Under warranty', value: item.under_warranty},
          ].map((row) => (
            <div key={row.label} style={{display: 'flex', justifyContent: 'space-between', padding: '8px 12px', border: '1px solid #eee', borderRadius: '8px'}}>
              <span style={{fontSize: '12px', color: '#777'}}>{row.label}</span>
              <span style={{fontSize: '12px', fontWeight: '600', color: row.value ? '#3B6D11' : '#A32D2D'}}>{row.value ? 'Yes' : 'No'}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '20px', marginBottom: '16px'}}>
        <h2 style={{fontSize: '14px', fontWeight: '600', color: '#111', marginBottom: '14px'}}>About the seller</h2>

        <div style={{display: 'flex', alignItems: 'center', gap: '14px', background: '#f5f5f5', borderRadius: '10px', padding: '14px', marginBottom: '12px'}}>
          <div style={{width: '48px', height: '48px', borderRadius: '50%', background: '#E6F1FB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '600', color: '#185FA5', flexShrink: 0}}>
            {item.seller_name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <div style={{fontSize: '15px', fontWeight: '600', color: '#111', marginBottom: '2px'}}>{item.seller_name}</div>
            <div style={{fontSize: '12px', color: '#777'}}>📍 {item.area}, Noida</div>
          </div>
        </div>

        <a href={`tel:+91${item.seller_phone}`} style={{display: 'block', width: '100%', padding: '13px', background: '#185FA5', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '15px', cursor: 'pointer', marginBottom: '10px', textAlign: 'center', textDecoration: 'none'}}>
          📞 Call seller — +91 {item.seller_phone}
        </a>

        <div style={{background: '#FAEEDA', borderRadius: '8px', padding: '12px 14px', fontSize: '12px', color: '#633806', lineHeight: '1.6'}}>
          ⚠️ Always meet in a public place. Inspect the item before paying. Never pay in advance.
        </div>
      </div>

    </div>
  )
}

export default function ItemDetail() {
  return (
    <main style={{fontFamily: 'sans-serif', background: '#f5f5f5', minHeight: '100vh'}}>
      <nav style={{background: '#fff', padding: '14px 24px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a href="/" style={{fontSize: '22px', fontWeight: '600', color: '#185FA5', textDecoration: 'none'}}>True<span style={{color: '#1D9E75'}}>Swap</span></a>
        <a href="/login" style={{fontSize: '14px', color: '#185FA5', textDecoration: 'none'}}>Login</a>
      </nav>
      <Suspense fallback={<div style={{textAlign: 'center', padding: '80px', color: '#777'}}>Loading...</div>}>
        <ItemContent />
      </Suspense>
    </main>
  )
}