import { createTheme } from "@mui/material/styles";

let Theme = createTheme({
    palette: {
        primary: {
            main: "#5F3013",
            light: "#42352E",
            dark: "#26160C"
        },
        secondary: {
            main: "#C0C0C0",
            
        },
        success: {
            main: "#50B734"
        },
        error: {
            main: "#B73E34"
        }
    },
    typography: {
        h6: {
            fontSize: "2.5vh",
            fontWeight: "5vh"
        },
        h7: {
            fontSize: "2vh",
            fontWeight: "5vh"
        },
        h8: {
            fontSize: "1.5vh",
            fontWeight: "5vh"
        },
        subtitle1:{
            fontSize: "1.2vh"
        },
        subtitle2: {

        }
    }
})

export default Theme