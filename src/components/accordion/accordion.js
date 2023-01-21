import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import "./accordion.css";

function Accordions({ celebrity }) {
  const [expanded, setExpanded] = useState(false);
  const [age, setAge] = useState(celebrity.dob);
  const [del, setDel] = useState(false);
  const [edit, setEdit] = useState(false);
  const [view, setView] = useState(true);

  useEffect(() => {
    calculateAge();
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const calculateAge = () => {
    const dobArr = age.split("-");
    const date = new Date();
    const currentYear = date.getFullYear();
    const ageCelebrity = currentYear - parseInt(dobArr[0]);
    setAge(ageCelebrity);
  };

  const onDel = () => {
    setDel(true);
    setView(false);
  };

  const onEdit = () => {
    setEdit(true);
    setView(false);
  };

  const onCancel = () => {
    setDel(false);
    setView(true);
  };

  return (
    <>
      {view && (
        <Accordion
          expanded={expanded === celebrity.id}
          onChange={handleChange(celebrity.id)}
          className="accordion"
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Avatar alt={celebrity.first} src={celebrity.picture} />
            <Typography className="name">{`${celebrity.first} ${celebrity.last}`}</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordionDetails">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={4} md={3}>
                <Typography className="heading">Age</Typography>
                <Typography>{`${age} Years`}</Typography>
              </Grid>
              <Grid item xs={4} md={3}>
                <Typography className="heading">Gender</Typography>
                <Typography>{celebrity.gender}</Typography>
              </Grid>
              <Grid item xs={4} md={3}>
                <Typography className="heading">Country</Typography>
                <Typography>{celebrity.country}</Typography>
              </Grid>
            </Grid>
            <div className="description">
              <Typography className="heading">Description</Typography>
              <Typography>{celebrity.description}</Typography>
            </div>
            <div className="iconEditDel">
              <Button onClick={onDel}>
                <DeleteForeverIcon className="deleteIcon" />
              </Button>
              <Button onClick={onEdit}>
                <EditIcon />
              </Button>
            </div>
          </AccordionDetails>
        </Accordion>
      )}

      {del && (
        <Accordion className="accordion">
          <AccordionDetails>
            <div className="closeIconContianer">
              <Button onClick={onCancel}>
                <CloseIcon className="closeIcon" />
              </Button>
            </div>
            <Typography>Are you sure you want to delete?</Typography>
            <div className="buttonCancelDel">
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "black",
                  borderColor: "black",
                  mr: 2,
                  "&:hover": {
                    border: "black",
                    color: "white",
                    backgroundColor: "black",
                  },
                }}
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  backgroundColor: "#ff2400",
                  "&:hover": {
                    color: "#ff2400",
                    backgroundColor: "whitesmoke",
                  },
                }}
              >
                Delete
              </Button>
            </div>
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
}

export default Accordions;
