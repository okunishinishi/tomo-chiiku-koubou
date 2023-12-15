import { Aside } from './Aside.js'
import React from 'react'

export function Asided ({
  render
}) {
  return (
    <div className="asided-container">
      <article className="asided-main">
        {render() ?? null}
      </article>
      <Aside/>
    </div>
  )
}
