import './App.css';
import ThemeContextProvider from './context/ThemeContext';
import BookList from './components/BookList'

function App() {
  return (
    <ThemeContextProvider>
      <BookList/>
    </ThemeContextProvider>
  );
}

export default App;
