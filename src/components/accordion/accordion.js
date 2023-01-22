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
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import TextField from "@mui/material/TextField";
import CancelIcon from "@mui/icons-material/Cancel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Alert from "@mui/material/Alert";
import GenderLIst from "./genderList";
import "./accordion.css";

function Accordions({ celebrity, remove, update }) {
  const fullName = `${celebrity.first} ${celebrity.last}`;
  const [expanded, setExpanded] = useState(false);
  const [age, setAge] = useState(celebrity.dob);
  const [gender, setGender] = useState(celebrity.gender);
  const [description, setDescription] = useState(celebrity.description);
  const [country, setCountry] = useState(celebrity.country);
  const [name, setName] = useState(fullName);
  const [nAge, setNAge] = useState();
  const [del, setDel] = useState(false);
  const [edit, setEdit] = useState(false);
  const [view, setView] = useState(true);
  const [error, setError] = useState(false);
  const [saveIcon, setSaveIcon] = useState(false);

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

  const onDelIcon = () => {
    setDel(true);
    setView(false);
  };

  const onEditIcon = () => {
    if (age > 18) {
      setEdit(true);
      setView(false);
      setCountry(celebrity.country);
      setGender(celebrity.gender);
      setDescription(celebrity.description);
      if (celebrity.name) {
        setName(name);
      } else {
        setName(`${celebrity.first} ${celebrity.last}`);
      }
      if (nAge) {
        setNAge(nAge);
      } else {
        setNAge(age);
      }
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  const onCloseIcon = () => {
    setView(true);
    setEdit(false);
    setSaveIcon(false);
  };

  const onSaveIcon = () => {
    onCloseIcon();
    const updatedContent = {
      name: name,
      age: nAge,
      gender: gender,
      country: country,
      description: description,
    };
    update(celebrity.id, updatedContent);
  };

  const onCancelButton = () => {
    setDel(false);
    setView(true);
  };

  const onDeleteButton = (id) => {
    remove(id);
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
            <Typography className="name" sx={{ fontWeight: 550, fontSize: 20 }}>
              {celebrity.name
                ? celebrity.name
                : `${celebrity.first} ${celebrity.last}`}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordionDetails">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={4} md={3}>
                <Typography className="heading">Age</Typography>
                <Typography>
                  {celebrity.age ? `${celebrity.age} Years` : `${age} Years`}
                </Typography>
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

            {error && (
              <Alert variant="outlined" className="error" severity="error">
                User must be an adult
              </Alert>
            )}

            <div className="iconEditDel">
              <Button onClick={onDelIcon}>
                <DeleteForeverIcon className="deleteIcon" />
              </Button>
              <Button onClick={onEditIcon}>
                <EditIcon />
              </Button>
            </div>
          </AccordionDetails>
        </Accordion>
      )}

      {edit && (
        <Accordion expanded={true} className="accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Avatar alt={celebrity.first} src={celebrity.picture} />
            <TextField
              variant="outlined"
              value={name}
              sx={{ ml: 3 }}
              onChange={(e) => {
                setName(e.target.value);
                setSaveIcon(true);
              }}
            />
          </AccordionSummary>
          <AccordionDetails className="accordionDetails">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={4} md={3}>
                <Typography className="heading">Age</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  value={nAge}
                  type="number"
                  onChange={(e) => {
                    setNAge(e.target.value);
                    setSaveIcon(true);
                  }}
                />
              </Grid>
              <Grid item xs={4} md={3}>
                <Typography className="heading">Gender</Typography>
                <Select
                  fullWidth
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                    setSaveIcon(true);
                  }}
                >
                  {GenderLIst.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={4} md={3}>
                <Typography className="heading">Country</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                    setSaveIcon(true);
                  }}
                />
              </Grid>
            </Grid>
            <div className="description">
              <Typography className="heading">Description</Typography>
              <TextField
                variant="outlined"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  setSaveIcon(true);
                }}
                fullWidth
                multiline
                rows={3}
              />
            </div>

            <div className="iconEditDel">
              <Button onClick={onCloseIcon}>
                <CancelIcon className="deleteIcon" />
              </Button>
              {saveIcon && (
                <Button onClick={onSaveIcon}>
                  <CheckCircleOutlineIcon className="saveIcon" />
                </Button>
              )}
            </div>
          </AccordionDetails>
        </Accordion>
      )}

      {del && (
        <Accordion className="accordion">
          <AccordionDetails>
            <div className="closeIconContianer">
              <Button onClick={onCancelButton}>
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
                onClick={onCancelButton}
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
                onClick={() => onDeleteButton(celebrity.id)}
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
