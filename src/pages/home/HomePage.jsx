import Layout from "../../components/Layout";
import "./homePage.scss";
import BlogCard from "../../components/blogCard/Card";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { Masonry } from "@mui/lab";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Loader from "../../components/loader/Loader";
// eslint-disable-next-line react/prop-types
const HomePage = ({ isLoaded, posts, setPosts }) => {
  const navigate = useNavigate();
  if (isLoaded) {
    return <Loader />;
  }
  return (
    <Layout>
      <div className="home-page-container">
        <Box sx={{ width: "100%" }}>
          <Masonry spacing={1} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
            {/* eslint-disable-next-line react/prop-types */}
            {posts.map((item, index) => (
              <Paper key={index}>
                <Accordion>
                  <AccordionSummary>
                    <BlogCard setPosts={setPosts} item={item} />
                  </AccordionSummary>
                </Accordion>
              </Paper>
            ))}
          </Masonry>
        </Box>
        <button
          onClick={() => navigate("/createPost")}
          className="load-more-btn"
        >
          +
        </button>
      </div>
    </Layout>
  );
};

export default HomePage;