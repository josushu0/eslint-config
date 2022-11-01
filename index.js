module.exports = {
	'rules': {
		'array-bracket-newline': [ 'error', { 'multiline': true }],
		'array-bracket-spacing': [
			'error',
			'never'
		],
		'array-element-newline': [ 'error', 'consistent'],
		'arrow-body-style': [ 'error', 'as-needed' ],
		'arrow-parens': [ 'error', 'always' ],
		'arrow-spacing': [
			'error',
			{
				'before': true,
				'after': true
			}
		],
		'block-spacing': [ 'error', 'always' ],
		'brace-style': [ 'error', '1tbs', { 'allowSingleLine': true }],
		'comma-dangle': [ 'error', 'never' ],
		'comma-spacing': [
			'error',
			{
				'before': false,
				'after': true
			}
		],
		'comma-style': [ 'error', 'last' ],
		'computed-property-spacing': [ 'error', 'always' ],
		'dot-location': [ 'error', 'property' ],
		'eol-last': [ 'error', 'always' ],
		'eqeqeq': [ 'error', 'smart' ],
		'func-call-spacing': [ 'error', 'never' ],
		'function-call-argument-newline': [ 'error', 'never' ],
		'function-paren-newline': [ 'error', 'multiline' ],
		'generator-star-spacing': [
			'error',
			{
				'before': true,
				'after': false
			}
		],
		'implicit-arrow-linebreak': [ 'error', 'beside' ],
		'indent': [ 'error', 'tab' ],
		'jsx-quotes': [ 'error', 'prefer-single' ],
		'key-spacing': [
			'error',
			{
				'beforeColon': false,
				'afterColon': true,
				'mode': 'minimum'
			}
		],
		'keyword-spacing': [
			'error',
			{
				'before': true,
				'after': true
			}
		],
		'line-comment-position': [ 'error', 'above' ],
		'linebreak-style': [ 'error', 'unix' ],
		'lines-around-comment': [
			'error',
			{
				'beforeBlockComment': true,
				'afterBlockComment': false,
				'beforeLineComment': true,
				'afterLineComment': false,
				'allowBlockStart': true,
				'allowBlockEnd': false,
				'allowObjectStart': true,
				'allowObjectEnd': false,
				'allowArrayStart': false,
				'allowArrayEnd': false,
				'allowClassStart': true,
				'allowClassEnd': false
			}
		],
		'lines-between-class-members': [ 'error', 'always', { 'exceptAfterSingleLine': true }],
		'max-len': [
			'error',
			{
				'code': 100,
				'tabWidth': 2
			}
		],
		'max-statements-per-line': [ 'error', { 'max': 1 }],
		'multiline-ternary': [ 'error', 'always-multiline' ],
		'new-parens': [ 'error', 'never' ],
		'newline-per-chained-call': [ 'error', { 'ignoreChainWithDepth': 2 }],
		'no-extra-parens': [ 'error', 'all' ],
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-spaces': 'error',
		'no-multiple-empty-lines': [ 'error', { 'max': 2 }],
		'no-trailing-spaces': [
			'error',
			{
				'skipBlankLines': false,
				'ignoreComments': false
			}
		],
		'no-whitespace-before-property': 'error',
		'object-curly-newline': [ 'error', { 'multiline': true }],
		'object-curly-spacing': [
			'error',
			'always',
			{
				'arraysInObjects': true,
				'objectsInObjects': true
			}
		],
		'object-property-newline': 'error',
		'operator-linebreak': [
			'error',
			'none',
			{
				'overrides': {
					'?': 'ignore',
					':': 'ignore'
				}
			}
		],
		'padded-blocks': [ 'error', 'never' ],
		'quotes': [ 'error', 'single' ],
		'rest-spread-spacing': [ 'error', 'never' ],
		'semi': [ 'error', 'never' ],
		'semi-spacing': [
			'error',
			{
				'before': false,
				'after': true
			}
		],
		'semi-style': [ 'error', 'last' ],
		'space-before-blocks': [ 'error', 'always' ],
		'space-before-function-paren': [
			'error',
			{
				'anonymous': 'always',
				'named': 'never',
				'asyncArrow': 'always'
			}
		],
		'space-in-parens': [ 'error', 'never' ],
		'space-infix-ops': 'error',
		'space-unary-ops': [
			'error',
			{
				'words': true,
				'nonwords': false
			}
		],
		'switch-colon-spacing': [
			'error',
			{
				'after': true,
				'before': false
			}
		],
		'template-curly-spacing': [ 'error', 'never' ],
		'template-tag-spacing': [ 'error', 'never' ],
		'unicode-bom': [ 'error', 'never' ],
		'wrap-iife': [ 'error', 'outside' ],
		'wrap-regex': 'error',
		'yield-star-spacing': [ 'error', 'both' ]
	}
}
