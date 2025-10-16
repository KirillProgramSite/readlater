import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Category from "./pages/Category";
import AddLink from "./pages/AddLink";
import Layout from "./pages/Layout";




function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path=":tag" element={<Category />} />
                    <Route path="add-link" element={<AddLink />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
