import React from 'react'
import ReviewForm from '../components/ReviewForm';
import CocaCola from "../images/cocaLogo.png";

const WriteReviewPage = ({name,review,pageId}) => {
  return (
  <ReviewForm  businessname={name}   companyId={pageId}/>
  )
}

export default WriteReviewPage;