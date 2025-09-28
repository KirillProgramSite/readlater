import { Badge, Button, Card, Center, CloseButton, Dialog, Flex, Portal, QrCode } from "@chakra-ui/react"
import { IoQrCodeSharp } from "react-icons/io5"


const CardLink = () => {
    return (
        <Card.Root>
            <Card.Header>Schema.org своими руками: настраиваем микроразметку без программиста</Card.Header>
            <Card.Body>https://habr.com/ru/companies/click/articles/486764/</Card.Body>
            <Card.Footer>
                <Flex gap={4}>
                    <Badge size="md" colorPalette="red">#web</Badge>
                    <Badge size="md" colorPalette="red">#frontend</Badge>
                    <Badge size="md" colorPalette="red">#js</Badge>


                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <Button colorPalette="blue"><IoQrCodeSharp /></Button>
                        </Dialog.Trigger>
                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content>
                                    <Dialog.Header>
                                        <Dialog.Title>QR-Code</Dialog.Title>
                                    </Dialog.Header>
                                    <Dialog.Body>
                                        <Center>
                                            <QrCode.Root size="2xl" value="https://habr.com/ru/companies/click/articles/486764/">
                                                <QrCode.Frame>
                                                    <QrCode.Pattern />
                                                </QrCode.Frame>
                                            </QrCode.Root>
                                        </Center>
                                    </Dialog.Body>
                                    <Dialog.Footer>
                                    </Dialog.Footer>
                                    <Dialog.CloseTrigger asChild>
                                        <CloseButton size="sm" />
                                    </Dialog.CloseTrigger>
                                </Dialog.Content>
                            </Dialog.Positioner>
                        </Portal>
                    </Dialog.Root>
                </Flex>


            </Card.Footer>
        </Card.Root>
    )
}

export default CardLink