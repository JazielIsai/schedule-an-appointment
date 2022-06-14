import { useState } from "react";
import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

function CardContainer( { img, title, subtitle, text, nameButton, showButton=false } ) {


  return (
    <>
      <Card className='container card' >
    
        <CardImg
          alt=""
          src={ img }
          top
          width="100%"
        />
    
        <CardBody className="card-body">

          <CardTitle tag="h5" className="card-title">
            { title }
          </CardTitle>
          
          <CardSubtitle 
            className="mb-2 text-muted " 
            tag="h6"
          >
            {subtitle}
          </CardSubtitle>
          
          <CardText className='card-text'>
            {text}
          </CardText>
          
          {
            showButton && 
              <Button>
                {nameButton}
              </Button>
          }

        </CardBody>
      
      </Card>
    </>
  );
}

export default CardContainer;
