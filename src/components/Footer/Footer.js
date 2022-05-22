import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Link } from '@material-ui/core';
import TwitterImage from '../../assets/img/twitter.png';
import TelegramImage from '../../assets/img/telegram.png';
import DiscordImage from '../../assets/img/discord.png';
import YoutubeImage from '../../assets/img/youtube.png';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'absolute',
    bottom: '0',
    //paddingTop: '15px',
    //paddingBottom: '15px',
    width: '100%',
    color: 'white!important',
    backgroundColor: '#121212',
    textAlign: 'center',
    height: '1.1rem',
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
    width: '34px',
    height: '34px',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="body2" color="white" align="left">
              {'Copyright ©'}
              <Link color="inherit" href="/">
                OnePiece Finance
              </Link>{' '}
              {new Date().getFullYear()}
            </Typography>
          </Grid>
        {/*   <Grid item xs={6} style={{ textAlign: 'right' }}>
            <a
              href="https://twitter.com/alternates_f"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.link}
            >
              <img alt="twitter" src={TwitterImage} className={classes.img} />
            </a>
            
            <a href="" rel="noopener noreferrer" target="_blank" className={classes.link}>
              <img alt="telegram" src={TelegramImage} className={classes.img} />
            </a>
            <a
              href=""
              rel="noopener noreferrer"
              target="_blank"
              className={classes.link}
            >
              <img alt="youtube" src={YoutubeImage} className={classes.img} />
            </a>
            <a href="https://discord.com/invite/Qfj5jDu68U" rel="noopener noreferrer" target="_blank" className={classes.link}>
              <img alt="discord" src={DiscordImage} className={classes.img} />
            </a>
          </Grid> */}
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
