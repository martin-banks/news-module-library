import React from 'react'
import AtomsText from './views/AtomsText'
import AtomsColor from './views/AtomsColor'
import AtomsButton from './views/AtomsButton'

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
		}
	},
	molecules: {},
	components: {},
	templates: {}
}