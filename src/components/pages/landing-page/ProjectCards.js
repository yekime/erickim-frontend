import React, { useEffect, useState } from "react";
import "./ProjectCards.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

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
    projectList.length > 0 && (
      <Element name="projects" className="projects">
        <h1> — My Projects — </h1>

        <div className="projects__container">
          <div className="projects__wrapper">
            <ul className="projects__items">
              {projectList.flatMap((projectInfo) => {
                return projectInfo.show ? (
                  <li className="projects__item">
                    <div className="projects__item__link">
                      <figure className="projects__item__pic-wrap">
                        <img
                          className="projects__item__img"
                          alt="Travel"
                          src={projectInfo.image}
                        />
                        <div className="tabs__container">
                          {projectInfo.github && (
                            <a
                              className="github-tab"
                              href={projectInfo.github}
                              target="_blank"
                            >
                              <i className="fab fa-github" /> GitHub
                            </a>
                          )}
                          {projectInfo.demo && (
                            <a
                              className="demo-tab"
                              href={projectInfo.demo}
                              target=""
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
                          {projectInfo.link && (
                            <a
                              className="link-tab"
                              href={projectInfo.link}
                              target="_blank"
                            >
                              <i class="fa fa-external-link-alt"></i> Link
                            </a>
                          )}
                        </div>
                      </figure>

                      <div className="projects__item__info">
                        <h className="projects__item__name">
                          {projectInfo.name}
                        </h>
                        <hr />
                        <h className="projects__item__desc">
                          {projectInfo.description}
                        </h>
                      </div>
                    </div>
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        </div>
      </Element>
    )
  );
}

export default Cards;
