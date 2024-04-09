import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CourceCards.scss'


export default function CourceCards() {
  return (<>
<div className="exploreCources">
  <h1>Explore courses</h1>
  <span>(Class 3 - 13)</span>
</div>

    <div className="courceContainer">

      <Card sx={{
        backgroundImage: "url('https://vmkt.vedantu.com/vmkt/PROD/png/92ca55f2-ef3f-4065-81af-cb6f5d46d26f-1682592753417-4102418410874681.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",

      }} >
      <div className="data">
          <CardContent>
            <Typography sx={{ color: "rgb(115, 115, 237)" }} color="text.secondary" gutterBottom>
              Class 3 - 12
            </Typography>
            <Typography variant="h5" component="div">
              Courses for kids
            </Typography>
          </CardContent>

          <div className='jee'>
            <CardActions>
              <Button >JEE</Button>
            </CardActions>

            <CardActions>
              <Button >NEET</Button>
            </CardActions>
          </div>
          <CardActions>
            <Button >JEE/NEET FOUNDATION</Button>
          </CardActions>

          <CardActions>
            <Button >EAMCET</Button>
          </CardActions>

          <CardActions>
            <Button >OLYMPIAD</Button>
          </CardActions>
          <div className="explore">
            <CardActions >
              <Button >EXPLORE COURCES</Button>
            </CardActions>
          </div>
          </div>
      </Card>


      <Card sx={{
        backgroundImage: "url('https://vmkt.vedantu.com/vmkt/PROD/png/6a4a6f46-7c21-40fe-9aa8-92af33851e37-1682592770093-4102418410874681.png')",
        backgroundRepeat: 'no-repeat',


        backgroundSize: "cover"
      }}>
        <div className="data">
          <CardContent>
            <Typography sx={{ color: "rgb(115, 115, 237)" }} color="text.secondary" gutterBottom>
              Class 3 - 13
            </Typography>
            <Typography variant="h5" component="div">
              Competitive Exams
            </Typography>

          </CardContent>
          <CardActions>
            <Button >CBSE</Button>
          </CardActions>

          <CardActions>
            <Button >ICSE</Button>
          </CardActions>

          <div className="explore1">
            <CardActions>
              <Button >EXPLORE COURSES</Button>
            </CardActions>
          </div>
          </div>
      </Card>



      <Card sx={{
        backgroundImage: "url('https://vmkt.vedantu.com/vmkt/PROD/png/ff06ac5b-081a-4a50-a494-16beb717d5b1-1682592787084-4102418410874681.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover"
      }}>
      <div className="data">
          <CardContent>
            <Typography sx={{ color: "rgb(115, 115, 237)" }} color="text.secondary" gutterBottom>
              Class 1 - 5
            </Typography>
            <Typography variant="h5" component="div">
              School Tuition
            </Typography>

          </CardContent>
          <CardActions>
            <Button >ENGLISH SUPERSTAR</Button>
          </CardActions>

          <CardActions>
            <Button >SPOKEN ENGLISH</Button>
          </CardActions>

          <CardActions>
            <Button >LEARN MATH</Button>
          </CardActions>

          <CardActions>
            <Button >LEARN CODE</Button>
          </CardActions>

          </div>
          <div className="explore2">
            <CardActions>
              <Button >EXPLORE COURCES</Button>
            </CardActions>
          </div>
        
      </Card>



    </div>
    </>);
}