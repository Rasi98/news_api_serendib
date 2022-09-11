import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import NavBar from "./NavBar";
import HeadlineComponent from "./HeadlineComponent";
import news from "../services/news";

function HomeComponent() {
  const [headline, setHeadline] = useState([]);
  const [page, setPage] = useState(1);
  const sepRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);

  //call get news function
  const getHeadlines = async () => {
    const result = await news(page);
    setHeadline((state) => [...state, ...result]);
  };

  useEffect(() => {
    getHeadlines();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleScroll = () => {
    let offsetTop = sepRef.current.offsetTop - window.pageYOffset;
    const position = Math.round(
      ((window.innerHeight - offsetTop) * 100) / sepRef.current.clientHeight
    );
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition === 90) {
      setPage((state) => state + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPosition]);

  //render headline card list
  const headlineList = () => {
    return headline?.map((item, index) => {
      return <HeadlineComponent key={index} news={item} />;
    });
  };

  return (
    <Grid
      container
      spacing={2}
      direction={"column"}
      sx={{
        backgroundColor: "#ECF0F1",
        scrollBehavior: "smooth",
      }}
      ref={sepRef}
    >
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item container spacing={3}>
        {headlineList()}
      </Grid>
    </Grid>
  );
}

export default HomeComponent;
