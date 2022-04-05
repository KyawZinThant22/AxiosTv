import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Container, Drawer} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SideDrawer from './Drawer';
import { useNavigate } from 'react-router-dom';
import { height } from '@mui/system';

//dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },  
});




const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
 
}));



const Layout = ({children}) => {
  
  //navigate
  const navigate = useNavigate();


 // List of Items in the Links
 const CatagoryItems = [
  { text: "Home", path: `/` },
  { text: "Movie", path: `/movies` },
  { text: "Series", path: `/series` },
  
];

  // classes for makeStyles
  const classes = useStyles()

  return (
    <div>
        <ThemeProvider theme={darkTheme}>
        <Box sx={{ flexGrow: 1 }} >

          {/* App Bar */}

          <AppBar position="static" elevation={1} className={classes.mainbar}>
            <Container maxWidth="xl">
            <Toolbar>

              {/* Menu  */}
           <SideDrawer>

           <IconButton component='div'
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 , display : { sm : 'flex' , xl : 'none'}}}
                onClick ={ () => {
                  navigate("/")
                }}
              >
                      <MenuIcon/>
              </IconButton>


           </SideDrawer>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } , cursor:'pointer'  }}
                onClick ={ () => {
                  navigate("/")
                }}
              >
                AxiosTV
              </Typography>

              {/* Search bar */}
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>

              <Typography   onClick ={ () => {navigate("/")}} variant='h5'  sx = {{display : {sm : 'flex' , md: 'none' , lg:'none'}}}>
                  Ax
              </Typography>

                {/* Link Tags */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , justifyContent: 'end' }}>
                {CatagoryItems.map((page,index) => (
                  <Button
                    key={index}
                    color = 'secondary'
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    className={classes.styleforLinks}
                    size = "large"
                    onClick = {() => {
                      navigate(page.path)
                    }}
                  >
                    {page.text}
                  </Button>
                ))}
              </Box>
            </Toolbar>
            </Container>
          </AppBar>
          </Box>
        </ThemeProvider>


       <div className={classes.home}>
       <Container maxWidth="xl">
              {children}
        </Container>
       </div>
    </div>

  
  )
}


//  styles for Links
const useStyles = makeStyles({
  styleforLinks : {
     marginRight:'12px',
    fontSize:' 15px !important'
  },
  home :{
    background:'#141414;',
   
    color : "#fff"
  },
  mainbar: {
    position: "fixed !important",
    zIndex: 100,
    top: 0,
  }
})

export default Layout