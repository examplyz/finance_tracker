import RouterProvider from "./app/RouterProvider.tsx";
import {Provider} from "react-redux";
import {store} from "./app/store.ts";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider/>
    </Provider>
  )
}

export default App
