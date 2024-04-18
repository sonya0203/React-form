import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './FoundationCards.scss'


export default function FoundationCards() {
  return (
   <>
   <div className="foundationContainer">
    <Card sx={{backgroundColor:"   rgb(255, 239, 233)",borderRadius:"10px"}} >
      <CardContent>
      <Typography  component="div">
      Class 8
       </Typography>
        <Typography  component="div">
        Foundation
        </Typography>
        <Typography sx={{ fontSize:"13px" ,color:"rgb(134, 134, 134)" }} color="text.secondary">
        18 LIVE sessions . 3 weeks        </Typography>

      
      <CardActions sx={{padding:'0px'}} className='buttonContainer'>
        <Button size="small">view More</Button>
        <img className='rightArrow' src="https://tse2.mm.bing.net/th?id=OIP.4l8yHp6p98JxNmycMYLWPQHaHa&pid=Api&P=0&h=180" alt="" />
      </CardActions>
      </CardContent>
    </Card>
   
    <Card sx={{backgroundColor:"   rgb(255, 239, 233)",borderRadius:"10px"  }}>
      <CardContent>
      <Typography  component="div">
      Class 8
       </Typography>
        <Typography  component="div">
        Foundation
        </Typography>
        <Typography sx={{ fontSize:"13px" ,color:"rgb(134, 134, 134)" }} color="text.secondary">
        18 LIVE sessions . 3 weeks        </Typography>

      
        <CardActions sx={{padding:'0px'}} className='buttonContainer'>
        <Button size="small">view More</Button>
        <img className='rightArrow' src="https://tse2.mm.bing.net/th?id=OIP.4l8yHp6p98JxNmycMYLWPQHaHa&pid=Api&P=0&h=180" alt="" />
      </CardActions>
      </CardContent>
    </Card>

    <Card sx={{backgroundColor:"   rgb(255, 239, 233)",borderRadius:"10px"  }}>
      <CardContent>
      <Typography  component="div">
      Class 8
       </Typography>
        <Typography  component="div">
        Foundation
        </Typography>
        <Typography sx={{ fontSize:"13px" ,color:"rgb(134, 134, 134)" }} color="text.secondary">
        18 LIVE sessions . 3 weeks        </Typography>

      
        <CardActions sx={{padding:'0px'}} className='buttonContainer'>
        <Button size="small">view More</Button>
        <img className='rightArrow' src="https://tse2.mm.bing.net/th?id=OIP.4l8yHp6p98JxNmycMYLWPQHaHa&pid=Api&P=0&h=180" alt="" />
      </CardActions>
      </CardContent>
    </Card>

    <Card sx={{ backgroundColor:"   rgb(255, 239, 233)",borderRadius:"10px" }}>
      <CardContent>
      <Typography  component="div">
      Class 8
       </Typography>
        <Typography  component="div">
        Foundation
        </Typography>
        <Typography sx={{ fontSize:"13px" ,color:"rgb(134, 134, 134)" }} color="text.secondary">
        18 LIVE sessions . 3 weeks
        </Typography>

      
        <CardActions sx={{padding:'0px'}} className='buttonContainer'>
        <Button size="small">view More</Button>
        <img className='rightArrow' src="https://tse2.mm.bing.net/th?id=OIP.4l8yHp6p98JxNmycMYLWPQHaHa&pid=Api&P=0&h=180" alt="" />
      </CardActions>
      </CardContent>
    </Card>

    <Card sx={{backgroundColor:"   rgb(255, 239, 233)",borderRadius:"10px"}}>
      <CardContent>
      <Typography  component="div">
      Class 8
       </Typography>
        <Typography  component="div">
        Foundation
        </Typography>
        <Typography sx={{fontSize:"13px" ,color:"rgb(134, 134, 134)"}} color="text.secondary">
        18 LIVE sessions . 3 weeks        </Typography>

   
        <CardActions sx={{padding:'0px'}} className='buttonContainer'>
        <Button size="small">view More</Button>
        <img className='rightArrow' src="https://tse2.mm.bing.net/th?id=OIP.4l8yHp6p98JxNmycMYLWPQHaHa&pid=Api&P=0&h=180" alt="" />
      </CardActions>
      </CardContent>
    </Card>
    </div>
   </>
   
  );
}
