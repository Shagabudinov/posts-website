import "./App.css";
import { PostsList } from "./features/posts/PostsList";
import SearchInput from "./features/search/SearchInput";

let screenWidth = Math.round(window.innerWidth * 0.6);
let screenHeight = Math.round((screenWidth * 2) / 3);

function App() {
    return (
        <div className="App">
          <h1 style={{textAlign: "center"}}>Блог</h1>
          <p>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
          <SearchInput />
            <PostsList />
        </div>
    );
}

export { screenWidth, screenHeight };
export default App;
