import {Component} from 'react'
import BrowserItem from '../BrowserItem'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

export default class BrowserHistory extends Component {
  state = {val: initialHistoryList}

  getChange = e => {
    const s = e.target.value
    const results = initialHistoryList.filter(each =>
      each.title.toLowerCase().includes(s.toLowerCase()),
    )
    this.setState({val: results})
    console.log(results)
  }

  dlt = id => {
    const {val} = this.state
    const res = val.filter(each => each.id !== id)
    this.setState({val: res})
  }

  render() {
    const {val} = this.state

    return (
      <div>
        <div className="navBar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
          />
          <div className="searchBox">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              type="search"
              onChange={this.getChange}
              placeholder="search history"
            />
          </div>
        </div>
        <div className="results">
          {val.length < 1 ? (
            <div className="items">
              <p>There is no history to show</p>
            </div>
          ) : (
            <ul>
              {val.map(each => (
                <BrowserItem key={each.id} details={each} dltBut={this.dlt} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
