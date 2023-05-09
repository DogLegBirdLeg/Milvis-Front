import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

import "./Slide.css";
import { Card1Text, Card2Text, Card3Text } from './CardText';
import Button from 'components/common/Button'
import Pagination from './Pagination';

const IMAGE_LENGTH = 3;


const Slide = () => {
  const [page, setPage] = useState(0);
  const [customInterval, setCustomInterval] = useState(4000);
  const slideInfo = [
    {
      status: 0,
      link: '/train',
      content: '환승 시간표 확인하기'
    }, 
    {
      status: 1,
      link: '/map',
      content: '길찾기 바로가기'
    },
    {
      status: 2,
      link: 'bus/:date',
      content: '버스 시간표 확인하기'
    }
  ];

  // useEffect(() => {
  //   calStyle(page);
  // }, [page]);

  // useEffect(() => {
  //   setCustomInterval(4000);
  // }, [customInterval]);

  // useInterval(() => {
  //   setPage((curr) => {
  //     curr += 1;
  //     if (curr >= IMAGE_LENGTH) {
  //       curr = 0;
  //     }
      
  //     return curr;
  //   })
  // }, customInterval);

  // function useInterval(callback, delay) {
  //   const savedCallback = useRef();
  
  //   // Remember the latest callback.
  //   useEffect(() => {
  //     savedCallback.current = callback;
  //   }, [callback]);
  
  //   // Set up the interval.
  //   useEffect(() => {
  //     function tick() {
  //       savedCallback.current();
  //     }
  //     if (delay !== null) {
  //       let id = setInterval(tick, delay);
  //       return () => clearInterval(id);
  //     }
  //   }, [delay]);
  // }

  console.log(page);

  function delayPagination () {
    setCustomInterval(500);
  }

  function calStyle (curr) {
    const slideWidth = document.querySelector('.slide').clientWidth;
    const ul = document.querySelector('ul');
    switch(curr) {
      case 0:
        ul.setAttribute('style', `left: ${0}px`)
        break;
      case 1:
        ul.setAttribute('style', `left: ${-slideWidth}px`)
        break;
      case 2:
        ul.setAttribute('style', `left: ${-slideWidth * 2}px`)
        break;
      default:
        ul.setAttribute('style', `left: ${0}px`)
        break;
    }
  }

  function Card({status}) {
    return (
      <>
        <div className="slide-img"></div>
        {status === 0 ? <Card1Text /> : ''}
        {status === 1 ? <Card2Text /> : ''}
        {status === 2 ? <Card3Text /> : ''}
      </>
    )
  }

  function SlideItem({status, link, content}) {
    return (
      <li>
        <Card status={status}/>
        <div className="slide-button">
          <Link to={link}>
            <Button buttonsSize={'long-button'} content={content}/>
          </Link>
        </div>
      </li>
    )
  }

  return (
    <div className="slide">
      <ul>
        {slideInfo.map((e, i) => {
          return <SlideItem key={i} status={e.status} link={e.link} content={e.content}/>
        })}
      </ul>
      <Pagination n={3} page={page} setPage={setPage} delay={delayPagination}/>
    </div>
  )
}

export default Slide