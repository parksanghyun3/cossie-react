import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { BlogForm } from "./components/BlogForm";
import { NavBar } from "./components/NavBar";
import { routes } from "./routes";


function App() {
  // setNumber는 함수
  // useState를 사용하면 리액트는 렌더링 됌

  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          {routes.map((route) => {
            return <Route key={route.path} exact path={route.path} component={route.component} />
          })}
        </Switch>
      </div>
    </Router>
  )
}

export default App; 

{/* <Route path="/" exact>
  <HomePage />
</Route>,
<Route path="/blogs" exact>
  <ListPage />
</Route>,
<Route path="/blogs/create" exact>
  <CreatePage />
</Route>,
<Route path="/blogs/edit" exact>
  <EditPage />
</Route> */}