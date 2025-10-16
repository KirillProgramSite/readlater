import Footer from "@/components/footer/Footer"
import { Container } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"


const Layout = () => {
    return (
        <>
            <Outlet />
            <Container>
                <Footer />
            </Container>
        </>
    )
}

export default Layout