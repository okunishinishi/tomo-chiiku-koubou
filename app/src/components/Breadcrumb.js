import React from 'react'
import { Link } from './Router'

export function Breadcrumb ({
  links = []
}) {
  return (<div className="breadcrumb">
      <Link to="/" className="breadcrumb-button">ホーム</Link>
      {links.map(({ to, label }) => (<>
        <span className="breadcrumb-separator">{'>'}</span>
        <Link to={to} key={[to, label].join('-')}
              className="breadcrumb-button"
        >
          {label.replace(/\s/g, ' ')}
        </Link>
      </>))}
    </div>

  )
}
