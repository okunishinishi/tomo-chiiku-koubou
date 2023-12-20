import React from 'react'
import { Root, Routes } from 'react-static'
import { Link, Router } from 'components/Router'

import './styles/base.css'
import './styles/header.css'
import './styles/breadcrumb.css'
import './styles/aside.css'
import './styles/profile.css'
import './styles/list.css'
import './styles/post.css'
import './styles/term.css'
import { Asided } from './components/Asided'
import { GA } from './components/GA'

function App () {
  return (
    <Root>
      <GA/>
      <header>
        <div className="header-row">
          <Link to="/" className="header-link">
            <img src="/images/title.png" alt="とも知育工房"
                 className="header-img"
            />
          </Link>
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
              <Routes path="*"/>
            </Router>
          </React.Suspense>
        )}/>
      </main>
    </Root>
  )
}

export default App
