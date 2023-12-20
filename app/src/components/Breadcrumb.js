import React from 'react'
import { Link } from './Router'

export function Breadcrumb ({
  links = []
}) {
  return (<div className="breadcrumb">
      <Link to="/" className="breadcrumb-button"
            key={'home'}
      >ホーム</Link>
      {links.map(({ to, label }, i) => (<>
        <span className="breadcrumb-separator">{'>'}</span>
        <Link to={to}
              key={[to, label, i].join('-')}
              className="breadcrumb-button"
        >
          {label.replace(/\s/g, ' ')}
        </Link>
      </>))}
    </div>

  )
}
