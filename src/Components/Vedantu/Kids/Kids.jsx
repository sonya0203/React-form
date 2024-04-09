import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Kids.scss'


export default function Kids() {
    return (
        <div className="kidCource" >
            <div className="top">
                <Card sx={{background:"rgb(248, 224, 193)" }}>
                    <CardContent>
                        <div className="logo">
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <img src="https://www.vedantu.com/cdn/images/new-home-page/B2/english-pro.svg" alt="" />
                            </Typography>
                        </div>
                        <div className="detail">
                            <Typography sx={{ fontSize:"15px" }} color="text.secondary">

                                Age 4 - 8
                            </Typography>

                            <Typography variant="h6" component="div">
                                English Superstar
                            </Typography>

                            <Typography variant="body2">
                                Level based holistic English Program

                            </Typography>

                            <CardActions>
                                <Button size="small">Explore</Button>
                            </CardActions>
                        </div>
                    </CardContent>
                </Card>

                <Card sx={{background:" rgb(200, 199, 197)"}}>
                    <CardContent>
                        <div className="logo">
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <img src="https://www.vedantu.com/cdn/images/new-home-page/B2/vsk-math.svg" alt="" />
                            </Typography>
                        </div>

                        <div className="detail">
                            <Typography sx={{ fontSize:"15px" }} color="text.secondary">
                                Class 1 - 2
                            </Typography>

                            <Typography variant="h6" component="div">
                                Learn math
                            </Typography>

                            <Typography variant="body2">
                                Turn your child into a Math wizard

                            </Typography>

                            <CardActions>
                                <Button size="small">Explore</Button>
                            </CardActions>
                        </div>
                    </CardContent>
                </Card>
            </div>


            <div className="bottom">
                <Card sx={{background:"rgb(208, 208, 255)"}}>
                    <CardContent>
                        <div className="logo">
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <img src="https://www.vedantu.com/cdn/images/new-home-page/B2/vsk-spoken-english.svg" alt="" />
                            </Typography>

                        </div>
                        <div className="detail">
                            <Typography sx={{ fontSize:"15px" }} color="text.secondary">
                                Class 3 - 5
                            </Typography>

                            <Typography variant="h6" component="div">
                                Spoken english
                            </Typography>

                            <Typography variant="body2">
                                See your child speak fluently and confidently

                            </Typography>

                            <CardActions>
                                <Button size="small">Explore</Button>
                            </CardActions>
                        </div>
                    </CardContent>
                </Card>

                <Card sx={{background:"rgb(189, 230, 241)"}}>
                    <CardContent>
                        <div className="logo">
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <img src="https://www.vedantu.com/cdn/images/new-home-page/B2/coding-classes.svg" alt="" />
                            </Typography>
                        </div>
                        <div className="detail">
                            <Typography sx={{ fontSize:"15px" }} color="text.secondary">
                                Class 1 - 8
                            </Typography>

                            <Typography variant="h6" component="div">
                                Coding classes
                            </Typography>

                            <Typography variant="body2">
                                Learn to build apps and games, be future ready

                            </Typography>

                            <CardActions>
                                <Button size="small">Explore</Button>
                            </CardActions>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
}
