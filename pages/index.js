import { Grid, Card } from "@mui/material";
import classes from "../styles/Home.module.css";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

const pages = [1, 2, 3, 4, 5];

const Home = () => {
  return (
    <>
      <main>
        <Grid container  className={classes['card-section']}>
          {cards.map((card) => (
            <Grid item key={card} className={classes['card-element']}>
              <Card className={classes['card-item']} variant="outlined">

              </Card>  
            </Grid>
          ))}
        </Grid>
      </main>

      <ul className={classes.pagination}>
        <li className={classes['start-arrow']}>&#xAB;</li>
        <li className={classes['forward-arrow']}>	&#x3C;</li>
        {pages.map((item) => (
          <li className={classes['item-arrow']} key={item} id="item-arrow">{item}</li>
        ))}
        <li className={classes['back-arrow']}>&#x3E;</li>
        <li className={classes['end-arrow']}>&#xBB;</li>
      </ul>
    </>
  )
};

export default Home;