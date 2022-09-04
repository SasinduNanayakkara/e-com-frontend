import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../pages/home/Home";

export const PageRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}