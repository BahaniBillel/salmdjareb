import React from 'react'
import ReviewForm from '../components/ReviewForm';
import CocaCola from "../images/cocaLogo.png";

const WriteReviewPage = ({name,review}) => {
  return (
  <ReviewForm logo={CocaCola} businessname={name} handleClick={review}/>
  )
}

export default WriteReviewPage;