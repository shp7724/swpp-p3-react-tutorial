import "./App.css";
import TodoList from "./containers/TodoList/TodoList"; // can omit.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewTodo from "./containers/TodoList/NewTodo/NewTodo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/todos" element={<TodoList title={"My TODOs!"} />} />
          <Route path="/new-todo" element={<NewTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

<div className="TodoList"></div>;
/* actually, it uses className, not class to avoid collision btw JS class
 * this syntax is compiled to React.createElement(‘div’, {className: ‘TodoList’})
 * by React Transpiler.
 * );
 */
