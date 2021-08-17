const path = require('path')
const process = require('process')

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
	webpack: (config) => {
		config.resolve.alias.components = path.join(__dirname, 'components')
		config.resolve.alias.images = path.join(__dirname, 'public/static/images')

		if (isProd) {
			config.performance = {
				hints: 'error',
				maxEntrypointSize: 20_000_000,
				maxAssetSize: 20_000_000
			}
		}

		return config
	}
}

module.exports = nextConfig
