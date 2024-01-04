import "./index.css";
import { useState } from "react";

import Ratings from "../../../components/Ratings/";
import RemedyCard from "../../components/RemedyCard/";
import AddRemedyComponent from "../../components/AddRemedyComponent/";

const index = () => {
  const [remedies, setRemedies] = useState([
    {
      title: "Lavendar Scalp Treament",
      desc_snippet:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat...",
      desc: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
      coverIMGUrl: "/pg.jpg",
      rating: 1.5,
      created_by: "draky",
      steps: [
        {
          title: "Clean Scalp Throughly",
          desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        },
        {
          title: "Apply Anti-Flammtory Cream",
          desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        },
      ],
    },
    {
      title: "Aloe Vera Eczema Fix",
      desc_snippet:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat...",
      coverIMGUrl: "/pg.jpg",
      rating: 4,
      created_by: "dave",
    },
    {
      title: "Asthma Breathing Exercises",
      desc_snippet:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat...",
      coverIMGUrl: "/pg.jpg",
      rating: 3.5,
      created_by: "nikki",
    },
  ]);

  const [isDetailRemedyActive, setIsDetailRemedyActive] = useState(false);
  const [activeRemedy, setActiveRemedy] = useState(null);

  const remedyClicked = (remedyDetail) => {
    setActiveRemedy(remedyDetail);
    setIsDetailRemedyActive(true);
  };

  const [isRated, setIsRated] = useState(false);
  const Rate = () => {
    if (!isRated) {
      setActiveRemedy({
        ...activeRemedy,
        rating: activeRemedy.rating + 1,
      });
    } else {
      setActiveRemedy({
        ...activeRemedy,
        rating: activeRemedy.rating - 1,
      });
    }
    setIsRated(!isRated);
  };

  const [isAddRemedyActive, setIsAddRemedyActive] = useState(false);

  return (
    <div className="main-remedies-container">
      <div className="records-header">
        <h1>Get a quick Fix!</h1>
        <div
          className={
            !isAddRemedyActive ? "add-records-btn" : "close-add-records-btn"
          }
          onClick={() => setIsAddRemedyActive(!isAddRemedyActive)}
        >
          <i className="fa fa-plus"></i>
        </div>
      </div>

      <div className="main-remedy-cards-container">
        {remedies.map((remedy) => {
          return (
            <RemedyCard
              title={remedy.title}
              desc_snippet={remedy.desc_snippet}
              coverIMGUrl={remedy.coverIMGUrl}
              created_by={remedy.created_by}
              isClicked={[remedy, remedyClicked]}
              rating={remedy.rating}
            />
          );
        })}
      </div>
      {isDetailRemedyActive && (
        <div className="view-card-detail-container">
          <div className="active-remedy-container">
            <div
              className="rimg-container"
              style={{
                background: `url(${activeRemedy.coverIMGUrl})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div
                className="r-close-btn"
                onClick={() => {
                  setIsDetailRemedyActive(false);
                  setActiveRemedy(null);
                }}
              >
                <i className="fa fa-plus"></i>
              </div>
              <div
                className="report-btn"
                onClick={() => {
                  alert("Report Sent!!");
                }}
              >
                <h3>Report</h3>
                <i className="fa-solid fa-circle-exclamation"></i>
              </div>

              <div onClick={() => Rate()} className="rd-container">
                {activeRemedy.rating}
                <i
                  style={{ opacity: `${isRated ? "1" : "0.5"}` }}
                  className="fa fa-leaf"
                ></i>
              </div>
            </div>
            <h1>{activeRemedy.title} </h1>

            <div className="remedy-main-info-container">
              <p style={{ marginLeft: "0px" }}>{activeRemedy.desc}</p>
              {activeRemedy.steps &&
                activeRemedy.steps.map((step, indx) => {
                  return (
                    <div>
                      <h3>
                        #Step - {indx + 1} {step.title}
                      </h3>
                      <p>{step.desc}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}

      {isAddRemedyActive && (
        <div
          className="add-remedy-container"
          style={{ zIndex: `${isAddRemedyActive ? "7" : "6"}` }}
        >
          <AddRemedyComponent />
        </div>
      )}
    </div>
  );
};

export default index;