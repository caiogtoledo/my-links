import { useState } from 'react'
import './App.css'
import ProfilePicture from './components/profilePicture/profilePicture'
import LinkCard from './components/linkCard/linkCard'

import youtubeLogo from "./assets/youtube.png"
import gitHubLogo from "./assets/GitHub.png"
import instagramLogo from "./assets/Instagram.png"
import linkedinLogo from "./assets/LinkedIn.png"
import xLogo from "./assets/X.png"
import Header from './components/header/header'


function App() {
  const [links, setLinks] = useState([
    {
      link: "https://www.youtube.com/@caiotoledodev",
      logo: youtubeLogo,
      linkName: "YouTube",
    },
    {
      link: "https://www.youtube.com/@caiotoledodev",
      logo: gitHubLogo,
      linkName: "GitHub",
    },
    {
      link: "https://www.youtube.com/@caiotoledodev",
      logo: linkedinLogo,
      linkName: "LinkedIn",
    },
    {
      link: "https://www.youtube.com/@caiotoledodev",
      logo: instagramLogo,
      linkName: "Instagram",
    },
    {
      link: "https://www.youtube.com/@caiotoledodev",
      logo: xLogo,
      linkName: "X",
    }
  ])

  return (
    <div className="link-tree">
      <Header />
      <section>
        <div>
          <ProfilePicture />
        </div>
        <h1>Caio Toledo</h1>
        <div className="list-cards">
          {links.map((item) =>
            < LinkCard
              link={item.link}
              logo={item.logo}
              linkName={item.linkName}
            />
          )}

        </div>
      </section>
      <p className="read-the-docs">
        Desenvolvido por: Caio Toledo
      </p>
    </div>
  )
}

export default App
