import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ModifiedBadge from "../ModifiedBadge";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import Preloader from "../Preloader/Preloder";

const API = process.env.REACT_APP_API;

export default function DisplayPodcasts(props) {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(false);
  let { category } = useParams();

  if (props.endpoint) {
    var endpoint = props.endpoint;
  } else {
    category =
      category.charAt(0).replace("i", "İ").toLocaleUpperCase("tr-TR") +
      category.slice(1); // Capitalize the category
  }

  useEffect(() => {
    const fetchData = async () => {
      if (endpoint) {
        await axios.get(API + endpoint).then((res) => setPodcasts(res.data));
      } else {
        await axios
          .get(API + `podcasts/?category=${category}`)
          .then((res) => setPodcasts(res.data));
      }
      setLoading(true);
    };
    fetchData();
  }, [category, endpoint]);

  if (!loading) {
    return <Preloader />;
  } else {
    return (
      <>
        <div>
          {podcasts.map((podcast, index) => {
            return (
              <Card className="podcast-card mt-5" bg="dark" key={index}>
                <Card.Body>
                  <Card.Title className="podcast-card--title">
                    {podcast.title}
                  </Card.Title>
                  <Card.Subtitle className="mb-2">
                    {podcast.categories.map((category, index) => {
                      return (
                        <ModifiedBadge
                          tags={category.name}
                          key={index}
                          bg="secondary"
                        />
                      );
                    })}
                  </Card.Subtitle>
                  <Card.Text className="podcast-card--text">
                    {podcast.description}
                  </Card.Text>

                  <Button
                    href={podcast.podcast_platform_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Bu podcasti dinleyin.
                  </Button>
                </Card.Body>
                <Card.Footer>
                  {podcast.authors.map((author, index) => {
                    return (
                      <ModifiedBadge
                        tags={"by " + author.name}
                        key={index}
                        bg="danger"
                      />
                    );
                  })}
                </Card.Footer>
              </Card>
            );
          })}
        </div>
        <div className="clearfix"></div>
      </>
    );
  }
}
