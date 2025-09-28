import FormAddLink from "@/components/formAddLink/FormAddLink";
import CardLink from "@/components/list/CardLink";
import { Container, Heading, Stack, VStack } from "@chakra-ui/react"


function Main() {
    return (
        <VStack>
            <FormAddLink />
            <Container mt={50} mb={20}>
                <Heading mb={20} size="2xl">Список ваших ресурсов</Heading>
                <Stack gap={4}>
                    <CardLink />
                     <CardLink />
                      <CardLink />
                </Stack>
            </Container>
        </VStack>
    )
}

export default Main
