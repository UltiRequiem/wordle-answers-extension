const config = [
	{ignores: ['package.json']},
	{
		rules: {
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'package-json/prefer-files-field': 'off',
			'package-json/prefer-type-module': 'off',
			'package-json/require-engines': 'off',
			'package-json/require-fields': 'off',
			'package-json/sort-properties': 'off',
			'package-json/prefer-exports': 'off',
			'package-json/consistent-path-prefix': 'off',
		},
	},
];

export default config;
