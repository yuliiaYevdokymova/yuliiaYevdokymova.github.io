import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  Collapse,
  useTheme
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import getHardMakeupGalleryImages from "../functions/HardMakeupImages";
import HorizontalGallery from "./HorizontalGallery";

const HardMakeup = () => {
  const { t } = useTranslation();
  const [detailsVisible, setChecked] = React.useState(false);
  const theme = useTheme();
  const textColor = theme.palette.text.primary;
  const handleDropDownClick = () => {
    setChecked(!detailsVisible);
  };

  return (
    <Grid
        container       
        direction="column"
        justify="center"
        textAlign="center"
        alignSelf="center"
        sx={{ mb:2}}
      >
       <Button        
        endIcon={detailsVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        alignSelf="flex-start"
        onClick={handleDropDownClick}
        sx={{
          ml: 2,
          mb: 2,
          width: 280,
          textTransform: "none",
          padding: 0,
          color: { color: textColor },
        }}
      >
        <Typography variant="h5">{t("HardMakeup")}</Typography>
      </Button>

      <Container>
        <Collapse in={detailsVisible}>
          <Typography alignSelf="flex-start">{t("HardMakeupText")}</Typography>
        </Collapse>
      </Container>
        <Box
          sx={{
            display: "flex",
            alignSelf: "center",
            marginTop: 2,
            width: "95%",
          }}
        >
          <HorizontalGallery images={getHardMakeupGalleryImages()} dynamicBullets={false}/>
        </Box>
      </Grid>
  );
};

export default HardMakeup;
