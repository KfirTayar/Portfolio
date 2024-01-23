import {Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

const CustomCard = ({title, content, image, actionButtonLabel, onActionButtonClick}) => {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', height: 460 }}>
            <CardMedia component="img" alt={title} height='auto' src={image} />
            <CardContent sx={{ flex: 1 }}>
                <Typography variant="body2" color="text.secondary" fontFamily='cursive' fontWeight='bold'>
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                {actionButtonLabel && (
                    <Button sx={{ marginTop: 'auto'}} onClick={onActionButtonClick}>
                        {actionButtonLabel}
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default CustomCard;