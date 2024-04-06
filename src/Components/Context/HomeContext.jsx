import React from 'react'
import { ContextProvider} from './Context'
import ApplyContext from './ApplyContext'
import OtherContext from './OtherContext'

function HomeContext() {
  
  return (
    <>
      <ContextProvider>
        <ApplyContext/>
        <OtherContext/>
      </ContextProvider>
    </>
  )
}

export default HomeContext