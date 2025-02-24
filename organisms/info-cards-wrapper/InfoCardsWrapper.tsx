import React from 'react'
import InfoCard, { InfoCardProps}  from '../../molecules/info-card/InfoCard'
import { InfoCardsWrapperContainer } from './InfoCardsWrapper.style'
const InfoCardsWrapper = ({infoCards}: {infoCards: InfoCardProps[]}) => {
  return (
    <InfoCardsWrapperContainer>
      {infoCards.map((card : InfoCardProps) => (
        <InfoCard key={card.title} icon={card.icon} title={card.title} cuantity={card.cuantity} description={card.description} />
      ))}
    </InfoCardsWrapperContainer>
  )
}

export default InfoCardsWrapper
