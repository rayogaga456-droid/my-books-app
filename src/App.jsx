import Header from "./components/Header"
import BookList from "./components/BookList"
import ContactCard from "./components/ContactCard"
import "./App.css"

function App() {
  return (
    <div className="container">

      <Header />

      <BookList />

      <h2>Contacts</h2>

      <ul>
        <ContactCard
          name="Megumi Fushiguro"
          job="Electrical Engineer"
          email="Megimi@gmail.com"
        />

        <ContactCard
          name="Ray Rafael"
          job="Software Developer"
          email="ray@gmail.com"
        />
      </ul>

    </div>
  )
}

export default App
