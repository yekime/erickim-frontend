import React, { useEffect, useState } from "react";
import "./ExperienceCards.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

function Cards(props) {
  const [experienceList, setExperienceList] = useState([]);
  const url = "http://127.0.0.1:8000/";
  const getAllProjectInfos = () => {
    axios.get(`${url}api/experiences`).then(function (response) {
      setExperienceList(response.data);
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
    experienceList.length > 0 && (
      <Element name="experiences" className="experiences">
        <h1> — My Experiences — </h1>

        <div className="experiences__container">
          <div className="experiences__wrapper">
            <ul className="experiences__items">
              {experienceList.map((experience) => {
                return (
                  <li className="experiences__item">
                    <div className="experiences__item__link">
                      <a href={experience.link} target="_blank">
                        <figure
                          className="experiences__item__pic-wrap"
                          href={experience.link}
                        >
                          <img
                            className="experiences__item__img"
                            alt="Travel"
                            src={experience.image}
                          />
                        </figure>
                      </a>
                      <div className="experiences__item__info">
                        <h className="experiences__item__name">
                          {experience.name}
                        </h>
                        <hr />
                        <h className="experiences__item__desc">
                          {experience.description}
                        </h>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Element>
    )
  );
}

export default Cards;
