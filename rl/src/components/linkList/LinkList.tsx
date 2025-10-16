import { Stack } from "@chakra-ui/react"
import { useLinkStore } from "@/store/useLinkStore"
import CardLink from "../cardLink/CardLink"
import EmptyNoLinks from "../empty/EmptyNoLinks"
import EmptyNoSearch from "../empty/EmptyNoSearch"


const LinkList = () => {
    const links = useLinkStore((state) => state.links)
    const searchLinksArr = useLinkStore((state) => state.searchLinks)


    return (
        <Stack gap={4}>
            {links.length === 0 ? <EmptyNoLinks /> : links.map((link) => <CardLink {...link} key={link.id} />)}
        </Stack>
    )
}


export default LinkList