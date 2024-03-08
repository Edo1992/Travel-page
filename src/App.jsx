import React from 'react'
import Header from './components/Header'
import Journal from './components/Journal'
import data from './data';
import './App.css'

function App() {
    const siteInfo=data.map(site=>{
     return (
      <Journal 
      key={site.id}
      site={site}
  />
     )
    
      
  })
 
  return (
      <div>
         <Header />
         <main>
              {siteInfo}
         </main>
        
      </div>
  )
}

export default App
