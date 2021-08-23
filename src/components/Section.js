const Section = ({ title, content }) => {
    return(
        <section className="section">
            <div className="title">
                <h2>{title}</h2>
            </div>
            {content}
        </section>
    )
}

export default Section;