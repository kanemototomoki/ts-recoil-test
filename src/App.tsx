import './App.css';
import TitleForm from "./components/TitleForm";
import AddButton from "./components/AddButton";
import TodoList from "./components/TodoList";
import SearchForm from "./components/SearchForm";

const App: React.FC = () => {
  return (
    <div style={{ margin: 12 }}>
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
