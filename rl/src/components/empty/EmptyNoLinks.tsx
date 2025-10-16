import { EmptyState, VStack } from "@chakra-ui/react"
import { FilePlus2} from "lucide-react"


const EmptyNoLinks = () => {
    return (
        <EmptyState.Root>
            <EmptyState.Content>
                <EmptyState.Indicator>
                    <FilePlus2 />
                </EmptyState.Indicator>
                <VStack textAlign="center">
                    <EmptyState.Title>Пока у вас нет записей</EmptyState.Title>
                    <EmptyState.Description>
                        Добавьте новый ресурс, чтобы отобразился список
                    </EmptyState.Description>
                </VStack>
            </EmptyState.Content>
        </EmptyState.Root>
    )
}

export default EmptyNoLinks