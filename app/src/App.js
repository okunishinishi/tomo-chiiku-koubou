import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App () {
  return (
    <Root>
      <header>
        <div>
          <img src="./images/title.png" alt="とも知育工房"
               className="header-img"
          />
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
