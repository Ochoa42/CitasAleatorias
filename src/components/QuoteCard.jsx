import "./QuoteCard.css"

 // eslint-disable-next-line react/prop-types
 const QuoteCard = ({quote, handleChangeQuote}) => {
    console.log(quote)

  return (
    <section className="quoteCard">
         <article className="quoteCard__container">
            <h1 className="quoteCard__title">Infogalax</h1>
            <div className="container__phrase">
            <p className="quoteCard__phrase">{quote.phrase}</p>
            </div>
            <button className="quoteCard__btn" onClick={handleChangeQuote}><i class='bx bx-reset'></i></button>
         </article>

        <footer className="quoteCard__footer">
            Autor: {quote.author}
        </footer>
    </section>
  )
}

export default QuoteCard