import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


const NavBar = () =>{
    return(
        <div>
            <AppBar position="static" >
                <ToolBar>
                    <Typography variant="h5" color="inherit">
                        React & Material-UI Sample Application
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default NavBar;