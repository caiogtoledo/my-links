import { useState } from 'react'
import './App.css'
import ProfilePicture from './components/profilePicture/profilePicture'
import LinkCard from './components/linkCard/linkCard'

import youtubeLogo from "./assets/youtube.png"
import gitHubLogo from "./assets/github.png"
import instagramLogo from "./assets/instagram.png"
import linkedinLogo from "./assets/linkedin.png"
import xLogo from "./assets/x.png"
import Header from './components/header/header'


function App() {
  const [links, setLinks] = useState([
    {
      link: "https://www.youtube.com/@caiotoledodev",
      logo: youtubeLogo,
      linkName: "YouTube",
    },
    {
      link: "https://github.com/caiogtoledo",
      logo: gitHubLogo,
      linkName: "GitHub",
    },
    {
      link: "https://www.linkedin.com/in/caio-toledo",
      logo: linkedinLogo,
      linkName: "LinkedIn",
    },
    {
      link: "https://www.instagram.com/caiotoledo.dev/",
      logo: instagramLogo,
      linkName: "Instagram",
    },
    {
      link: "https://x.com/caiogtoledo",
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
