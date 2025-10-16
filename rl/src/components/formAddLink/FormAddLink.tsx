import { useLinkStore } from "@/store/useLinkStore"
import { Button, Field, Heading, Input, Text } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';



const FormAddLink = () => {
    const navigate = useNavigate()

    const schemaLink = yup.object({
        titleLink: yup.string().required("Имя ресурса обязательно").typeError("Название должно быть только строковым"),
        linkUrl: yup.string().url("Некорректный URL").nullable().required("Ссылка обязательна"),
        tagsLink: yup.string().required("Теги обязательно").matches(/^[a-zA-Zа-яА-Я0-9\s,]+$/, "Поле не должно содержать спецсимволы(# , - ! @ # № $ % ^ & *)"),
    })

    type AddLinkInputs = yup.InferType<typeof schemaLink>

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<AddLinkInputs>({
        resolver: yupResolver(schemaLink)
    })

    const addLink = useLinkStore((state) => state.addLink)


    const onSubmit: SubmitHandler<AddLinkInputs> = (data) => {
        addLink(data.linkUrl, data.titleLink, data.tagsLink)
        reset()
        navigate('/')
    }



    return (
        <>
            <Heading size="2xl">Добавить ссылку</Heading>
            <Text mb={10} mt={5}>Это форма для добавления ссылки. Здесь можно указать: название, ссылку и текст</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Field.Root mb={5} invalid={errors.titleLink ? true : false}>
                    <Field.Label>Название рерурса</Field.Label>
                    <Input {...register("titleLink", { required: true })} placeholder="Например: Топ 5 блюд на вечер" />
                    {errors.titleLink && <Field.ErrorText>{errors.titleLink.message}</Field.ErrorText>}
                </Field.Root>

                <Field.Root mb={5} invalid={errors.linkUrl ? true : false}>
                    <Field.Label>Ссылка</Field.Label>
                    <Input {...register("linkUrl", { required: true })} placeholder="https://page.ru" />
                    {errors.linkUrl && <Field.ErrorText>{errors.linkUrl.message}</Field.ErrorText>}
                </Field.Root>

                <Field.Root mb={5} invalid={errors.tagsLink ? true : false}>
                    <Field.Label>Теги</Field.Label>
                    <Input {...register("tagsLink", { required: true })} placeholder="Спорт, игры, кулинария..." />
                    {errors.tagsLink && <Field.ErrorText>{errors.tagsLink.message}</Field.ErrorText>}
                    <Field.HelperText>Укажие через запятую к каким темам относится данный ресурс</Field.HelperText>
                </Field.Root>

                <Button type="submit" colorPalette="blue">Добавить</Button>
            </form>
        </>
    )
}

export default FormAddLink;