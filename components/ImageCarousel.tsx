"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardFooter } from './ui/card';


const ImageCarousel = () => {
  const imageUrls = [
    "https://scontent.fgbe4-1.fna.fbcdn.net/v/t39.30808-6/436319464_841281171372235_7316309846877350251_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFHU9d-24iP-TTTnHJbcCK9CKgMYfTIMx8IqAxh9MgzHzSli2LTCWcLE6kcKGv54uzjh5woOJqjErECs_Vy_zHw&_nc_ohc=nvo1Qe5wVGYAb6kqCTA&_nc_ht=scontent.fgbe4-1.fna&oh=00_AfDokVWVPtomPCSE0t2XO-j5BvisLoHbGYH444gcta5WbQ&oe=662B2B8F",
    "https://scontent.fgbe4-1.fna.fbcdn.net/v/t39.30808-6/393780322_725410286293606_5145263166490080029_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE3X6Q9ZgwQ-93xCNQgHIH3RtmtoTsRdbBG2a2hOxF1sLqnJYvJgGtQledvR9IZafEQgKcDCQJwwSGgCskl2ZZy&_nc_ohc=F_b3ziwpfCQAb5Enu_6&_nc_ht=scontent.fgbe4-1.fna&oh=00_AfCRQcVe8lj0ZpxvFhh4xCbg1aYHTUSvU7RyBEjdLX7VAA&oe=662B6199",
    "https://scontent.fgbe4-1.fna.fbcdn.net/v/t39.30808-6/385254824_692239852933283_6111142578430346712_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFhFsTuXdu1Gvcvc48xr48CnqmourZh1vGeqai6tmHW8dlqt4M5RNMI8BO2FYiKZh_7mCvMDr7VjgUiN2RDQNKV&_nc_ohc=m7NjGT25PGoAb5uFN4a&_nc_ht=scontent.fgbe4-1.fna&oh=00_AfANU8tsjse__szzmer98D0GnaHLeKRfYmrl6_sdC7sIqA&oe=662B2A1D",
    "https://scontent.fgbe4-1.fna.fbcdn.net/v/t39.30808-6/295831708_7939596929445565_4841708686096268394_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF5ilNH9FVLU1RwmdYyQ4yKA9r6QnFJcjwD2vpCcUlyPKR4ZKYRkZnqAgOFvmDJn2KMoh5TVBvfckj09F0fYT0Z&_nc_ohc=Vl2iFF9X6GkAb56bQBC&_nc_ht=scontent.fgbe4-1.fna&oh=00_AfDK62dHSaitVd170bL9W9f7p4UB3U8tDPCzWPGFsTOa0A&oe=662B50C4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="overflow-hidden relative">
      <div className="image-carousel-container" style={{ width: '100%', overflow: 'hidden' }}>
        <div className="image-wrapper" style={{ display: 'flex', transition: 'transform 1s', transform: `translateX(-${currentIndex * 100}%)` }}>
          {[...imageUrls, imageUrls[0]].map((imageUrl, index) => (
            <img
              key={index}
              alt={`Product image ${index}`}
              className="carousel-image"
              src={imageUrl}
              style={{ width: '100%' }}
            />
          ))}
        </div>
      </div>
      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Advertisement - Contact us to display your ads here.
        </div>
      </CardFooter>
    </Card>
  );
};

export default ImageCarousel;
