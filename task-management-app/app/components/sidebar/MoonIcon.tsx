import * as faMoon from '@fortawesome/free-solid-svg-icons/faMoon'
import React from 'react'
import { Icon } from '@rsuite/icons';
import FaSvgIcon from '../FaSvgIcon'

const MoonIcon = () => {
    return (
        <Icon as={FaSvgIcon} faIcon={faMoon}/>
    )
}

export default MoonIcon