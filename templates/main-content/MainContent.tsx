import React from 'react'
import {MainContent, MainContentContainer} from './MainContent.style'

const MainContentWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <MainContent>
      <MainContentContainer>
        {children}
      </MainContentContainer>
    </MainContent>
  )
}

export default MainContentWrapper