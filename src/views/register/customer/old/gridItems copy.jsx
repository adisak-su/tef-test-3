import { FormControl, Grid, Typography, TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

// import { makeStyles } from "@material-ui/core/styles";

import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

// const baselightTheme = createTheme({

const useStyles = createTheme({
  
    root: {
      "& .Mui-error": {
        color: acquireValidationColor(value)
      },
      "& .MuiFormHelperText-root": {
        color: acquireValidationColor(value)
      }
    }
  });


// const useStyles = value =>
//     makeStyles(theme => ({
//   root: {
//     "& .Mui-error": {
//       color: acquireValidationColor("green"),
//     },
//     "& .MuiFormHelperText-root": {
//       color: acquireValidationColor("red"),
//     },
//   },
// },
// ),
//     );
// const useStyles = (value) => {
//   createTheme((theme) => ({
//   root: {
//     "& .Mui-error": {
//       color: acquireValidationColor(value),
//     },
//     "& .MuiFormHelperText-root": {
//       color: acquireValidationColor(value),
//     },
//   },
// })
//   );

// const useStyles = (value) =>
//   createTheme((theme) => ({
//     root: {
//       "& .Mui-error": {
//         color: acquireValidationColor(value),
//       },
//       "& .MuiFormHelperText-root": {
//         color: acquireValidationColor(value),
//       },
//     },
//   }));
// const useStyles = value =>
//   makeStyles(theme => ({
//     root: {
//       "& .Mui-error": {
//         color: acquireValidationColor(value)
//       },
//       "& .MuiFormHelperText-root": {
//         color: acquireValidationColor(value)
//       }
//     }
//   }));

const acquireValidationColor = (message) => {
  switch (message) {
    case "Incorrect entry":
      return "green";
    case "Please input":
      return "orange";
    default:
      return "black";
  }
};

const ValidationTextField = ({ helperText }) => {
  const classes = useStyles(helperText)();
  return (
    <TextField
      label="Name"
      margin="normal"
      variant="outlined"
      required
      error={helperText !== ""}
      helperText={helperText}
      className={classes.root}
    />
  );
};

const data = ["Incorrect entry", "Please input", ""];

function genGridItems(props) {
  return (
    <Grid
      key={uuidv4()}
      container
      spacing={1}
      sx={{ width: "100%", marginTop: "20px" }}
    >
      {/* {props.map((item) => genGridItem(item))} */}
      {data.map((x, idx) => (
        <ValidationTextField helperText={x} key={idx} />
      ))}
    </Grid>
  );
}

function genGridItem(props) {
  const { id, type, label, placeholder, onChange } = props;
  // {id:"txt",label:"ชื่อสโมสร",placeholder:"ภาษาไทย",onChange:{handleTxt}}
  return (
    <Grid key={id} item xs={12} sm={4}>
      <FormControl fullWidth>
        <Typography fontWeight="700" variant="h7" pb={1}>
          {label}
        </Typography>
        <TextField
          id={id}
          type={type}
          variant="outlined"
          error={{ borderColor: "red" }}
          // value={id}
          placeholder={placeholder}
          onChange={onChange}
        />
      </FormControl>
    </Grid>
  );
}
export default genGridItems;
