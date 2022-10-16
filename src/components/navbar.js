import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        justifyContent="flex-start"
        spacing={12}
        margin={4}
      >
        <Link component={RouterLink} to="/">
          Home
        </Link>
        <Link component={RouterLink} to="/about">
          About
        </Link>
        <Link component={RouterLink} to="/contact">
          Contact
        </Link>
      </Stack>
    </div>
  )
}

export default Navbar;