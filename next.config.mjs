import './src/lib/env/env.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    loaderFile: 'src/lib/utils/loader.ts'
  }
}

export default nextConfig
