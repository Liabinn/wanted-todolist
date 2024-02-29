import './App.css';
import Header from './components/List/Header';
import Form from './components/List/Form';
import TodoList from './components/List/TodoList';

function App() {
  return (
    <div className='App'>
      <Header />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
