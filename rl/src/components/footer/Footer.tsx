import { Flex, Link, Text } from "@chakra-ui/react"

function Footer() {
    
    return (
        <Flex mt={250} justify="space-between">
            <Link colorPalette="teal" variant="underline" target="_blank" href="https://github.com/KirillProgramSite/readlater">GitHub</Link>
            <Text colorPalette="gray">0.0.1</Text>
        </Flex>
    )
}

export default Footer