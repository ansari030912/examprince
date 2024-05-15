"use client";
// components/Carousel.js
import {
  Box,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography
} from "@mui/material";
import moment from "moment";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5, // Move 5 items at a time
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5, // Move 5 items at a time
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // Move 2 items at a time
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // Move 1 item at a time
  },
};

const truncateText = (text, maxChars) => {
  if (text.length > maxChars) {
    return text.slice(0, maxChars) + "...";
  }
  return text;
};

const RecentUpdateExamCard = ({ data }) => {
  return (
    <Carousel
      responsive={responsive}
      customTransition="all 0.5s ease" // Added transition
      transitionDuration={500} // Added transition duration
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
    >
      {Array.isArray(data) &&
        data.map((item, index) => {
          const {
            exam_vendor_title,
            exam_title,
            exam_update_date,
            exam_code,
            exam_vendor_img,
            exam_vendor_perma,
          } = item;
          return (
            <Grid item key={exam_code} spacing={2} className="p-1">
              <Box
                sx={{
                  position: "relative",
                  "&:hover .hover-card": {
                    display: "block",
                    opacity: 1,
                    transform: "translateX(0)",
                    transition: "transform 0.3s ease, opacity 0.3s ease",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="120"
                  image={exam_vendor_img}
                  alt={exam_title}
                  sx={{
                    border: "2px solid #D1D1D1",
                    marginRight: "2px",
                  }}
                />
                <CardContent className="bg-white">
                  <Typography
                    className="hover:text-blue-500 cursor-pointer font-bold"
                    gutterBottom
                    variant="h5"
                    fontSize={20}
                    component="div"
                  >
                    {truncateText(
                      `${exam_title} Recently Updated and Certified by IT Professionals`,
                      30 // Set the maximum number of characters you want to display
                    )}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      lineHeight: "1.5rem", // Adjust line height as needed
                      height: "3rem", // Ensure this is twice the line-height for 2 lines
                    }}
                  >
                    <div className="flex justify-between">
                      <span className="font-bold text-xl">
                        {truncateText(
                          `${exam_vendor_title}`,
                          7 // Set the maximum number of characters you want to display
                        )}
                      </span>{" "}
                      <span className="font-bold text-xl text-blue-500">
                        {moment(exam_update_date).format("DD MMM YYYY")}
                      </span>
                    </div>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ display: "flex" }}
                    color="text.secondary"
                  >
                    <span className="text-xl font-bold border-2 rounded-lg px-1 bg-green-100">
                      5.0
                    </span>{" "}
                    <Rating
                      value={4.5}
                      sx={{
                        textAlign: "right",
                        paddingTop: "3px",
                        marginLeft: "2px",
                      }}
                      readOnly
                    />
                  </Typography>
                </CardContent>
                <Box
                  className="hover-card"
                  sx={{
                    display: "none",
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    width: "210px",
                    height: "auto",
                    backgroundColor: "white",
                    border: "1px solid #ccc",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    zIndex: 10,
                    padding: "8px",
                    borderRadius: "0px",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    fontSize={18}
                    gutterBottom
                    color={"blue"}
                  >
                    {exam_title} Recently Updated and Certified by IT
                    Professionals
                  </Typography>
                </Box>
              </Box>
            </Grid>
          );
        })}
    </Carousel>
  );
};

export default RecentUpdateExamCard;
