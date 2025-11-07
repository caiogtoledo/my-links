import { useState } from 'react'
import './App.css'
import ProfilePicture from './components/profilePicture/profilePicture'
import LinkCard from './components/linkCard/linkCard'
import Header from './components/header/header'


function App() {
  const [links, setLinks] = useState([
    {
      link: "https://www.youtube.com/@caiotoledodev",
      logo: "/youtube.png",
      linkName: "YouTube",
    },
    {
      link: "https://github.com/caiogtoledo",
      logo: "/github.png",
      linkName: "GitHub",
    },
    {
      link: "https://www.linkedin.com/in/caio-toledo",
      logo: "/linkedin.png",
      linkName: "LinkedIn",
    },
    {
      link: "https://www.instagram.com/caiotoledo.dev/",
      logo: "/instagram.png",
      linkName: "Instagram",
    },
    {
      link: "https://x.com/caiogtoledo",
      logo: "/x.png",
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
