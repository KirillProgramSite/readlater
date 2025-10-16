import { Flex, Link } from "@chakra-ui/react"

function Footer() {
    
    return (
        <Flex mt={100} mb={50} justify="space-between">
            <Link colorPalette="teal" variant="underline" target="_blank" href="https://github.com/KirillProgramSite/readlater">GitHub</Link>           
            <Link colorPalette="teal" variant="underline" target="_blank" href="https://github.com/KirillProgramSite/readlater/releases/tag/0.0.1">0.0.1</Link>
        </Flex>
    )
}

export default Footer