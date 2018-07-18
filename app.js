const React = require('react')

const App = () => {
  return (
    <div>
      <h1 className="pa4 blue bg-yellow">React Simple Starter</h1>
      <main className="pa4">
        <p>This is a simple starter kit for react</p>
        <p>Features</p>
        <ul>
          <li>JSX</li>
          <li>Tachyons</li>
        </ul>
        <a href="https://glitch.com/edit/#!/react-starter-kit#README.md"><img src="https://img.shields.io/badge/glitch-remix-green.svg" /></a>
      </main>
    </div>
    
  )
}

module.exports = App