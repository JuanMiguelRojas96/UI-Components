import React from 'react'
import { SvgIconContainer, SvgIconStyle } from './SvgIcon.style'

const SvgIcon = ({ name }: { name: string }) => {

  const url = require(`../../assets/icons/${name}.svg`);
  return (
    <SvgIconContainer>
      <SvgIconStyle src={url} />
    </SvgIconContainer>
  )
}

export default SvgIcon
