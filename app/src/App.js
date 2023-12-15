import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import './styles/base.css'
import './styles/aside.css'
import './styles/profile.css'
import { Asided } from './components/Asided'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App () {
  return (
    <Root>
      <header>
        <div className="header-row">
          <img src="images/title.png" alt="とも知育工房"
               className="header-img"
          />
        </div>
        <div className="header-row">
          <p className="header-msg">
            親子'とも'に楽しくて知育になる！ 未就学児向けの知育プリントや素材を公開中！
          </p>
        </div>
      </header>
      <main>
        <Asided render={() => (
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic"/>
              <Routes path="*"/>
            </Router>
          </React.Suspense>
        )}/>
      </main>
    </Root>
  )
}

export default App
