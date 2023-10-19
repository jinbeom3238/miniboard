import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#1976d2', color: '#fff', p: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" gutterBottom>
          kimjinbeom
        </Typography>
        <Typography variant="body2" align="center">
          Copyright 2023. kimjinbeom. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
