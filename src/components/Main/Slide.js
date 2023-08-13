import "styles/main-page/slide.css";
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { SLIDE_INFO } from 'utils/Constant';
import SlideCard from './SlideCard';
import Button from 'components/common/Button'
import Pagination from './Pagination';

const Slide = () => {
  const { LEGNTH, DELAY, DETAILS } = SLIDE_INFO;
  const [page, setPage] = useState(0);
  const [customInterval, setCustomInterval] = useState(DELAY);

  useEffect(() => {
    calStyle(page);
  }, [page]);

  useEffect(() => {
    setCustomInterval(DELAY);
  }, [customInterval]);

  useInterval(() => {
    setPage((curr) => {
      curr += 1;
      if (curr >= LEGNTH) {
        curr = 0;
      }
      
      return curr;
    })
  }, customInterval);

  function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  function delayPagination () {
    setCustomInterval(500);
  }

  function calStyle (page) {
    const slideWidth = document.querySelector('.slide').clientWidth;
    const ul = document.querySelector('ul');
    switch(page) {
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

  function SlideList({status, link, content}) {
    return (
      <li>
        <SlideCard status={status}/>
        <div className="container-button">
          <Link to={link}>
            <Button buttonSize={'button-slide'} content={content}/>
          </Link>
        </div>
      </li>
    )
  }

  return (
    <div className="slide">
      <ul>
        {DETAILS.map((e, i) => {
          return <SlideList key={i} status={e.status} link={e.link} content={e.content}/>
        })}
      </ul>
      <Pagination n={3} page={page} setPage={setPage} delay={delayPagination}/>
    </div>
  )
}

export default Slide