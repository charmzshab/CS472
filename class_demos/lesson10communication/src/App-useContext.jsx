import { UserProvider } from './contexts/UserContext'
import A from './components/usecontext/A'

function App() {
    // console.log('App');
    return (
        <UserProvider>
            <A />
        </UserProvider>

    );
}


export default App;
