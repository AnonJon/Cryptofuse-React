import React, { useState, useEffect } from "react";
import { Input, Form, FormGroup, Col, Container, Row } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Article from "./Article";
import CardHeader from "../../Dashboard/components/Card/CardHeader";
import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));
export default function News() {
  const classes = useStyles();
  const classes2 = useStyles2();
  const [news, setNews] = useState([]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    axios
      .get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
      .then(res => {
        setNews(res.data.Data);
      });
  }, []);
  console.log(news[0]);

  let articleSection = news.map((article, index) => {
    return (
      <Col>
        <Article key={index} article={article} index={index} />
      </Col>
    );
  });
  setTimeout(() => {
    setOpen(false);
  }, 3000);

  return (
    <div
      style={{
        marginTop: "100px"
      }}
    >
      <CardHeader color="primary" style={{ marginBottom: "25px" }}>
        <h4 className={classes.cardTitleWhite}>What's Trending</h4>
        <p className={classes.cardCategoryWhite}>News</p>
      </CardHeader>
      <Container
        fluid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Row>
          <Col>{articleSection}</Col>
        </Row>
      </Container>
      <Backdrop className={classes2.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
