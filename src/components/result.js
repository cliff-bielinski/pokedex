import psyduck from '../images/psyduck.png'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Result(props) {

  if (props.result === "error") {
    return (
      <>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <img 
              src={psyduck}
              alt="psyduck"
            />
            <h2>Pokemon Not Found!</h2>
          </AccordionSummary>
        </Accordion>
      </>
    );
  }

  if (props.result === null) {
    return (
      <>
      </>
    );
  }

  return (
    <div className='results'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img 
            src={props.result.sprites.front_default}
            alt={props.result.name}
          />
          <h3>{props.result.name.toUpperCase()} | {`Pokedex ID: #${props.result.id}`}</h3>
          
        </AccordionSummary>
        <AccordionDetails>
          < List dense>
            <ListItem>
              <ListItemText
                primary="Primary Type"
                secondary={props.result.types[0].type.name}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Secondary Type"
                secondary={props.result.types.length > 1 
                  ? props.result.types[1].type.name
                  : "none"
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Height"
                secondary={`${props.result.height} decimeters`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Weight"
                secondary={`${props.result.weight} hectograms`}
              />
            </ListItem>
            <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Stat Name</TableCell>
                  <TableCell align="left">Base Stat</TableCell>
                  <TableCell align="left">Effort</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.result.stats.map((stat) => (
                  <TableRow
                    key={stat.stat.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {stat.stat.name}
                    </TableCell>
                    <TableCell align="left">{stat.base_stat}</TableCell>
                    <TableCell align="left">{stat.effort}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Result;