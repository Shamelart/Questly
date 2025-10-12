let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
   //output: 'export', // Genera un sitio estático - COMENTADO PARA DESARROLLO LOCAL
   //distDir: 'out',   // Opcional: Cambia el directorio de salida a "out" - COMENTADO PARA DESARROLLO LOCAL
  images: {
    domains: ['flagcdn.com', 'hebbkx1anhila5yf.public.blob.vercel-storage.com'],
     //unoptimized: true, // COMENTADO PARA DESARROLLO LOCAL - permite optimización de imágenes
  },
};

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
