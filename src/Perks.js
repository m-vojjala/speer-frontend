import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    height: '100vh',
    backgroundColor: '#CD5555',
  },
  header: {
    fontSize: '3.5rem',
    color: 'white',
    textAlign: 'left',
    marginLeft: '10%',
    marginTop: '10%',

  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#CD5555',
    border: 'none',
    marginLeft: '10%'
  },
  title: {
    width: '50%',
    textAlign: 'left',
    fontSize: '3rem',
    color: 'white'
  },
  paragraph: {
    width: '70%',
    textAlign: 'left',
    fontSize: '1.75rem'
  }
});
export default function Perks() {

  const tiers = [{
    title: "Subscription Payment Model",
    paragraph: "No commitment, cancel anytime. Never worry about forgetting a payment again! "
  },
  {
    title: "No Fee Cancellation Policy",
    paragraph: "No commitment, cancel anytime. Never worry about forgetting a payment again! "
  }, {
    title: "Subscription Payment Model",
    paragraph: "No commitment, cancel anytime. Never worry about forgetting a payment again! "
  }];

  const classes = useStyles();

  return (
    <Card className={classes.root}>

      <h1 className={classes.header}>PERKS</h1>
      {/* mapping through the array */}
      <CardContent className={classes.cardContent}>
        {tiers.map(tier => {
          return <div> <Typography className={classes.title} gutterBottom>
            <strong>{tier.title}</strong>
          </Typography>
            <Typography className={classes.paragraph} gutterBottom>
              {tier.paragraph}
            </Typography></div>
        })}
      </CardContent>

    </Card>
  )
}