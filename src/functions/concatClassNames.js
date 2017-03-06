import {options} from '../_options'

/*
Take string or array and concat with prefix
Intended to alow for simple naming convention and prevent overides
whole app can be restyled by changing one value
*/

const concat = value => {
	if(!!options.classPrefix && options.classPrefix.length > 0){
		return `${options.classPrefix}-${value}`
	} else {
		return value
	}
}

export const concatClassNames = classnames => {
	if(typeof classnames === 'string'){
		/*Add prefix and return string*/
		return concat(classnames)

	} else if (!!classnames.map){
		/* IS ARRAY */
		/* Map array, adding prefix and returning */
		/* Join new array with space separator */
		return classnames.map(className => {
			return concat(className)
		}).join(' ')
	} else {
		console.error('Unsupported prop type', classnames)
	}	
}
