import React from "react";

import { Box, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Header from "../../components/Header";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions and Answers" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
          >
            1 - Add a frequently asked question here
          </Typography>
          </AccordionSummary>
        <AccordionDetails>
        <Typography
            color={colors.grey[100]}
            variant="h6"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aliquam eius. Incidunt velit, ullam earum, sint vel eveniet in quidem recusandae adipisci temporibus accusamus reiciendis doloremque quisquam dignissimos! Nam nesciunt dolor dolores exercitationem, quos, magni neque eaque, corporis corrupti commodi quam illum quisquam aperiam qui quaerat harum inventore. Animi, incidunt.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
          >
            2 - Add a frequently asked question here
          </Typography>
          </AccordionSummary>
        <AccordionDetails>
        <Typography
            color={colors.grey[100]}
            variant="h6"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aliquam eius. Incidunt velit, ullam earum, sint vel eveniet in quidem recusandae adipisci temporibus accusamus reiciendis doloremque quisquam dignissimos! Nam nesciunt dolor dolores exercitationem, quos, magni neque eaque, corporis corrupti commodi quam illum quisquam aperiam qui quaerat harum inventore. Animi, incidunt.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
          >
            3 - Add a frequently asked question here
          </Typography>
          </AccordionSummary>
        <AccordionDetails>
        <Typography
            color={colors.grey[100]}
            variant="h6"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aliquam eius. Incidunt velit, ullam earum, sint vel eveniet in quidem recusandae adipisci temporibus accusamus reiciendis doloremque quisquam dignissimos! Nam nesciunt dolor dolores exercitationem, quos, magni neque eaque, corporis corrupti commodi quam illum quisquam aperiam qui quaerat harum inventore. Animi, incidunt.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
          >
            4 - Add a frequently asked question here
          </Typography>
          </AccordionSummary>
        <AccordionDetails>
        <Typography
            color={colors.grey[100]}
            variant="h6"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aliquam eius. Incidunt velit, ullam earum, sint vel eveniet in quidem recusandae adipisci temporibus accusamus reiciendis doloremque quisquam dignissimos! Nam nesciunt dolor dolores exercitationem, quos, magni neque eaque, corporis corrupti commodi quam illum quisquam aperiam qui quaerat harum inventore. Animi, incidunt.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
          >
            5 - Add a frequently asked question here
          </Typography>
          </AccordionSummary>
        <AccordionDetails>
        <Typography
            color={colors.grey[100]}
            variant="h6"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aliquam eius. Incidunt velit, ullam earum, sint vel eveniet in quidem recusandae adipisci temporibus accusamus reiciendis doloremque quisquam dignissimos! Nam nesciunt dolor dolores exercitationem, quos, magni neque eaque, corporis corrupti commodi quam illum quisquam aperiam qui quaerat harum inventore. Animi, incidunt.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ;