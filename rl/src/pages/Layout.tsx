import Footer from "@/components/footer/Footer"
import { Container, VStack } from "@chakra-ui/react"
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