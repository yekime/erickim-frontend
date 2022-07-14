import React, { useEffect, useState } from "react";
import "./ProjectCards.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Cards(props) {
  const [projectList, setProjectList] = useState([]);
  const url = "http://127.0.0.1:8000/";
  const getAllProjectInfos = () => {
    axios.get(`${url}api/project-infos`).then(function (response) {
      setProjectList(response.data);
    });
  };
  useEffect(() => {
    getAllProjectInfos();
  }, []);
  const [fakeDemoLabel, setFakeDemoLabel] = useState("Demo");
  const onFakeDemoClick = () => {
    setFakeDemoLabel("Hehe");
  };
  // const;

  return (
    <div className="cards">
      <h1>Here are some of my projects.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {projectList.map((projectInfo) => {
              return (
                <li className="cards__item">
                  <div className="cards__item__link">
                    <figure className="cards__item__pic-wrap">
                      <img
                        className="cards__item__img"
                        alt="Travel"
                        src={"http://127.0.0.1:8000" + projectInfo.image}
                      />
                      <a
                        className="github-tab"
                        href={projectInfo.link}
                        target="_blank"
                      >
                        <i className="fab fa-github" /> GitHub
                      </a>
                      {projectInfo.demo && (
                        <a
                          className="demo-tab"
                          href={projectInfo.link}
                          target="_blank"
                        >
                          <i class="fa fa-play"></i> Demo
                        </a>
                      )}
                      {projectInfo.name === "My Website" && (
                        <Link
                          className="demo-tab"
                          to=""
                          onClick={onFakeDemoClick}
                        >
                          <i class="fa fa-play"></i> {fakeDemoLabel}
                        </Link>
                      )}
                    </figure>

                    <div className="cards__item__info">
                      <h className="cards__item__name">{projectInfo.name}</h>
                      <hr />
                      <h className="cards__item__desc">
                        {projectInfo.description}
                      </h>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
