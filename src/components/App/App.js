import React, { useState, useEffect } from "react";
import axios from "axios";
import "bulma/css/bulma.min.css";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import Main from "../Main/Main";
import Filters from "../Filters/Filters";
import Moment from "moment";

// API URL https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica

const App = () => {
  const [hotels, setHotels] = useState([]);
  const [hotelsFiltered, setHotelsFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const today = new Date();
  const todayFormated = Moment(today).format("YYYY-MM-DD");
  const nextMonthFormated = Moment(today).add(1, "month").format("YYYY-MM-DD");

  const [filters, setFilters] = useState({
    dateFrom: todayFormated,
    dateTo: nextMonthFormated,
    price: "select",
    country: "select",
    rooms: "select",
  });

  useEffect(() => {
    //1) add axios to request api data
    const getHotels = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica"
        );
        setHotels(response.data)
        setHotelsFiltered(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log('error', error)
      }
    };

    getHotels();
  }, []);

  const handleFilter = ({ dateFrom, dateTo, country, rooms, price }) => {
    //2) Add filter for hotels in the return
    return hotels.filter(hotel =>
      /*hotel.availabilityFrom >= dateFrom &&
      hotel.availabilityto <= dateTo &&
      hotel.country === country &&
      hotel.rooms <= rooms &&
      hotel.price === price*/
      Moment(hotel.availabilityFrom).format('YYYY-MM-DD') >= dateFrom &&
      Moment(hotel.availabilityTo).format('YYYY-MM-DD') <= dateTo &&
      hotel.country === (country !== 'select' ? country : hotel.country) &&
      parseInt(hotel.rooms) <= (rooms !== 'select' ? parseInt(rooms) : parseInt(hotel.rooms)) &&
      parseInt(hotel.price) === (price !== 'select' ? parseInt(price) : parseInt(hotel.price))
      );
  };

  const onFilterChange = (payload) => {
    //console.log("payload", payload);

    //Aplicar un filter para filtrar los hoteles
    const hotelsFilt = handleFilter(payload);

    setFilters((prevState) => ({
      ...prevState,
      ...payload,
    }));

    setHotelsFiltered(hotelsFilt);
  };

  return (
    <>
      <Filters filters={filters} onFilterChange={onFilterChange} />
      <Main isLoading={isLoading} hotels={hotelsFiltered} />
    </>
  );
};

export default App;
