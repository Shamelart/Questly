import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Questly - Gamifica tu productividad'
export const size = {
  width: 1200,
  height: 600,
}

export const contentType = 'image/png'

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <div
            style={{
              fontSize: '100px',
              marginBottom: '20px',
            }}
          >
            🎮
          </div>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Questly
          </div>
          <div
            style={{
              fontSize: '28px',
              opacity: 0.9,
              maxWidth: '800px',
              lineHeight: '1.2',
            }}
          >
            La vida no era un juego, ¡Hasta ahora!
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
