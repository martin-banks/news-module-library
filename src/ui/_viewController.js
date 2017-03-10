import React from 'react'
import AtomsText from './views/AtomsText'
import AtomsColor from './views/AtomsColor'
import AtomsButton from './views/AtomsButton'
import AtomsContainer from './views/AtomsContainer'

export const viewController = {
	atoms: {
		text: {
			template: <AtomsText />
		},
		color: {
			template: <AtomsColor />
		},
		button: {
			template: <AtomsButton />
		},
		container: {
			template: <AtomsContainer />
		}
	},
	molecules: {
		"first view": {}
	},
	components: {
		"first view": {}
	},
	templates: {
		"first view": {}
}
}