import Book from "./Book"

function BookList() {
  return (
    <ul className="book-list">
      <Book title="Atomic Habits" />
      <Book title="Rich Dad Poor Dad" />
      <Book title="The Alchemist" />
    </ul>
  )
}

export default BookList 