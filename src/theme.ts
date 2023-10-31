import { createContext, useMemo, useState } from "react"

export { createContext, useState, useMemo } from 'react'
import { createTheme, Shadows, ThemeOptions } from "@mui/material/styles"
import { PaletteMode } from "@mui/material"

export type Colors = Record<string, Record<string, string>>
const shadows = [
    "none",
    '0px 0px 10px 0px rgba(182,194,207,0.2)',
    '0px 0px 10px 0px rgba(0,0,0,0.2)',
    '0px 0px 5px 2px rgba(182,194,207,0.2)',
    '0px 0px 5px 2px rgba(0,0,0,0.2)',
    '0px 0px 8px 0px rgba(182,194,207,0.2)',
    '0px 0px 10px 0px rgba(0,0,0,0.2)',
].fill('', 7, 18) as Shadows

export const tokens = (mode: PaletteMode) => ({
    ...(mode === "dark"
        ? {
            neutral: {
                0: '#161A1D',
                100: '#1D2125',
                200: '#22272B',
                300: '#2C333A',
                400: '#454F59',
                500: '#596773',
                600: '#738496',
                700: '#8C9BAB',
                800: '#9FADBC',
                900: '#B6C2CF',
                1000: '#C7D1DB',
                1100: '#DEE4EA',
            },
            blue: {
                100: '#E9F2FF',
                200: '#CCE0FF',
                300: '#85B8FF',
                400: '#579DFF',
                500: '#388BFF',
                600: '#1D7AFC',
                700: '#0C66E4',
                800: '#0055CC',
                900: '#09326C',
                1000: '#1C2B41',
            },
            orange: {
                100: '#FFF3EB',
                200: '#FEDEC8',
                300: '#FEC195',
                400: '#FEA362',
                500: '#F38A3F',
                600: '#E56910',
                700: '#C25100',
                800: '#A54800',
                900: '#702E00',
                1000: '#38291E',
            },
            yellow: {
                100: '#FFF7D6',
                200: '#F8E6A0',
                300: '#F5CD47',
                400: '#E2B203',
                500: '#CF9F02',
                600: '#B38600',
                700: '#946F00',
                800: '#7F5F01',
                900: '#533F04',
                1000: '#332E1B',
            },
            red: {
                100: '#FFECEB',
                200: '#FFD5D2',
                300: '#FD9891',
                400: '#F87168',
                500: '#F15B50',
                600: '#E2483D',
                700: '#C9372C',
                800: '#AE2E24',
                900: '#5D1F1A',
                1000: '#42221F',
            },
            redOpacity: {
                500: '#F15B50A6'
            },


            grey: {
                100: "#e0e0e0",
                200: "#c2c2c2",
                300: "#a3a3a3",
                400: "#858585",
                500: "#666666",
                600: "#525252",
                700: "#3d3d3d",
                800: "#292929",
                900: "#141414",
            },
            primary: {
                100: "#d0d1d5",
                200: "#a1a4ab",
                300: "#727681",
                400: "#1F2A40",
                500: "#141b2d",
                600: "#101624",
                700: "#0c101b",
                800: "#080b12",
                900: "#040509",
            },
            greenAccent: {
                100: "#dbf5ee",
                200: "#b7ebde",
                300: "#94e2cd",
                400: "#70d8bd",
                500: "#4cceac",
                600: "#3da58a",
                700: "#2e7c67",
                800: "#1e5245",
                900: "#0f2922",
            },
            redAccent: {
                100: "#f8dcdb",
                200: "#f1b9b7",
                300: "#e99592",
                400: "#e2726e",
                500: "#db4f4a",
                600: "#af3f3b",
                700: "#832f2c",
                800: "#58201e",
                900: "#2c100f",
            },


            yellowAccent: {
                100: "#f8f7db",
                200: "#f3f0b5",
                300: "#e3de88",
                400: "#e1db69",
                500: "#ece565",
                600: "#b0ab3c",
                700: "#8c8731",
                800: "#646123",
                900: "#23220c",
            },
            blueAccent: {
                100: "#e1e2fe",
                200: "#c3c6fd",
                300: "#a4a9fc",
                400: "#868dfb",
                500: "#6870fa",
                600: "#535ac8",
                700: "#3e4396",
                800: "#2a2d64",
                900: "#151632",
            },
        }
        : {
            neutral: {
                0: '#FFFFFF',
                100: '#F7F8F9',
                200: '#F1F2F4',
                300: '#DCDFE4',
                400: '#B3B9C4',
                500: '#8590A2',
                600: '#758195',
                700: '#626F86',
                800: '#44546F',
                900: '#2C3E5D',
                1000: '#172B4D',
                1100: '#091E42',
            },
            blue: {
                100: '#1C2B41',
                200: '#09326C',
                300: '#0055CC',
                400: '#0C66E4',
                500: '#1D7AFC',
                600: '#388BFF',
                700: '#579DFF',
                800: '#85B8FF',
                900: '#CCE0FF',
                1000: '#E9F2FF',
            },
            orange: {
                100: '#38291E',
                200: '#702E00',
                300: '#A54800',
                400: '#C25100',
                500: '#E56910',
                600: '#F38A3F',
                700: '#FEA362',
                800: '#FEC195',
                900: '#FEDEC8',
                1000: '#FFF3EB',
            },
            yellow: {
                100: '#332E1B',
                200: '#533F04',
                300: '#7F5F01',
                400: '#946F00',
                500: '#B38600',
                600: '#CF9F02',
                700: '#E2B203',
                800: '#F5CD47',
                900: '#F8E6A0',
                1000: '#FFF7D6',
            },
            red: {
                100: '#42221F',
                200: '#5D1F1A',
                300: '#AE2E24',
                400: '#C9372C',
                500: '#E2483D',
                600: '#F15B50',
                700: '#F87168',
                800: '#FD9891',
                900: '#FFD5D2',
                1000: '#FFECEB',
            },
            redOpacity: {
                500: '#F15B50A6'
            },


            grey: {
                100: "#141414",
                200: "#292929",
                300: "#3d3d3d",
                400: "#525252",
                500: "#666666",
                600: "#858585",
                700: "#a3a3a3",
                800: "#c2c2c2",
                900: "#e0e0e0",
            },
            primary: {
                100: "#040509",
                200: "#080b12",
                300: "#0c101b",
                400: "#f2f0f0", // manually changed
                500: "#141b2d",
                600: "#c7c6c6",
                700: "#727681",
                800: "#a1a4ab",
                900: "#d0d1d5",
            },
            greenAccent: {
                100: "#0f2922",
                200: "#1e5245",
                300: "#2e7c67",
                400: "#3da58a",
                500: "#4cceac",
                600: "#70d8bd",
                700: "#94e2cd",
                800: "#b7ebde",
                900: "#dbf5ee",
            },
            redAccent: {
                100: "#2c100f",
                200: "#58201e",
                300: "#832f2c",
                400: "#af3f3b",
                500: "#db4f4a",
                600: "#e2726e",
                700: "#e99592",
                800: "#f1b9b7",
                900: "#f8dcdb",
            },
            yellowAccent: {
                100: "#23220c",
                200: "#646123",
                300: "#8c8731",
                400: "#b0ab3c",
                500: "#dcd54e",
                600: "#e1db69",
                700: "#e3de88",
                800: "#f3f0b5",
                900: "#f8f7db",
            },
            blueAccent: {
                100: "#151632",
                200: "#2a2d64",
                300: "#3e4396",
                400: "#535ac8",
                500: "#6870fa",
                600: "#868dfb",
                700: "#a4a9fc",
                800: "#c3c6fd",
                900: "#e1e2fe",
            },
        }),
})

//mui theme settings
export const themeSettings = (mode: PaletteMode): ThemeOptions => {
    const colors = tokens(mode)

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: colors.primary[500]
                    },
                    secondary: {
                        main: colors.greenAccent[500]
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.neutral[0]
                    }
                } : {
                    primary: {
                        main: colors.primary[100]
                    },
                    secondary: {
                        main: colors.greenAccent[500]
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: '#fcfcfc'
                    },
                }),
        },
        typography: {
            fontFamily: ['Poppins', 'sans-serif'].join(','),
            fontSize: 10,
            h1: {
                fontFamily: ['Poppins', 'sans-serif'].join(','),
                fontSize: 40,
            },
            h2: {
                fontFamily: ['Poppins', 'sans-serif'].join(','),
                fontSize: 32,
            },
            h3: {
                fontFamily: ['Poppins', 'sans-serif'].join(','),
                fontSize: 24,
            },
            h4: {
                fontFamily: ['Poppins', 'sans-serif'].join(','),
                fontSize: 20,
            },
            h5: {
                fontFamily: ['Poppins', 'sans-serif'].join(','),
                fontSize: 16,
            },
            h6: {
                fontFamily: ['Poppins', 'sans-serif'].join(','),
                fontSize: 14,
            },
            subtitle1: {
                fontFamily: ['Poppins', 'sans-serif'].join(','),
                fontSize: 28,
            },

        },
        components: {
            MuiCheckbox: {
                styleOverrides: {
                    root: {
                        padding: 3,
                        color: mode === 'dark' ? '#6870fa' : '#868dfb',
                        '&.Mui-checked': {
                            color: mode === 'dark' ? '#6870fa' : '#868dfb',
                        }
                    },
                }

            },
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        "*::-webkit-scrollbar": {
                            width: "4px",
                            height: '1px',
                        },
                        "*::-webkit-scrollbar-track": {
                            backgroundColor: 'transparent',
                        },
                        "*::-webkit-scrollbar-thumb": {
                            background: mode === 'dark' ? '#e0e0e0' : '#c7c6c6',
                            borderRadius: "2px"
                        }
                    }
                }

            }
        },
        shadows: shadows
        // shadows: [
        //     "none",
        //     '0px 0px 10px 0px rgba(182,194,207,0.2)',
        //     '0px 0px 10px 0px rgba(0,0,0,0.2)',
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //     ''
        // ],
    }
}

//context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {
    }
})


export const useMode = () => {
    const [mode, setMode] = useState<PaletteMode>('dark')

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => prev === 'light' ? 'dark' : 'light')
        }),
        []
    )

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode] as const
}