import * as React from "react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import Theme from "../theme/Theme"
import Layout from "../components/Layout/Layout.component"

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={Theme}>
            <Layout>
                <CssBaseline/>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}

export default MyApp
