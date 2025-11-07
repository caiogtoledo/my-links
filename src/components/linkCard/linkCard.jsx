import './linkCard.css'

function LinkCard({ logo, linkName, link }) {
    return (
        <a href={link}>
            <div className='link-card'>
                <img src={logo}></img>
                <div className='link-name'>{linkName}</div>
            </div>
        </a>
    )
}

export default LinkCard
