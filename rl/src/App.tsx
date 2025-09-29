import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Category from "./pages/Category";



function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route index path="/" element={<Main />} />
            <Route index path="/:tag" element={<Category />} />
        </Routes>
        </BrowserRouter>     
    )
}

export default App
