import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        altText: 'Zumba',
        caption: 'Zumba'
    },
    {
        src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        altText: 'Soul Cycle',
        caption: 'Soul Cycle'
    },
    {
        src: 'https://media.istockphoto.com/photos/action-shot-of-male-boxer-in-gym-training-with-leather-punch-bags-picture-id1193311522?k=20&m=1193311522&s=612x612&w=0&h=5Ds-3boiFPC2h3zYObC2EWGeThgLWYCF-H4PZsCmz6w=',
        altText: 'Boxing',
        caption: 'Boxing'
    },
    {
        src: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        altText: 'Yoga',
        caption: 'Yoga'
    },
    {
        src: 'https://images.unsplash.com/photo-1517343985841-f8b2d66e010b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
        altText: 'Crossfit',
        caption: 'Crossfit'
    }
]