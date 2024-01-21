import {Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

const CustomCard = ({title, content, image, actionButtonLabel, onActionButtonClick}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt={title} height='auto' src={image} />
            <CardContent>
                <Typography variant="body2" color="text.secondary" fontFamily='cursive' fontWeight='bold'>
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                {actionButtonLabel && (
                    <Button size="small" onClick={onActionButtonClick}>
                        {actionButtonLabel}
                    </Button>
                )}
                {/* Add more action buttons if needed */}
            </CardActions>
        </Card>
    );
};

export default CustomCard;