import React, { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "./Card";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Navigation } from "swiper/modules";
import { fontFamily, fontWeight } from "@mui/system";

const Cardlist = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [isTopCollapsed, setIsTopCollapsed] = useState(false);
  const [isNewCollapsed, setIsNewCollapsed] = useState(false);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([{ key: "All", label: "All" }]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const res = await axios.get(
          "https://qtify-backend-labs.crio.do/albums/top"
        );
        setTopAlbums(res.data);
      } catch (error) {
        console.error("Error fetching top albums:", error);
      }
    };
    fetchTopAlbums();
  }, []);

  useEffect(() => {
    const fetchNewAlbums = async () => {
      try {
        const res = await axios.get(
          "https://qtify-backend-labs.crio.do/albums/new"
        );
        setNewAlbums(res.data);
      } catch (error) {
        console.error("Error fetching new albums:", error);
      }
    };
    fetchNewAlbums();
  }, []);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get("https://qtify-backend-labs.crio.do/songs");
        setSongs(res.data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };
    fetchSongs();
  }, []);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await axios.get(
          "https://qtify-backend-labs.crio.do/genres"
        );
        if (res.data && Array.isArray(res.data.data)) {
          setGenres([{ key: "All", label: "All" }, ...res.data.data]);
        } else {
          console.error("Genres API returned invalid data format:", res.data);
        }
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
    fetchGenres();
  }, []);

  const filteredSongs =
    selectedGenre === "All"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  const renderSwiper = (albumData) => (
    <Swiper
      style={{ paddingBottom: "20px" }}
      spaceBetween={5}
      slidesPerView={2}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
    >
      {albumData.map((ele) => (
        <SwiperSlide key={ele.id}>
          <AlbumCard product={ele} />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const renderGrid = (albumData) => (
    <Grid container spacing={5}>
      {albumData.map((ele) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={ele.id}>
          <AlbumCard product={ele} />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "white",
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "100%",
            letterSpacing: "0px",
          }}
        >
          Top Albums
        </p>
        <Button
          style={{ color: " rgba(52, 201, 75, 1)" }}
          onClick={() => setIsTopCollapsed(!isTopCollapsed)}
        >
          {!isTopCollapsed ? "Show All" : "Collapse"}
        </Button>
      </div>
      {!isTopCollapsed ? renderSwiper(topAlbums) : renderGrid(topAlbums)}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <p
          style={{
            color: "white",
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "100%",
            letterSpacing: "0px",
          }}
        >
          New Albums
        </p>
        <Button
          style={{ color: " rgba(52, 201, 75, 1)" }}
          onClick={() => setIsNewCollapsed(!isNewCollapsed)}
        >
          {!isNewCollapsed ? "Show All" : "Collapse"}
        </Button>
      </div>
      {!isNewCollapsed ? renderSwiper(newAlbums) : renderGrid(newAlbums)}

      <div style={{ borderBlock: "1px solid rgba(52, 201, 75, 1)" }}>
        <p
          style={{
            color: "white",
            textAlign: "left",
            
            paddingTop: "1px",
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "100%",
            letterSpacing: "0px",
          
          }}
        >
          Songs
        </p>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={selectedGenre}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={(event, newValue) => setSelectedGenre(newValue)}
                aria-label="Genre Tabs"
                sx={{
                  "& .MuiTab-root": {
                    color: "white",
                    textTransform: "none",
                    fontWeight: "normal",
                    outline: "none",
                  },
                  "& .Mui-selected": {
                    color: "white",
                    fontWeight: "bold",
                  },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "rgba(52, 201, 75, 1)",
                  },
                  "& .MuiTouchRipple-root": { display: "none" },
                }}
              >
                {genres.map((genre) => (
                  <Tab key={genre.key} label={genre.label} value={genre.key} />
                ))}
              </TabList>
            </Box>

            {genres.map((genre) => (
              <TabPanel key={genre.key} value={genre.key}>
                {filteredSongs.length > 0 ? (
                  renderSwiper(filteredSongs)
                ) : (
                  <p style={{ color: "white" }}>No songs available</p>
                )}
              </TabPanel>
            ))}
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default Cardlist;
