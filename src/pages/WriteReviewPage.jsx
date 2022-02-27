import React from 'react'
import ReviewForm from '../components/ReviewForm';
import CocaCola from "../images/cocaLogo.png";

const WriteReviewPage = ({name}) => {
  return (
  <ReviewForm logo={CocaCola} businessname={name}/>
  )
}

export default WriteReviewPage;