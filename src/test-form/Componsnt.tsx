import {
    Autocomplete as MuiAutocomplete,
    AutocompleteChangeReason,
    autocompleteClasses,
    AutocompleteCloseReason,
    Box,
    InputBase,
    styled,
    useTheme
} from '@mui/material'
import { ChangeEvent, ReactNode, SyntheticEvent, useCallback } from 'react'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'
import { tokens } from '../theme.ts'


interface IProps<T> {
    name?: string
    open?: boolean,
    multiple?: boolean
    onClose?: () => void
    items: T[]
    value: T[]
    onChange?: (e: SyntheticEvent<Element, Event>, value: T | T[] | null, reason: AutocompleteChangeReason,) => void
    disableCloseOnSelect?: boolean
    renderTags?: (value: T[], getTagProps: Function, ownerState: Object) => ReactNode
    noOptionsText?: string,
}

export type Option = {
    id: string,
    name: string
}
export const AutoComplete = <T, >({
                                      name,
                                      open,
                                      multiple,
                                      onClose,
                                      value,
                                      items,
                                      onChange,
                                      disableCloseOnSelect,
                                      renderTags,
                                      noOptionsText,
                                  }: IProps<T>) => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    console.log('items', value)

    const handleClose = useCallback((_event: ChangeEvent<{}>, reason: AutocompleteCloseReason) => {
        reason === 'escape' && onClose?.()
    }, [onClose])


    return (
        <MuiAutocomplete
            open={open}
            multiple={multiple}
            onClose={handleClose}
            value={value}
            onChange={onChange}
            disableCloseOnSelect={disableCloseOnSelect}
            PopperComponent={PopperComponent}
            renderTags={renderTags}
            noOptionsText={noOptionsText}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Box
                        component={DoneIcon}
                        sx={{ width: 17, height: 17, mr: '5px', ml: '-2px', color: '#6870fa' }}
                        style={{
                            visibility: selected ? 'visible' : 'hidden',
                        }}
                    />
                    <Box
                        sx={{
                            flexGrow: 1,
                            '& span': {
                                color: colors.grey[100]
                            },
                        }}>
                        {(option as Option).name}
                    </Box>
                    <Box
                        component={CloseIcon}
                        sx={{ opacity: 0.6, width: 18, height: 18 }}
                        style={{
                            visibility: selected ? 'visible' : 'hidden',
                        }}
                    />
                </li>
            )}
            options={[...items].sort((a, b) => {
                // Display the selected labels first.
                let ai = value.indexOf(a)
                ai = ai === -1 ? value.length + items.indexOf(a) : ai
                let bi = value.indexOf(b)
                bi = bi === -1 ? value.length + items.indexOf(b) : bi
                return ai - bi
            })}
            getOptionLabel={(option) => (option as Option).name}
            renderInput={(params) => (
                <StyledInput ref={params.InputProps.ref}
                             inputProps={params.inputProps}
                             autoFocus
                             placeholder="Filter shops"
                             name={name}
                />
            )}
        />
    )
}

export default AutoComplete

interface PopperComponentProps {
    anchorEl?: any;
    disablePortal?: boolean;
    open: boolean;
}

const PopperComponent = (props: PopperComponentProps) => {
    const { disablePortal, open, anchorEl, ...other } = props
    return <StyledAutocompletePopper {...other}/>
}

const StyledAutocompletePopper = styled('div')(({ theme }) => ({
    [`& .${autocompleteClasses.paper}`]: {
        boxShadow: 'none',
        margin: 0,
        color: 'inherit',
        fontSize: 13,
    },
    [`& .${autocompleteClasses.listbox}`]: {
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1c2128',
        padding: 0,
        [`& .${autocompleteClasses.option}`]: {
            minHeight: 'auto',
            alignItems: 'flex-start',
            padding: 8,
            borderBottom: `1px solid  ${
                theme.palette.mode === 'light' ? ' #f2f0f0' : '#1F2A40'
            }`,
            '&[aria-selected="true"]': {
                backgroundColor: 'transparent',
            },
            [`&.${autocompleteClasses.focused}, &.${autocompleteClasses.focused}[aria-selected="true"]`]:
                {
                    backgroundColor: theme.palette.action.hover,
                },
        }
    },
    [`&.${autocompleteClasses.popperDisablePortal}`]: {
        position: 'relative',
    },
}))

const StyledInput = styled(InputBase)(({ theme }) => ({
    padding: 10,
    width: '100%',
    borderBottom: `1px solid ${
        theme.palette.mode === 'light' ? '#eaecef' : '#30363d'
    }`,
    '& input': {
        borderRadius: 4,
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#0d1117',
        padding: 8,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        border: `1px solid ${theme.palette.mode === 'light' ? '#eaecef' : '#30363d'}`,
        fontSize: 14,
        '&:focus': {
            boxShadow: `0px 0px 0px 3px ${
                theme.palette.mode === 'light'
                    ? 'rgba(3, 102, 214, 0.3)'
                    : 'rgb(12, 45, 107)'
            }`,
            borderColor: theme.palette.mode === 'light' ? '#535ac8' : '#6870fa',
        },
    }
}))
