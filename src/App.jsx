import Header from "./components/Header"
import data from "./data/data.js"
import Card from "./components/Card.jsx"

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.title}
        {...item}

        />
    )
  })
  
  return (
    <>
      <Header />
      <section className="cards-list">
          {cards}
      </section>
    </>
  )
}

export default App
