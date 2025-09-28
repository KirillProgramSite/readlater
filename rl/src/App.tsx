import { useEffect } from "react";
import Main from "./pages/Main";
import { useLinkStore } from "./store/useLinkStore";

function App() {
    const links = useLinkStore((state) => state.links)


    useEffect(() => {
        console.log(links)
    }, [links])

    return (
        
       <Main />
    )
}

export default App
