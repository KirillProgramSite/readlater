import { EmptyState, VStack } from "@chakra-ui/react"
import { SearchX } from "lucide-react"


const EmptyNoSearch = () => {
    return (
        <EmptyState.Root>
            <EmptyState.Content>
                <EmptyState.Indicator>
                    <SearchX />
                </EmptyState.Indicator>
                <VStack textAlign="center">
                    <EmptyState.Title>Ничего не нашлось</EmptyState.Title>
                    <EmptyState.Description>
                        То что вы ищете отсуствует. Попробуйте другой запрос
                    </EmptyState.Description>
                </VStack>
            </EmptyState.Content>
        </EmptyState.Root>
    )
}

export default EmptyNoSearch