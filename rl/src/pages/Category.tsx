import CardLink from "@/components/list/CardLink"
import { useLinkStore } from "@/store/useLinkStore"
import { Container, Heading, Stack } from "@chakra-ui/react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
 import { Breadcrumb } from "@chakra-ui/react"


const Category = () => {
    const filteredLinks = useLinkStore(state => state.filteredLinks)
    const filterLinks = useLinkStore(state => state.filterLinks)
    const { tag } = useParams<string>();


    useEffect(() => {
        filterLinks(tag)
    }, [tag])


    return (
        <Container mt={50} mb={20}>
            <Breadcrumb.Root mb={10}>
                <Breadcrumb.List>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link>
                        <Link to="/">Главная</Link>
                        </Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                        <Breadcrumb.CurrentLink>{tag}</Breadcrumb.CurrentLink>
                    </Breadcrumb.Item>
                </Breadcrumb.List>
            </Breadcrumb.Root>

            <Heading mb={10} size="2xl">{tag}</Heading>
            <Stack gap={4}>
                {filteredLinks.map((link) => <CardLink {...link} key={link.id} />)}
            </Stack>
        </Container>
    )
}


export default Category