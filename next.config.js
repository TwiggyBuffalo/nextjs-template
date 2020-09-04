const path = require('path')

const {NODE_ENV} = process.env

const isProd = NODE_ENV === 'production'

const nextConfig = {
	webpack: (config) => {
		config.resolve.alias.components = path.join(__dirname, 'components')
		config.resolve.alias.images = path.join(__dirname, 'public/static/images')

		if (isProd) {
			config.performance = {
				hints: 'error',
				maxEntrypointSize: 20000000,
				maxAssetSize: 20000000
			}
		}

		return config
	}
}

module.exports = nextConfig
