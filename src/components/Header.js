import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const { t } = useTranslation();  
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const logo = React.useMemo(() => {
    return prefersDarkMode ? (
      <img
        src={require("../assests/images/lightLogo.png")}
        style={{ height: "15vh", minHeight: 50 }}
      ></img>
    ) : (
      <img
        src={require("../assests/images/darkLogo.png")}
        style={{ height: "15vh", minHeight: 50 }}
      ></img>
    );
  }, [prefersDarkMode]);

  return (
    <Box>
      {logo}
      <Typography variant="h3">{t("BeautyStylist")}</Typography>
      <Typography variant="h2" style={{ fontFamily: "Square Peg, cursive" }}>
        Yuliia Yevdokymova
      </Typography>   
    </Box>
  );
};

export default Header;
