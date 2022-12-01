import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
    return (
        <div>
            <Header />
            <Navigation />

            {/* This only exists to add space to the page*/}
            <div style={{height: '400vh'}}></div>
        </div>
    );
}

export default App;
