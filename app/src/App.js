import React from 'react'
import { Head, Root, Routes, useSiteData } from 'react-static'
import { Link, Router } from 'components/Router'

import './styles/base.css'
import './styles/header.css'
import './styles/breadcrumb.css'
import './styles/aside.css'
import './styles/profile.css'
import './styles/list.css'
import './styles/post.css'
import './styles/term.css'
import './styles/scroll.css'
import { Asided } from './components/Asided'
import { GA } from './components/GA'
import { ScrollToTopButton } from './components/ScrollToTopButton'

function App () {
  const {
    appTitle,
    appDescription
  } = useSiteData()
  return (
    <Root>
      <GA/>
      <Head>
        <meta name="google-site-verification" content="Q0Nv-ILCP08JCV33VdQ5No4MeMlyTVib-WTJe2FTqas"/>
      </Head>
      <header>
        <div className="header-row">
          <Link to="/" className="header-link">
            <img src="/images/title.png" alt={appTitle}
                 className="header-img"
            />
          </Link>
        </div>
        <div className="header-row">
          <p className="header-msg">
            {appDescription}
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
        <ScrollToTopButton/>
      </main>
    </Root>
  )
}

export default App
