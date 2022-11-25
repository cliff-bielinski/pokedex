import { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import Tooltip from '@mui/material/Tooltip';

function Search(props) {
  const [open, setOpen] = useState(false);

  const getPokemon = () => {
    fetch(`https://pokemon-nw5v.onrender.com/pokemon/${props.query}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      return response.json();
    })
    .then(results => {
      console.log(results)
      props.setResult(results)
    })
    .catch(error => {
      console.error("Pokemon not found!");
      console.error(error);
      props.setResult("error");
    });
  }

  const handleClickReset = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReset = () => {
    setOpen(false);
    props.setQuery('');
    props.setResult(null);
  };

  return (
    <div className="search">
      <Stack direction="row" spacing={2}>
        <Tooltip title="Search by Pokemon Name or Pokedex Number" arrow>
          <TextField 
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search for Pokemon"
            value={props.query || ''}
            onChange={e => props.setQuery(e.target.value)}
          />
        </Tooltip>
        <Button variant="outlined" onClick = { getPokemon }>Search!</Button>
        <Button variant="outlined" onClick = { handleClickReset }>Reset</Button>
      </Stack>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Clear search results?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This will clear out current search results.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Nevermind</Button>
          <Button onClick={handleReset} autoFocus>
            Reset
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Search;