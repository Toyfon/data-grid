import { AutocompleteChangeReason, Box, ButtonBase, ClickAwayListener, Popper, styled, useTheme } from '@mui/material'
import { FunctionComponent, MouseEvent, SyntheticEvent, useState } from 'react'
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined'
import AutoComplete from './Componsnt.tsx'

type Shop = {
    id: string,
    name: string
}

interface IProps {
    items: Shop[]
    onChange?: (items: Shop[]) => void
}

export const ShopsAutocomplete: FunctionComponent<IProps> = ({ items, onChange }) => {
    const theme = useTheme()

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const [pendingValue, setPendingValue] = useState<Shop[]>([])
    const [value, setValue] = useState<Shop[]>([])

    const handleClick = (e: MouseEvent<HTMLElement>) => {
        setPendingValue(value)
        setAnchorEl(e.currentTarget)
    }
    const handleClose = () => {
        setValue(pendingValue)
        anchorEl && anchorEl.focus()
        setAnchorEl(null)
    }

    const handleChange = (e: SyntheticEvent, selectOptions: Shop | Shop[] | null, reason: AutocompleteChangeReason) => {
        if (
            e.type === 'keydown' &&
            (e as unknown as KeyboardEvent).key === 'Backspace' &&
            reason === 'removeOption'
        ) {
            return
        }
        if (selectOptions && Array.isArray(selectOptions)) {
            setPendingValue(selectOptions)
            onChange?.(selectOptions)
        }
    }

    const open = Boolean(anchorEl)
    const id = open ? 'shops-select' : undefined

    return (
        <>
            <Box sx={{ minWidth: 80, fontSize: 13, padding: '0 9px' }}>
                <Button disableRipple aria-describedby={id} onClick={handleClick} sx={{ padding: 0 }}>
                    <span>Shops</span>
                    <StoreOutlinedIcon/>
                </Button>
            </Box>

            <StyledPopper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
                <ClickAwayListener onClickAway={handleClose}>
                    <div>
                        <Box
                            sx={{
                                borderBottom: `1px solid ${
                                    theme.palette.mode === 'light' ? '#f2f0f0' : '#1F2A40'
                                }`,
                                padding: '8px 10px',
                                fontWeight: 600
                            }}
                        >
                            Select shops from filters
                        </Box>

                        <AutoComplete
                            open={open}
                            multiple
                            onClose={handleClose}
                            items={items}
                            value={pendingValue}
                            onChange={handleChange}
                            disableCloseOnSelect
                            renderTags={() => null}
                            noOptionsText='No shops'
                        />
                    </div>
                </ClickAwayListener>
            </StyledPopper>
        </>
    )
}



const StyledPopper = styled(Popper)(({ theme }) => ({
    border: `1px solid ${theme.palette.mode === 'light' ? '#f2f0f0' : '#1F2A40'}`,
    boxShadow: `0 8px 24px ${
        theme.palette.mode === 'light' ? '#1F2A40' : '#28324b'
    }`,
    borderRadius: 6,
    width: 300,
    zIndex: theme.zIndex.modal,
    fontSize: 13,
    color: theme.palette.mode === 'light' ? '#141414' : '#e0e0e0',
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#141b2d',
}))


const Button = styled(ButtonBase)(({ theme }) => ({
    fontSize: 13,
    width: '100%',
    textAlign: 'left',
    paddingBottom: 8,
    color: theme.palette.mode === 'light' ? '#141414' : '#e0e0e0',
    fontWeight: 600,
    '&:hover,&:focus': {
        color: theme.palette.mode === 'light' ? '#6870fa' : '#6870fa'
    },
    '& span': {
        width: '100%'
    },
    '& svg': {
        width: 16,
        height: 16
    }
}))



