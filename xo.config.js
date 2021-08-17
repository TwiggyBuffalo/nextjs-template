module.exports = {
	extends: ['plugin:jsx-a11y/strict', 'xo-react'],
	plugins: 'jsx-a11y',
	envs: ['es2020', 'browser'],
	prettier: true,
	semicolon: false,
	nodeVersion: '12',
	rules: {
		'unicorn/prefer-module': 'off',
		'unicorn/no-process-exit': 'warn',

		'import/no-unassigned-import': 'off', // We import css/scss files globally in some cases
		'import/extensions': 'off',

		'jsx-a11y/anchor-is-valid': 'off', // Next.js has its own implementation of link
		'jsx-a11y/no-onchange': 'warn',
		'jsx-a11y/label-has-for': 'off', // Not picking up the htmlFor property

		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/ban-types': 'off',

		'react/react-in-jsx-scope': 'off', // NextJS no need React import
		'react/function-component-definition': 'off',
		'react/prop-types': 'off'
	},
	overrides: [
		{
			files: './**/*.tsx',
			rules: {
				'react/prop-types': 'off' // Not needed for TS
			}
		},
		{
			files: 'components/**/*',
			rules: {
				'node/no-unsupported-features/es-syntax': 'off' // Dynamic imports
			}
		},
		{
			files: 'pages/**/*',
			rules: {
				'node/no-unsupported-features/es-syntax': 'off' // Dynamic imports
			}
		},
		{
			files: './**/*.test.tsx',
			envs: ['es2020', 'node', 'browser', 'jest']
		}
	]
}
