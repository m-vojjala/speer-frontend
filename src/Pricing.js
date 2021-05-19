import "./Pricing.css";
import { Fragment } from "react";
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { BsMusicNote } from "react-icons/bs";
import Perks from "./Perks";
import Footer from "./Footer"

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },

}));

const tiers = [
  {
    title: 'BASIC',
    subheader: 'MONTHLY',
    price: '9',
    description: ['very good', 'Amazing', 'Perfect job', 'Love this', "It's so good", 'Features'],
    buttonText: 'SELECT',
    buttonVariant: 'outlined',
    color: '#E64049'
  },
  {
    title: 'ADVANCED',
    subheader: 'YEARLY',
    price: '99',
    description: [
      'Very very good',
      'Even amazing',
      'Perfect job',
      'Love this more',
      "It's so good",
      'More features'
    ],
    buttonText: 'SELECT',
    buttonVariant: 'contained',
    color: '#CDD704'
  },
  {
    title: 'PRO',
    subheader: 'YEARLY',
    price: '99',
    description: [
      'Very very good',
      'Even amazing',
      'Perfect job',
      'Love this more',
      "It's so good",
      'More features'
    ],
    buttonText: 'SELECT',
    buttonVariant: 'outlined',
    color: '#48D1CC'
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <div className="pricing-div">

        <Container maxWidth="sm" component="main" className={classes.heroContent}>
          <h1 className='head-text'>PRICING</h1>
          <p className='sub-text'>Test out our app today! Choose from three subscription. Based payment models.</p>
        </Container>

        <Container maxWidth="md" component="main">
          <Grid container spacing={10} alignItems="flex-end">
            {tiers.map((tier) => (

              <Grid item key={tier.title} xs={12} sm={12} md={4}>

                <CardHeader style={{ backgroundColor: 'black', color: tier.color }}
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center', color: tier.color }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                />

                <div className={classes.cardPricing}>
                  <Typography style={{ color: tier.color, fontSize: '4rem' }} component="h2" variant="h3" >
                    ${tier.price}
                  </Typography>
                  <Typography variant="h6" color={tier.color}>
                  </Typography>
                </div>
                <ul>
                  {tier.description.map((line) => (
                    <Typography style={{ fontSize: '1.5rem' }} component="li" variant="subtitle1" align="center" key={line}>
                      <BsMusicNote />{line}
                    </Typography>
                  ))}
                </ul>

                <CardActions>
                  <Button className="btn" style={{ color: 'white', borderRadius: '30px', backgroundColor: tier.color, fontSize: '1.5rem' }} fullWidth variant={tier.buttonVariant} >
                    {tier.buttonText}
                  </Button>
                </CardActions>

              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <Perks />
      <Footer />
    </Fragment>
  );
}