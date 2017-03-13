import React from 'react'
import AtomsText from './views/AtomsText'
import AtomsColor from './views/AtomsColor'
import AtomsButton from './views/AtomsButton'
import AtomsContainer from './views/AtomsContainer'

import MoleculeHeaderText from './views/MoleculeHeader'
import MoleculeBodyText from './views/MoleculeBody'

import Component_CardSimple from './views/Component_CardSimple'

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
		"header text": {
			template: <MoleculeHeaderText />
		},
		"body text": {
			template: <MoleculeBodyText />
		}
	},
	components: {
		"simple card": {
			template: <Component_CardSimple />
		}
	},
	templates: {
		"first view": {}
}
}