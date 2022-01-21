import React from 'react';
import { Container, Card, Button, CardActions, CardContent, IconButton } from '@mui/material'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <Container style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}>
            <Card style={{ display: "flex", flexDirection: "row" }}>
                <CardActions>Know My City</CardActions>
                <CardContent style={{ marginLeft: "auto" }}>
                    
                    <NavLink exact to="/city" activeClassName="active">
                        <IconButton>
                            <i className="fas fa-city"></i>
                        </IconButton>
                    </NavLink>

                    <NavLink exact to="/" activeClassName="active">
                        <IconButton>
                            <i className="fas fa-home"></i>
                        </IconButton>
                    </NavLink>
                </CardContent>
            </Card>
        </Container>
    )
}
