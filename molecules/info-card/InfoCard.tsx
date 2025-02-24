import React from 'react'
import SvgIcon from '../../atoms/icon/SvgIcon'
import { InfoCardContainer, InfoCardCuantity, InfoCardDescription, InfoCardTitle } from './InfoCard.style'

export interface InfoCardProps {
  icon : string,
  title : string,
  cuantity : number,
  description : string
}
const InfoCard = ({icon, title, cuantity, description}: InfoCardProps) => {

  return (
    <InfoCardContainer>
      <InfoCardTitle>
        <SvgIcon name={icon} />
        {title}
      </InfoCardTitle>
      <InfoCardCuantity>
        {cuantity}
      </InfoCardCuantity>
      <InfoCardDescription>
        {description}
      </InfoCardDescription>
    </InfoCardContainer>
  )
}

export default InfoCard
