


import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import './Cards.scss'


export default function Cards() {
    return (
        <>
        <div className="cardContainer">
            <div className="cardTitle">
                <span>Popular Courses</span>
            </div>
            <div className="cards">
                <Card sx={{ minWidth: 50,background:"rgb(246, 138, 246)" }}>
                    <CardContent>
                        <div>
                            <Typography >
                                <img src="https://vmkt.vedantu.com/vmkt/PROD/svg%2Bxml/3bf6f173-d389-438a-be15-769f9f64613f-1682411152290-4102418410874681.svg%2Bxml" alt="" />
                            </Typography>
                        </div>
                        <div className='row'>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            2-Year JEE
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />

                            </Typography>
                        </div>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>

                <Card sx={{ minWidth: 50,background:" rgb(170, 243, 218)" }}>
                    <CardContent>
                        <div>
                            <Typography >
                                <img src="https://vmkt.vedantu.com/vmkt/PROD/svg%2Bxml/821a08ef-daaf-4d8e-961d-1804aac64c77-1682411124172-4102418410874681.svg%2Bxml" alt="" />
                            </Typography>
                        </div>
                        <div className='row'>
                            <Typography sx={{ mb: 1.33}} color="text.secondary">
                            2-Year NEET

                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />

                            </Typography>
                        </div>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>
                <Card sx={{ minWidth: 50,background:"rgb(170, 222, 243)" }}>
                    <CardContent>
                        <div>
                            <Typography >
                                <img src="https://vmkt.vedantu.com/vmkt/PROD/svg%2Bxml/c73a29df-1d72-4d87-83b9-548fd32ab20f-1682411185877-4102418410874681.svg%2Bxml" alt="" />
                            </Typography>
                        </div>
                        <div className='row'>
                            <Typography sx={{ mb: 1.3 }} color="text.secondary">
                            Offline Centres
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />

                            </Typography>
                        </div>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>

                <Card sx={{ minWidth: 50 ,background:"rgb(244, 181, 245)"}}>
                    <CardContent>
                        <div>
                            <Typography >
                                <img src="https://vmkt.vedantu.com/vmkt/PROD/svg%2Bxml/5d86bcba-2443-4044-b97d-107d61c0da79-1682411094804-4102418410874681.svg%2Bxml" alt="" />
                            </Typography>
                        </div>
                        <div className='row'>
                            <Typography sx={{ mb: 1.3 }} color="text.secondary">
                            Olympiad
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />

                            </Typography>
                        </div>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>

                <Card sx={{ minWidth: 50,background:"rgb(238, 230, 182)" }}>
                    <CardContent>
                        <div>
                            <Typography >
                                <img src="https://vmkt.vedantu.com/vmkt/PROD/png/df232556-42ab-483a-860c-2c7c549ba897-1696348393825-4102515828415223.png" alt="" />
                            </Typography>
                        </div>
                        <div className='row'>
                            <Typography sx={{ mb: 1.3}} color="text.secondary">
                            One to One
Classes
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />

                            </Typography>
                        </div>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>

                <Card sx={{ minWidth: 50 ,background:"rgb(200, 192, 233)"}}>
                    <CardContent>
                        <div>
                            <Typography >
                                <img src="https://vmkt.vedantu.com/vmkt/PROD/svg%2Bxml/95a720d0-b5c1-4fcc-8a55-769a33bbaed0-1691483030590-4102515828415223.svg%2Bxml" alt="" />
                            </Typography>
                        </div>
                        <div className='row'>
                            <Typography sx={{ mb: 1.3}} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />

                            </Typography>
                        </div>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>

            </div>
            <div className="scroll">
                <img src="https://tse4.mm.bing.net/th?id=OIP.0eqYLMWex1g92a8nNJkVcQHaHa&pid=Api&P=0&h=180" alt="" />
                <img src="https://tse3.mm.bing.net/th?id=OIP.Kdv7MG7mWMIA2a5ANxZ1oQHaHa&pid=Api&P=0&h=180" alt="" />

            </div>





            </div>
        </>
    );
}


