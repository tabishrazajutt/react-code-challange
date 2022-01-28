import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StreetViewService from "../services/StreetViewService";

/**
 * @description Responsive breakpoints for Carousel
 */
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

/**
 * @description Component that fetchs streetview details from api (demo api) and
 * renders a carousel with 4 headings
 * @returns {HTMLElement}
 */
const StreetView = () => {
  const [isFetchingStreetView, setIsFetchingStreetView] = useState(false);
  const [streetView, setStreetView] = useState(null);
  const [streetViewImages, setStreetViewImages] = useState([]);

  useEffect(() => {
    _fetchStreetView();
  }, []);

  /**
   * @description Function that fetchs streetview details from api (demo api)
   */
  const _fetchStreetView = async () => {
    try {
      setIsFetchingStreetView(true);
      const response = await StreetViewService.get();
      setStreetView(response.config);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetchingStreetView(false);
    }
  };

  useEffect(() => {
    if (streetView) {
      /**
       * @description Creating Street View Images Urls with 4 headings
       */
      setStreetViewImages(
        [0, 90, 180, 270].map((heading) =>
          StreetViewService.imageUrl(streetView, heading)
        )
      );
    }
  }, [streetView]);

  return (
    <div className="card mt-5">
      <div className="card-body">
        {isFetchingStreetView ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border m-5" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <h5 className="card-title">Street View</h5>
            <hr />
            {streetViewImages?.length ? (
              <Carousel
                draggable={true}
                responsive={responsive}
                infinite={true}
                keyBoardControl={true}
              >
                {streetViewImages.map((img, idx) => {
                  return (
                    <div key={idx}>
                      <img width="100%" src={img} className="img-thumbnail" />
                    </div>
                  );
                })}
              </Carousel>
            ) : (
              <p className="text-center text-muted p-5">No Images</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default StreetView;
