import { createContext, PropsWithChildren, useEffect, useState } from "react"

export const themes = {
    dark: "dark",
    light: "light",
}

export const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme: () => { }
});

export default function ThemeProvider({ children }: PropsWithChildren) {
    const [theme, setTheme] = useState(themes.dark);

    const changeTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    useEffect(() => {
        document.body.classList.add(theme)
    }, [theme])

    const value = {
        theme,
        changeTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}