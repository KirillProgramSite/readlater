import { Stack } from "@chakra-ui/react"
import { useLinkStore } from "@/store/useLinkStore"
import CardLink from "../cardLink/CardLink"
import EmptyNoLinks from "../empty/EmptyNoLinks"


const LinkList = () => {
    const links = useLinkStore((state) => state.links)


    return (
        <Stack gap={4}>
            {links.length === 0 ? <EmptyNoLinks /> : links.map((link) => <CardLink {...link} key={link.id} />)}
        </Stack>
    )
}


export default LinkList