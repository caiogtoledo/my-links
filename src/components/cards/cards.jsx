import LinkCard from '../linkCard/linkCard'

function Cards({ links }) {
    return (
        <div className="list-cards">
            {links.map((item) =>
                < LinkCard
                    link={item.link}
                    logo={item.logo}
                    linkName={item.linkName}
                />
            )}
        </div>
    )
}

export default Cards