import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from './pages/DashboardLayout';
import { Users } from './pages/Users';
import { UserDetails } from './pages/UserDetails';
import { NotFound } from './pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route
                        index
                        element={<h1>This is dashboard overview section</h1>}
                    />
                    <Route path="users" element={<Users />} />
                    <Route path="users/:userId" element={<UserDetails />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
