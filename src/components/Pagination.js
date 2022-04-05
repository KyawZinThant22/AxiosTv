
import { makeStyles } from '@mui/styles'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Pagination } from '@mui/material';



const theme = createTheme({
    palette:{
        mode : "dark",
    }
});

const useStyles = makeStyles({
    pagi : {
        width: '100%',
        display : 'flex',
        justifyContent: 'center',
        marginTop : "10px",
        PaddingBottom: "50px"
        
    }
})



const CustomPagination = ({setPage, numofPages = 10}) => {
    const classes = useStyles();


    const handleChange = (page) => {
        setPage(page);
        window.scroll(0,0)
    }

  return (
  
       <ThemeProvider theme={theme}>
            <Pagination className={classes.pagi}
                    count={numofPages}  size="large" 
                    onChange={(e) => handleChange(e.target.textContent)}
                    hideNextButton
                    hidePrevButton
                    color='primary'
                    />
       </ThemeProvider>
    
  )
}

export default CustomPagination