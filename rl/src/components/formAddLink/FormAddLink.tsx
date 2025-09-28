import { useLinkStore } from "@/store/useLinkStore"
import { Button, Container, Field, Heading, Input, Text } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"


const FormAddLink = () => {
    type AddLinkInputs = {
        titleLink: string
        linkUrl: string
        tagsLink: string
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm<AddLinkInputs>()

    const addLink = useLinkStore((state) => state.addLink)


    const onSubmit: SubmitHandler<AddLinkInputs> = (data) => {
        addLink(data.linkUrl, data.titleLink, data.tagsLink)
    }



    return (
        <Container mt={30}>
            <Heading size="2xl">Добавить ссылку</Heading>
            <Text mb={10}>Добавьте ниже вашу ссылку чтобы сохранить её и хештеги для быстрого доступа</Text>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <Field.Root mb={5}>
                    <Field.Label>Название рерурса</Field.Label>
                    <Input {...register("titleLink")} placeholder="Например: Топ 5 блюд на вечер" />
                    <Field.ErrorText>Данное поле не должно быть пустым</Field.ErrorText>
                </Field.Root>

                <Field.Root mb={5}>
                    <Field.Label>Ссылка</Field.Label>
                    <Input {...register("linkUrl")} placeholder="https://page.ru" />
                    <Field.ErrorText>Данное поле не должно быть пустым</Field.ErrorText>
                </Field.Root>

                <Field.Root mb={5}>
                    <Field.Label>Теги</Field.Label>
                    <Input {...register("tagsLink")} placeholder="Спорт, игры, кулинария..." />
                    <Field.ErrorText>Данное поле не должно быть пустым</Field.ErrorText>
                    <Field.HelperText>Укажие через запятую к каким темам относится данный ресурс</Field.HelperText>
                </Field.Root>

                <Button type="submit" colorPalette="blue">Добавить</Button>
            </form>
        </Container>
    )
}

export default FormAddLink;