import EmptyNoLinks from "@/components/empty/EmptyNoLinks";
import EmptyNoSearch from "@/components/empty/EmptyNoSearch";
import LinkList from "@/components/linkList/LinkList";
import SearchLinks from "@/components/searchLinks/SearchLinks";
import SearchList from "@/components/searchList/searchList";
import { useLinkStore } from "@/store/useLinkStore";
import { Box, Button, Container, Flex, Heading, Tabs, VStack } from "@chakra-ui/react"
import { LinkIcon, Plus, Search } from 'lucide-react';
import { Link } from "react-router-dom";



function Main() {
    const searchLinksArr = useLinkStore((state) => state.searchLinks)
    const links = useLinkStore((state) => state.links)



    return (
        <VStack>
            <Container mt={50} mb={20}>
                {/* {searchLinksArr.length === 0 ? <LinkList /> : <SearchList />} */}
                <Tabs.Root defaultValue="list" variant="line">
                    <Tabs.List>
                        <Tabs.Trigger value="list">
                            <LinkIcon />
                            Список
                        </Tabs.Trigger>
                        <Tabs.Trigger value="search">
                            <Search />
                            Поиск
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="list">
                        <Flex mt={10} justify="space-between">
                            <Heading mb={10} size="2xl">Список ваших ресурсов</Heading>
                            <Button colorPalette="blue" asChild>
                                <Link to="/add-link">
                                    Добавить ссылку <Plus />
                                </Link>
                            </Button>
                        </Flex>
                        {links.length === 0 ? <EmptyNoLinks /> : <LinkList />}
                    </Tabs.Content>
                    <Tabs.Content value="search">
                        <Box mt={10}>
                            <SearchLinks />
                            {searchLinksArr.length === 0 ? <EmptyNoSearch /> : <SearchList />}
                        </Box>

                    </Tabs.Content>
                </Tabs.Root>
            </Container>
        </VStack>
    )
}

export default Main
