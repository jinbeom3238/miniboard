// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//     return (
//         <header>
//             <div className="Header">
//                 <Link to="/">
//                     miniBoard
//                 </Link>
//             </div>
//         </header>
//     );
// };
// export default Header;
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box sx={{ flexGrow: 1, bgcolor: "#ffffff" }}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Box
                        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
                    >
                        <Typography variant="h6" component="div">
                            <Link component={RouterLink} to="/" color="black" underline="none">
                                MiniBoard
                            </Link>
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;



