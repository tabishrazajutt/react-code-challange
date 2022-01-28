/**
 * @file StreetView service which handles different methods for streetview
 */
export default {
  get: () => {
    return new Promise((resolve) =>
      setTimeout(resolve, 1500, {
        position: 7,
        template:
          "/template-files/6977424f-fa9c-40d1-bd05-6178644b1216/fish.jpg",
        dimensions: "0, 0, 0, 0",
        wide: false,
        config: {
          url: "",
          lat: 41.88,
          long: 12.49,
          fov: 90,
          heading: 75.22,
          pitch: "",
          credits: "",
        },
        hotspots: [],
        popups: [],
        id: "7cbbfb89-2cc2-47db-bc52-3a559baeaace",
        created_At: "0001-01-01T00:00:00",
        updated_At: "0001-01-01T00:00:00",
        name: null,
      })
    );
  },
  imageUrl: ({ lat, long, fov = 90, pitch = 0 }, heading = 0) => {
    return `https://maps.googleapis.com/maps/api/streetview?size=800x400&location=${lat},${long}&heading=${heading}&fov=${fov}&pitch=${pitch}&key=AIzaSyCbutVFpRUcl9QaXvkF-oXn0O6UahxRrd0`;
  },
};
