import FormAddLink from "@/components/formAddLink/FormAddLink";
import { Breadcrumb, Container, Heading, Stack, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom";


function AddLink() {
    return (
        <Container>
             <Breadcrumb.Root mt={10} mb={10}>
                <Breadcrumb.List>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link>
                            <Link to="/">Главная</Link>
                        </Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                        <Breadcrumb.CurrentLink>Добавление ссылки</Breadcrumb.CurrentLink>
                    </Breadcrumb.Item>
                </Breadcrumb.List>
            </Breadcrumb.Root>



            <FormAddLink />
        </Container>
    )
}

export default AddLink
