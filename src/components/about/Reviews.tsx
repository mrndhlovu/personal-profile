import React, { ReactElement } from "react"
import Slider from "react-slick"
import styled from "styled-components"

import { useAirtableQuery } from "src/utils/graphql"
import Testimonial from "./Testimonial"

const StyledSlider = styled(Slider)`
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none;
  }

  .slick-list {
    margin-left: -15px;
    margin-right: -15px;

    &:nth-child(1) {
      .slick-track {
        display: flex !important;
      }
    }
  }

  & {
    margin: 0 15px;
  }

  .mi-testimonial-content {
    min-height: 150px;
    display: flex;
    align-items: center;
    padding: 30px;
    margin-bottom: 35px;
    position: relative;
    border-left: 5px solid ${props => props.theme.colors.border};
    background: ${props => props.theme.colors.bgBody};

    &::after {
      content: "";
      position: absolute;
      left: 30px;
      top: 100%;
      border-style: solid;
      border-width: 12px;
      border-color: ${props => props.theme.colors.border} transparent
        transparent ${props => props.theme.colors.border};
    }

    p {
      margin-bottom: 0;
      font-size: 1.2rem;
    }
  }

  .mi-testimonial-author {
    h5 {
      margin-bottom: 0;
    }

    h6 {
      margin-bottom: 0;
      color: ${props => props.theme.colors.body};
    }
  }

  @media ${props => props.theme.device.laptop} {
    .mi-testimonial-content {
      padding: 20px;
    }
  }

  @media ${props => props.theme.device.tablet} {
    .mi-testimonial-content {
      p {
        font-size: 1.1rem;
      }
    }
  }

  @media ${props => props.theme.device.mobileLg} {
    overflow-y: visible;
    .mi-testimonial-content {
      p {
        font-size: 1.1rem;
      }
    }
  }

  @media ${props => props.theme.device.mobileSm} {
    .mi-testimonial-content {
      padding: 20px;
    }
  }
`

const Reviews = (): ReactElement => {
  const reviews = useAirtableQuery()?.reviews?.edges

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <StyledSlider className="mi-testimonial-slider" {...sliderSettings}>
      {reviews?.map(review => (
        <Testimonial
          key={review?.node?.id}
          name={review?.node?.data?.Name}
          designation={review?.node?.data?.Designation}
          detail={review?.node?.data?.Detail}
        />
      ))}
    </StyledSlider>
  )
}

export default Reviews
