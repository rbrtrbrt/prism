Prism.languages.matlab = {
	/*
		We put string before comment, because of printf() patterns
		that cause many highlighting issues.
		Having two single quotes inside a comment is probably
		less common.
	*/
	'string': /'(?:''|[^'\n])*'/g,
	'comment': [
		/%.+/g,
		/%\{[\s\S]*?\}%/
	],
	// FIXME We could handle imaginary numbers as a whole
	'number': /\b-?(?:\d*\.?\d+(?:[eE][+-]?\d+)?(?:[ij])?|[ij])\b/g,
	'keyword': /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
	'function': /(?!\d)\w+(?=\s*\()/g,
	'operator': /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/g,
	'punctuation': /\.{3}|[.,;\[\](){}!]/g
};