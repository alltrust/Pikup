import Button from "@mui/material/Button"
import { useTheme } from "@mui/material/styles";
import axios from "axios";

function App() {
  const theme = useTheme()

  const testRequests = async()=>{
    const response = await axios.post("/api/v1/auth/register", {name:"aldo"})
    console.log(response)
  }
  return (
    <> 
    <Button sx={{background: theme.palette.primary.main}} variant="contained" onClick={testRequests}>
      CLICK
    </Button>
    </>
  ); 
}

export default App;
