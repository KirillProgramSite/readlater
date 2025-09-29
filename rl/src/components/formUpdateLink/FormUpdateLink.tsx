import { useLinkStore } from "@/store/useLinkStore"
import { Button, Container, Dialog, Field, Heading, Input, Text } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import type { FC } from "react";


type FormUpdateLinkProps = {
    id: number
    title: string
    link: string
    tags: string
}



const FormUpdateLink: FC<FormUpdateLinkProps> = ({ id, title, link, tags }) => {
    const schemaLink = yup.object({
        titleLink: yup.string().required("Имя ресурса обязательно"),
        linkUrl: yup.string().url("Некорректный URL").required("Ссылка обязательна"),
        tagsLink: yup.string().required("Теги обязательно").matches(/^[a-zA-Zа-яА-Я0-9\s]+$/, "Поле не должно содержать спецсимволы"),
    })

    type AddLinkInputs = yup.InferType<typeof schemaLink>

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<AddLinkInputs>({
        resolver: yupResolver(schemaLink),
        defaultValues: {
            titleLink: title,
            linkUrl: link,
            tagsLink: tags
        }
    })

    const updateLink = useLinkStore((state) => state.updateLink)

    const onSubmit: SubmitHandler<AddLinkInputs> = (data) => {
        let updateData = {
            id: id,
            title: data.titleLink,
            link: data.linkUrl,
            tags: data.tagsLink
        }
        updateLink(id, updateData)
        reset()
    }

    return (
        <Container mt={30}>
            <Heading size="2xl">Обновить ссылку</Heading>
            <Text mb={10}>Ниже обновите данные</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Field.Root mb={5} invalid={!!errors.titleLink}>
                    <Field.Label>Название ресурса</Field.Label>
                    <Input 
                        {...register("titleLink")} 
                        placeholder="Например: Топ 5 блюд на вечер" 
                    />
                    {errors.titleLink && <Field.ErrorText>{errors.titleLink.message}</Field.ErrorText>}
                </Field.Root>

                <Field.Root mb={5} invalid={!!errors.linkUrl}>
                    <Field.Label>Ссылка</Field.Label>
                    <Input 
                        {...register("linkUrl")} 
                        placeholder="https://page.ru" 
                    />
                    {errors.linkUrl && <Field.ErrorText>{errors.linkUrl.message}</Field.ErrorText>}
                </Field.Root>

                <Field.Root mb={5} invalid={!!errors.tagsLink}>
                    <Field.Label>Теги</Field.Label>
                    <Input 
                        {...register("tagsLink")} 
                        placeholder="Спорт, игры, кулинария..." 
                    />
                    {errors.tagsLink && <Field.ErrorText>{errors.tagsLink.message}</Field.ErrorText>}
                    <Field.HelperText>Укажите через запятую к каким темам относится данный ресурс</Field.HelperText>
                </Field.Root>

                <Dialog.ActionTrigger asChild>
                    <Button type="submit" colorPalette="blue">Обновить</Button>
                </Dialog.ActionTrigger>
            </form>
        </Container>
    )
}

export default FormUpdateLink;