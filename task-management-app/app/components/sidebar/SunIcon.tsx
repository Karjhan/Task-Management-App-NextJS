import React from 'react'
import { Icon } from '@rsuite/icons';
import FaSvgIcon from '../FaSvgIcon';
import * as faSun from '@fortawesome/free-solid-svg-icons/faSun'

const SunIcon = () => {
  return (
    // @ts-ignore
    <Icon as={FaSvgIcon} faIcon={faSun}/>
  )
}

export default SunIcon