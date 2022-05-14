import React from "react";
import ReviewForm from "../components/ReviewForm";
import CocaCola from "../images/cocaLogo.png";
import {
  Box,
  makeStyles,
  TextField,
  Button,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import PageviewIcon from "@mui/icons-material/Pageview";
const useStyles = makeStyles((theme) => ({
  selectSearch: {
    [theme.breakpoints.down("sm")]: {},
  },
  searchBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
  },
}));

const locations = [
  {
    value: "Adrar",
    label: "01",
  },
  {
    value: "Chlef",
    label: "02",
  },
  {
    value: "Blida",
    label: "09",
  },
  {
    value: "Oran",
    label: "31",
  },
  {
    value: "Ouargla",
    label: "30",
  },
];

const businesses = [
  {
    value: "Restaurants",
    label: "01",
  },
  {
    value: "Hotels & Resort",
    label: "02",
  },
  {
    value: "Plumbers",
    label: "09",
  },
  {
    value: "Schools",
    label: "31",
  },
  {
    value: "Electronics",
    label: "30",
  },
];

const SelectSearchBar = () => {
  const classes = useStyles();
  const [filteredData, setFilteredData] = React.useState([]);

  const [state, setState] = React.useState({
    business: "",
    location: "",
  });

  const handleFilter = (evt) => {
    const searchWord = evt.target.value;
  setState({
    ...state,
    [evt.target.name]: searchWord
  });

  const newFilter = businesses.filter((value) => {
    return value.company.toLowerCase().includes(searchWord.toLowerCase());
  });

  if (searchWord === '') {
    setFilteredData([]);
  } else {
    setFilteredData(newFilter);
  }



  
  };

  const HandleInputs = (e) => {
    e.preventDefault();
  };

  return (
    <Box className={classes.selectSearch}>
      <Box>
        <FormControl className={classes.searchBox} onSubmit={HandleInputs}>
          <TextField
            variant="filled"
            label="Find business"
            placeholder="restaurant,plumber,Hotel..."
            style={{ width: "40%" }}
            select
            name="business"
            type="text"
            value={state.business}
            onChange={handleFilter}
          >
            {businesses.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            variant="filled"
            placeholder="Blida,Galma,Alger...."
            style={{
              width: "20%",
              marginLeft: "1rem",
              backgroundColor: "#fff",
            }}
            select
            label="Location"
            name="location"
            type="text"
            value={state.location}
            onChange={handleFilter}
          >
            {locations.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>

          <Button
            style={{ padding: "0" }}
            endIcon={
              <PageviewIcon
                style={{ fontSize: "3rem", color: "rgb(70,128,131)" }}
              />
            }
            type="submit"
            value="submit"
          />
        </FormControl>
        <Box>
        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a className="dataItem" href={value.link} target="_blank">
                  <p>{value.company} </p>
                </a>
              );
            })}
          </div>
        )}
      </Box>
      </Box>
    </Box>
  );
};

export default SelectSearchBar;
