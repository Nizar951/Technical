import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Items = (props) => {
    return(<>
    <Grid item xs={2.5}>
    </Grid>
    <Grid item xs={8.5}>
        <Paper >
            <List >
                <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                    <RemoveCircleOutlineIcon color='error'/>
                    </IconButton>
                }
                >
                <ListItemAvatar >
                    <IconButton >
                        <CheckCircleIcon sx={{ color:'#F5F5F4'}}/>
                    </IconButton>
                </ListItemAvatar>
                <ListItemText primary={props.isi} />
                </ListItem>,
            </List>
        </Paper>
    </Grid>
    <Grid item xs={1}>
    </Grid>
    </>
    )
}

export default Items