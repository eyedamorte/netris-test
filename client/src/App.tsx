import { Provider } from "react-redux";
import { store } from "./store";
import { MainPage } from "./pages";

export function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}
