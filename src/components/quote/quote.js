import "./quote.css";


function Quote(props) {
    if (!props.currentQuote) {
        return "Loading...";
    }

    let newQuoteClick = () => {
        props.setCurrentsValues()
    }



    return (
        <div className="background smoothness" style={{ backgroundColor: props.currentColor }}>
            <main className="main">
                <div className="quote">
                    <i className="fas fa-quote-left smoothness" style={{ color: props.currentColor }}></i>
                    <strong className="smoothness" style={{ color: props.currentColor }}>{props.currentQuote.quote}</strong>
                </div>
                <div className="author smoothness" style={{ color: props.currentColor }}><p >-{props.currentQuote.author}</p></div>
                <div className="buttons">
                    <button className="smoothness" style={{ backgroundColor: props.currentColor }} onClick={newQuoteClick} >New quote</button>
                </div>
            </main >
        </div>
    );
}

export default Quote;