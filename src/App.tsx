import './styles/global/App.css';
import TitleForm from "./components/TitleForm";
import AddButton from "./components/AddButton";
import TodoList from "./components/TodoList";
import SearchForm from "./components/SearchForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <TitleForm />
        <AddButton />
      </div>
      <SearchForm />
      <TodoList />
    </div>
  );
};

export default App;
