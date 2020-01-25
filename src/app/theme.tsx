import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        type:"light",
        primary: {
            main: "#3f51b5",
            light:"#7986cb",
            dark:"#303f9f",
            contrastText:"#FFF"
        },
        secondary: {
            main: "#f50057",
            light:"#ff4081",
            dark:"#c51162",
            contrastText:"#FFF"
        },
        error: {
            main: "#f44336",
            light:"#e57373",
            dark:"#d32f2f",
            contrastText:"#FFF"
        },
        background: {
            default: "#FFFFFF",
            paper:"#FFFFFF"
        },
    },
});

export default theme;