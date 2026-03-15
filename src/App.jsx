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
          name="Sunita Kumar"
          job="Electrical Engineer"
          email="sunita.kumar@acme.co"
        />

        <ContactCard
          name="David Lee"
          job="Software Developer"
          email="david.lee@acme.co"
        />
      </ul>

    </div>
  )
}

export default App