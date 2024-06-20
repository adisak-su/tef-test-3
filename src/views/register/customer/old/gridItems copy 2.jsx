import { FormControl, Grid, Typography, TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

function genGridItems(props) {
  return (
    <Grid
      // key={uuidv4()}
      container
      spacing={1}
      sx={{ width: "100%", marginTop: "20px" }}
    >
      {props.map((item) => genGridItem(item))}
    </Grid>
  );
}

function genGridItem(props) {
  const { id, type, value, label, placeholder, helperText, onChange } = props;
  // {id:"txt",label:"ชื่อสโมสร",placeholder:"ภาษาไทย",onChange:{handleTxt}}
  return (
    <Grid item xs={12} sm={4}>
      <FormControl fullWidth>
        <Typography fontWeight="700" variant="h7" pb={1}>
          {label}
        </Typography>
        <TextField
          // key={uuidv4()}
          id={id}
          type={type}
          variant="outlined"
          // value={value}
          error={helperText !== ""}
          helperText={helperText}
          placeholder={placeholder}
          onChange={onChange}
        />
      </FormControl>
    </Grid>
  );
}
export default genGridItems;
