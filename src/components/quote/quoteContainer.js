import Quote from "./quote";
import { connect } from "react-redux";
import { getQuotes, setCurrentColor, setCurrentQuote } from "./../../redux/reducer";
import { useEffect } from "react";



function QuoteContainer(props) {

    let getNewNumber = (obj) => {
        return Math.floor(Math.random() * obj.length)
    }

    let setCurrentsValues = () => {
        if (props.quotes.length === 0) {
            props.getQuotes();
        }
        let currentColor = props.colors[getNewNumber(props.colors)];
        let currentQuote = props.quotes[getNewNumber(props.quotes)];
        props.setCurrentColor(currentColor);
        props.setCurrentQuote(currentQuote);
    }

    useEffect(() => {
        setCurrentsValues();// eslint-disable-next-line
    }, [props.quotes])

    return <Quote currentColor={props.currentColor} currentQuote={props.currentQuote} setCurrentsValues={setCurrentsValues} />
}

let mapStateToProps = (state) => ({
    colors: state.colors,
    quotes: state.quotes,
    currentColor: state.currentColor,
    currentQuote: state.currentQuote,
})

export default connect(mapStateToProps, { getQuotes, setCurrentColor, setCurrentQuote })(QuoteContainer);