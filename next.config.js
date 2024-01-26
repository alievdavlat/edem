/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_URL: 'http://localhost:1337/api/',
    IMAGE_URL:'http://localhost:1337'
  },
}

module.exports = nextConfig
