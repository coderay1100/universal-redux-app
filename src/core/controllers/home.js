import React from 'react'
import createController from '../../utils/controllerFactory'

// Components
import Home from '../../components/Home'

// Reducers
import * as reducers from '../reducers/home'

// Templates
import { fullPage } from '../../utils/templates'

export default createController(reducers, <Home />, fullPage)