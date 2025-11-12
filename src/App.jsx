import './App.css'
import Header from './components/header/header'
import Profile from './components/profile/profile'
import Cards from './components/cards/cards'
import links from './external/links'
import Footer from './components/footer/footer'


function App() {
  return (
    <div className="link-tree">
      <Header />
      <Profile />
      <Cards links={links} />
      <Footer />
    </div>
  )
}

export default App
