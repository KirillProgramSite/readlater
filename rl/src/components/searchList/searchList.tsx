import { Stack } from "@chakra-ui/react"
import EmptyNoSearch from "../empty/EmptyNoSearch"
import { useLinkStore } from "@/store/useLinkStore"
import CardLink from "../cardLink/CardLink"


const SearchList = () => {
    const searchLinksArr = useLinkStore((state) => state.searchLinks)


    return (
        <Stack gap={4}>
            {searchLinksArr.map((link) => <CardLink {...link} key={link.id} />)}
        </Stack>
    )
}


export default SearchList