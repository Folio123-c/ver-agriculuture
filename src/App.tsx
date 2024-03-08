import HomePage from './pages/homePage'
import MainRouter from './routes/mainRoutes';
import { Provider } from "react-redux";
import { store } from "./Redux/Store/index";
function App() {

  return (
    <Provider store={store}>
    <>
     <MainRouter/>
    </>
    </Provider>

  )
}

export default App
