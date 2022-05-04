import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Categoty from './pages/Categoty';
import Recipe from './pages/Recipe';
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
                    <Route path="category/:name" element={<Categoty />}></Route>
                    <Route path="meal/:id" element={<Recipe />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
