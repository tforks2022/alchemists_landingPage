import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Link } from '@material-ui/core';
import TwitterImage from '../../assets/img/twitter.svg';
import TelegramImage from '../../assets/img/telegram.svg';
import DiscordImage from '../../assets/img/discord.svg';
import YoutubeImage from '../../assets/img/youtube.svg';
import MediumImage from '../../assets/img/medium.svg';
import GitbookImage from '../../assets/img/gitbook.svg';

const useStyles = makeStyles((theme) => ({
  topbar: {
    //position: 'absolute',
    //top: '0',
    //paddingTop: '15px',
    //paddingBottom: '15px',
    //marginRight:'15px',
    //marginBotton:'35px',
    //width: '50%',
    //color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'left',
    //height: '1.3rem',
    // display: 'flex',
    // flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      //display: 'none',
    },
  },
  link: {
    width: '24px',
    height: '24px',
    display: 'inline',
    marginLeft: '20px',
  },

  img: {
    width: '5vh',
    height: '5vh',
  },
}));

const Topbar = () => {
  const classes = useStyles();
  return (
    <topbar className={classes.topbar}>
      <Container maxWidth='false'>
         <Grid container>
          <Grid item xs={12} style={{ textAlign: 'left', marginLeft:'8%', marginTop:'0px' }}>
            <a
              href="https://twitter.com/alchemists_f"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.link} >
              <img item="twitter" src={TwitterImage} className={classes.img} />
            </a>
            
            {/*<a 
              href="https://t.me/onepiece_finance" 
              rel="noopener noreferrer" 
              target="_blank" 
              className={classes.link} >
              <img 
                item="telegram" 
                src={TelegramImage} 
                className={classes.img} />
            </a>*/}

            {/*        <a
              href=""
              rel="noopener noreferrer"
              target="_blank"
              className={classes.link} >
              <img item="youtube" src={YoutubeImage} className={classes.img} />
            </a> */}

            <a 
              href="https://discord.gg/6uzauzkXGR" 
              rel="noopener noreferrer" 
              target="_blank" 
              className={classes.link}>
              <img 
                item="discord" 
                src={DiscordImage} 
                className={classes.img} />
            </a>

            {/*    <a 
              href="https://medium.com/prepo/setting-up-metamask-and-getting-eth-matic-on-polygon-step-by-step-guide-fd55147a0f05" 
              rel="noopener noreferrer" 
              target="_blank" 
              className={classes.link}>
                <img item="medium" src={MediumImage} className={classes.img} />
            </a>  */}           

            <a 
              href="https://doc.alchemists.finance" 
              rel="noopener noreferrer" 
              target="_blank" 
              className={classes.link}>
                <img item="gitbook" src={GitbookImage} className={classes.img} />
            </a>         

          </Grid>
        </Grid>
       </Container>
    </topbar>
  );
};


export default Topbar;
