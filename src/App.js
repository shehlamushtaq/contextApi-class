import './App.css';
import ThemeContextProvider from './context/ThemeContext';
import BookList from './components/BookList'
import BookContextProvider from './context/BookContext';
import {BookContextProvider2} from './context/BookContext2';

function App() {
  return (
    <>
    <ThemeContextProvider>
    <BookContextProvider2>
          <BookList/>
    </BookContextProvider2>
    </ThemeContextProvider>
    
    </>
  );
}

export default App;
