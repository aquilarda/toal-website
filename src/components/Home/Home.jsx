import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import Image from "../Image/Image";
import logo from "../../assets/logo.jpg";

const API_URL = "https://verticalbackend.pythonanywhere.com/api/";

export default function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(API_URL + "categories/").then((res) => setCategories(res.data));
  }, []);

  return (
    <div>
      <div>
        <div>
          <Image src={logo} alt="jumbotron-background-image" />
        </div>
        <div className="mt-5">
          <h1 className="flex-center">Podcast Kategorileri</h1>
          <hr />
        </div>
      </div>
      <div>
        <Card className="podcast-card" bg="dark">
          <Card.Body>
            <Card.Title className="podcast-card--title">Tümü</Card.Title>
            <Card.Text className="podcast-card--text">
              Tüm podcastlerimizi dinleyin.
            </Card.Text>
            <Button href="/podcasts">Git</Button>
          </Card.Body>
        </Card>
        {categories.map((category, index) => {
          return (
            <Card className="podcast-card" bg="dark" key={index}>
              <Card.Body>
                <Card.Title className="podcast-card--title">
                  {category.name}
                </Card.Title>
                <Card.Text className="podcast-card--text">
                  {category.name} ile ilgili podcastleri dinleyin.
                </Card.Text>
                <Button href={`/podcasts/${category.name.toLowerCase()}`}>
                  Git
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <div className="clearfix"></div>
    </div>
  );
}
