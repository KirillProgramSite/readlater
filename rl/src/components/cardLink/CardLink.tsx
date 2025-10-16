import { useLinkStore } from "@/store/useLinkStore";
import { Badge, Button, Card, Center, CloseButton, Dialog, Flex, Link, Portal, QrCode } from "@chakra-ui/react"
import { IoQrCodeSharp } from "react-icons/io5"
import FormUpdateLink from "../formUpdateLink/FormUpdateLink";
import { Link as RouterLink } from "react-router-dom";
import { Clipboard } from "@chakra-ui/react"



// (*)
interface LinkObj {
    id: number;
    title: string;
    link: string;
    tags: string;
}


const CardLink = (link: LinkObj) => {

    // Массив с тегами
    const tagsArray = link.tags.split(",")

    const deleteLink = useLinkStore((state) => state.deleteLink)
    



    return (
        <Card.Root>
            <Card.Header>{link.title}</Card.Header>
            <Card.Body>
                <Clipboard.Root value={link.link}>
                    <Clipboard.Trigger asChild>
                        <Link target="_blank" as="span" color="teal">
                            <Clipboard.Indicator />
                            <Clipboard.ValueText />
                        </Link>
                    </Clipboard.Trigger>
                </Clipboard.Root>
                <Flex mt={10} wrap="wrap" gap={4}>
                    {tagsArray.map((tag) => (
                        <RouterLink to={`/${tag}`}>
                            <Badge key={Math.random()} size="md" colorPalette="red">#{tag.trimStart()}</Badge>
                        </RouterLink >
                    ))}
                </Flex>
            </Card.Body>
            <Card.Footer>
                <Flex wrap="wrap" justify="flex-end" gap={4}>
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
                                            <QrCode.Root size="2xl" value={`${link.link}`}>
                                                <QrCode.Frame>
                                                    <QrCode.Pattern />
                                                </QrCode.Frame>

                                                <QrCode.DownloadTrigger
                                                    asChild
                                                    fileName={`${link.title}_qr-code.png`}
                                                    mimeType="image/png"
                                                >
                                                    <Button variant="ghost" size="xs" mt="3">
                                                        Загрузить QR-code
                                                    </Button>
                                                </QrCode.DownloadTrigger>
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

                    <Button onClick={() => deleteLink(link.id)} colorPalette="red">Удалить</Button>

                     <Dialog.Root size="cover">
                        <Dialog.Trigger asChild>
                            <Button colorPalette="orange">Редактировать</Button>
                        </Dialog.Trigger>
                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content>
                                    <Dialog.Header>
                                        <Dialog.Title>Обновить {link.title}</Dialog.Title>
                                    </Dialog.Header>
                                    <Dialog.Body>
                                        <FormUpdateLink {...link} />
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