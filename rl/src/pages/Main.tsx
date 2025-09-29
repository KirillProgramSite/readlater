import FormAddLink from "@/components/formAddLink/FormAddLink";
import CardLink from "@/components/list/CardLink";
import { useLinkStore } from "@/store/useLinkStore";
import { Button, Container, Heading, Stack, Text, VStack } from "@chakra-ui/react"


function Main() {
    const links = useLinkStore((state) => state.links)

    


    return (
        <VStack>
            <FormAddLink />
            <Container mt={50} mb={20}>
                <Heading mb={10} size="2xl">Список ваших ресурсов</Heading>
                <Stack gap={4}>
                    {links.length == 0 ? <Text colorPalette="red">Добавьте новые ссылки</Text> : links.map((link) => <CardLink {...link} key={link.id} />)}
                </Stack>
            </Container>
        </VStack>
    )
}

export default Main
