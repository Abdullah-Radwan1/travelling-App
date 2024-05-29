"use client"
import { createTheme, ThemeProvider } from "@mui/material";
import {CssBaseline} from "@mui/material"; //can be deleted
import { NextAppDirEmotionCacheProvider } from "./Emotion"; //can be deleted
import { pink,grey,orange, red, blue, } from "@mui/material/colors";

const theme = createTheme({
 palette: {
  primary: { main: red[400],},
  secondary:{main:grey[700]},

 },
});

export default function ThemeRegistery({children} :{children: React.ReactNode}) 
{
return (
   
<NextAppDirEmotionCacheProvider options={{key:"mui"}}> 
<ThemeProvider theme={theme}>
<CssBaseline/>

{children}

</ThemeProvider>

</NextAppDirEmotionCacheProvider>
)
}
