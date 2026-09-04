import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/*',
        element: <NotFound />,
    },
];

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
