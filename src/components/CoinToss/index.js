import {Component} from 'react'
import './index.css'
class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }
  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.heads + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }
  reset = () => {
    this.setState({total: 0, heads: 0, tails: 0})
  }
  render() {
    const {total, heads, tails, imageUrl} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="header">Coin Toss Game</h1>
          <p className="hort">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" />
          <div className="buttons">
            <button className="btn-toss" onClick={this.tossCoin}>
              Toss Coin
            </button>
            <button onClick={this.reset} className="reset">
              Reset
            </button>
          </div>
          <div className="results">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
        <footer className="app-footer">
          <p className="credit">
            Designed by <span className="author">Koushik</span>
          </p>

          <div className="social-links">
            <a
              className="social-link"
              href="https://github.com/Koushik-26-09/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.3 9.6 7.9 11.2.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 1.7 2.9 1.2.1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C16.7 5 17.7 5.3 17.7 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.8 5.5-5.4 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.6 7.9-6 7.9-11.2A11.5 11.5 0 0 0 12 .5z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              className="social-link"
              href="https://www.linkedin.com/in/koushik26"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              {/* LinkedIn icon (inline SVG) */}
              <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4 0 4.7 2.7 4.7 6.2V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.7 1.9-2.7 3.8V24h-4V8z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </footer>
      </div>
    )
  }
}
export default CoinToss
