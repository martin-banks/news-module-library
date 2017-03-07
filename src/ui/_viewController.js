import React from 'react'
import AtomsText from './views/AtomsText'
import AtomsColor from './views/AtomsColor'

export const viewController = {
	atoms: {
		text: {
			template: <AtomsText />
		},
		color: {
			template: <AtomsColor />
		}
	}
}