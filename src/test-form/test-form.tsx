import AutoComplete, { ShopsAutocomplete } from './test-autocomplete.tsx'
import { Box, Button } from '@mui/material'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({

    params1: yup.array(),
    // password: yup.string().required('Field is required')
})
export type FormData = yup.InferType<typeof schema>

export const TestForm = () => {

    const {
        handleSubmit,
        // reset,
        // control,
        // setValue,
        // watch
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            params1: [],
        }
    })

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        console.log('dataSubmit', data)
        // reset()
    }

    return (
        <Box width={500}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ShopsAutocomplete items={[{id: '1', name: '1'}, {id: '2', name: '2'}]}/>
                <Button type='submit'>Submit</Button>
            </form>
        </Box>

    )
}