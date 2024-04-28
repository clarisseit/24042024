import { Provider } from 'react-redux';
import Store from "./Redux/store"
import App from "./App";

export const index = () => {
    return (
        <Provider store={Store}>
            <App />
        </Provider>
    )
}
