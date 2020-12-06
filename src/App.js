import './App.css';
import ThemeContextProvider from './context/ThemeContext';
import {ThemeContextProvider2} from './context/ThemeContext2';
import BookList from './components/BookList'
import BookContextProvider from './context/BookContext';
import {BookContextProvider2} from './context/BookContext2';
import Family from './components/Family';

function App() {
  return (
    <>
    <ThemeContextProvider2>
    <BookContextProvider2>
          <Family/>
          <BookList/>
    </BookContextProvider2>
    </ThemeContextProvider2>
    
    </>
  );
}

export default App;
