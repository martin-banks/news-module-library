import React from 'react'
import AtomsText from './views/AtomsText'
import AtomsColor from './views/AtomsColor'
import AtomsButton from './views/AtomsButton'
import AtomsContainer from './views/AtomsContainer'
import AtomsImage from './views/AtomsImage'

import MoleculeHeaderText from './views/MoleculeHeader'
import MoleculeBodyText from './views/MoleculeBody'
import Molecule_TimelineCard from './views/Molecule_TimelineCard'

import Component_CardSimple from './views/Component_CardSimple'
import Component_Timeline_Split from './views/Component_Timeline_Split'

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
		},
		images: {
			template: <AtomsImage />
		}
	},

	molecules: {
		"header text": {
			template: <MoleculeHeaderText />
		},
		"body text": {
			template: <MoleculeBodyText />
		},
		"timeline card": {
			template: <Molecule_TimelineCard />
		}
	},

	components: {
		"simple card": {
			template: <Component_CardSimple />
		},
		"twin timeline": {
			template: <Component_Timeline_Split />
		}
	},
	
	/*templates: {
		"first view": {}
	}*/
}