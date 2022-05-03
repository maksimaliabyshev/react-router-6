import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound';

function App() {
    return (
        <>
            <Header />
            <main className="container content">
                <Routes>
                    <Route path="/" element={<Home />}>
                        {/* <Route index path="/home" element={<Home />}></Route> */}
                    </Route>
                    <Route path="about" element={<About />}></Route>
                    <Route path="contacts" element={<Contact />}></Route>
                    <Route path="movies" element={<Movie />}></Route>
                    <Route path="movies/:id" element={<Movie />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
