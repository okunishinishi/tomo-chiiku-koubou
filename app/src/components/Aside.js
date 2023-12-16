import React from 'react'
import { Link } from 'components/Router'
import { Profile } from './Profile'

export function Aside () {
  return (
    <div>
      <div className="aside-inner">
        <div className="aside-item">
          <Link to="/">
            <img src="/images/text-download-term.png"
                 height={64}
            />
          </Link>
        </div>
        <div className="aside-item">
          <div>
            <img src="/images/text-profile.png"
                 height={64}
            />
          </div>
          <div>
            <Profile />
          </div>
        </div>
      </div>
    </div>
  )
}
