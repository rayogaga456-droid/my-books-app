import Book from "./Book"

function BookList() {
  return (
    <ul className="book-list">
      <Book title="The Last Kids On Earth" />
      <Book title="Clean Code" />
      <Book title="The Alchemist" />
    </ul>
  )
}

export default BookList 