import EmptyNoSearch from "@/components/empty/EmptyNoSearch";
import LinkList from "@/components/linkList/LinkList";
import SearchLinks from "@/components/searchLinks/SearchLinks";
import SearchList from "@/components/searchList/searchList";
import { useLinkStore } from "@/store/useLinkStore";
import { Button, Container, Flex, Heading, Stack, VStack } from "@chakra-ui/react"
import { Plus } from 'lucide-react';
import { Link } from "react-router-dom";



function Main() {
    const searchLinksArr = useLinkStore((state) => state.searchLinks)
    const links = useLinkStore((state) => state.links)



    return (
        <VStack>
            <Container mt={50} mb={20}>
                <Flex justify="space-between">
                    <Heading mb={10} size="2xl">Список ваших ресурсов</Heading>
                    <Button colorPalette="blue" asChild>
                        <Link to="/add-link">
                            Добавить ссылку <Plus />
                        </Link>
                    </Button>
                </Flex>
                <SearchLinks />


                {links.length === 0 ? null : (searchLinksArr.length === 0 ? <EmptyNoSearch /> : null) }
                {searchLinksArr.length === 0 ? <LinkList /> : <SearchList />}
            </Container>
        </VStack>
    )
}

export default Main
