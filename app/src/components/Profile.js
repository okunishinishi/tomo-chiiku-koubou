import React from 'react'

export function Profile () {
  return (
    <div className="profile">
      <img src="/images/avatar.png"
           height={148}
      />
      <h3>とも</h3>

      <ul className="profile-list">
        <li>3歳の娘を子育て中のワーママ</li>
        <li>幼・小教員免許保持</li>
        <li>おもちゃコンサルタント</li>
      </ul>

      <p>
        娘と一緒に遊べて知育になる素材作りに夢中です！作った素材をシェアするサイトを作りました。ぜひお子さんとおうち知育を楽しんでくださいね♪
      </p>
    </div>
  )
}
