import React from 'react';
import { Button} from "@material-ui/core";

const ParameterButton = ({param}) => {
  return (
    <Button
          style={{
            maxHeight: "25px",
            padding: "1rem",
            marginBottom: ".5rem",
          }}
          variant="contained"
          disableElevation
        >
        
        {param}
        </Button>
  )
}

export default ParameterButton