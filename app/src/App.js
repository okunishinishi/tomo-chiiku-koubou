import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App () {
  return (
    <Root>
      <header>
        <div className="header-row">
          <img src="./images/title.png" alt="とも知育工房"
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
        <div className="asided-container">
          <article className="asided-main">
            <React.Suspense fallback={<em>Loading...</em>}>
              <Router>
                <Dynamic path="dynamic"/>
                <Routes path="*"/>
              </Router>
            </React.Suspense>
          </article>
        </div>
      </main>
    </Root>
  )
}

export default App
