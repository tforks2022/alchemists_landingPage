import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Link } from '@material-ui/core';
import TwitterImage from '../../assets/img/twitter.svg';
import TelegramImage from '../../assets/img/telegram.svg';
import DiscordImage from '../../assets/img/discord.svg';
import YoutubeImage from '../../assets/img/youtube.svg';
import MediumImage from '../../assets/img/medium.svg';

const useStyles = makeStyles((theme) => ({
  topbar: {
    //position: 'absolute',
    //top: '0',
    paddingTop: '15px',
    //paddingBottom: '15px',
    marginRight:'15px',
    //marginBotton:'35px',
    //width: '50%',
    //color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'left',
    height: '1.3rem',
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
    width: '44px',
    height: '44px',
  },
}));

const Topbar = () => {
  const classes = useStyles();
  return (
    <topbar className={classes.topbar}>
      <Container maxWidth="lg">
         <Grid container>
          <Grid item xs={12} style={{ textAlign: 'left',marginLeft:'-40px',marginTop:'-35px' }}>
            <a
              href="https://twitter.com/OnePiece__Finance"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.link}
            >
              <img alt="twitter" src={TwitterImage} className={classes.img} />
            </a>
            
            <a href="https://t.me/onepiece_finance" rel="noopener noreferrer" target="_blank" className={classes.link}>
              <img alt="telegram" src={TelegramImage} className={classes.img} />
            </a>
     {/*        <a
              href=""
              rel="noopener noreferrer"
              target="_blank"
              className={classes.link}
            >
              <img alt="youtube" src={YoutubeImage} className={classes.img} />
            </a> */}
            <a href="https://discord.gg/mFbvjFjb4x" rel="noopener noreferrer" target="_blank" className={classes.link}>
              <img alt="discord" src={DiscordImage} className={classes.img} />
            </a>
         {/*    <a href="https://medium.com/prepo/setting-up-metamask-and-getting-eth-matic-on-polygon-step-by-step-guide-fd55147a0f05" rel="noopener noreferrer" target="_blank" className={classes.link}>
              <img alt="medium" src={MediumImage} className={classes.img} />
            </a>  */}           
          </Grid>
        </Grid>
       </Container>
    </topbar>
  );
};

export default Topbar;
