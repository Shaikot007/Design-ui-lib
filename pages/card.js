import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { AttachMoney, FaceOutlined, LocalAtm, Timelapse } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Layout from '../src/components/layout';

const useStyles = makeStyles({
  cardWidth: {
    minWidth: 250,
    margin: '80px 25px 80px 25px',
    border: 'solid #3981F7 2px',
    borderRadius: '20px',
    cursor: 'pointer'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconsFirst: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    color: '#663399'
  },
  iconsSecond: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    color: '#3981F7'
  },
  iconsThird: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    color: '#5DAE49'
  },
  iconsFourth: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    color: '#FFC620'
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '0px 2px 0px 2px',
    width: '80%'
  },
  titleHead: {
    fontSize: '12px',
  },
  titleHeadFirst: {
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#663399'
  },
  titleHeadSecond: {
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#3981F7'
  },
  titleHeadThird: {
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#5DAE49'
  },
  titleHeadFourth: {
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#FFC620'
  }
});

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Layout>
      <Card className={classes.cardWidth}>
        <CardContent className={classes.cardContent}>
          <FaceOutlined className={classes.iconsFirst} />
          <div className={classes.title}>
            <Typography className={classes.titleHead} color="textSecondary" gutterBottom>
              New Leds
            </Typography>
            <Typography className={classes.titleHeadFirst}>
              205
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.cardWidth}>
        <CardContent className={classes.cardContent}>
          <AttachMoney className={classes.iconsSecond} />
          <div className={classes.title}>
            <Typography className={classes.titleHead} color="textSecondary" gutterBottom>
              Sales
            </Typography>
            <Typography className={classes.titleHeadSecond}>
              $4021
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.cardWidth}>
        <CardContent className={classes.cardContent}>
          <Timelapse className={classes.iconsThird} />
          <div className={classes.title}>
            <Typography className={classes.titleHead} color="textSecondary" gutterBottom>
              Orders
            </Typography>
            <Typography className={classes.titleHeadThird}>
              80
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.cardWidth}>
        <CardContent className={classes.cardContent}>
          <LocalAtm className={classes.iconsFourth} />
          <div className={classes.title}>
            <Typography className={classes.titleHead} color="textSecondary" gutterBottom>
              Expanse
            </Typography>
            <Typography className={classes.titleHeadFourth}>
              $1200
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};
