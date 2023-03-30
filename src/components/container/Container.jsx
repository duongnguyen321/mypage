import React from "react";
import { GlobalContext } from "../../context/GlobalState";
function Container() {
  function Social_media(context) {
    const infomationKeys = Object.keys(context.information);
    const infomationValue = Object.values(context.information);
    return (
      <div className="social_media">
        <h1 className="content_subheading">social media</h1>
        {infomationKeys?.map((key, index) => {
          return (
            <a
              target="_blank"
              rel="noreferrer"
              className="body_18_regular info capitalize"
              href={infomationValue[index].link}
              key={index}
            >
              <span className="info_icon">
                <i className={`bi ${infomationValue[index].icon}`} />
              </span>{" "}
              {key}: {infomationValue[index].title}
            </a>
          );
        })}
      </div>
    );
  }
  function Education(context) {
    const educationValues = Object.values(context.education);
    return (
      <div className="education">
        <h5 className="title_h5">Education</h5>
        {educationValues?.map((values, index) => {
          return (
            <ul className="box_education" key={index}>
              <li className="title_education">
                <p className="body_18_medium">{values.title}</p>
              </li>
              <li className="body_education">
                <p className="body_14_regular">{values.body}</p>
              </li>
              {values?.tech2_title && (
                <li className="title_education">
                  <p className="body_18_medium">{values.tech2_title}</p>
                </li>
              )}
              {values?.tech2_body && (
                <li className="body_education">
                  <p className="body_14_regular">{values.tech2_body}</p>
                </li>
              )}
              <li className="year_education">
                <p className="body_16_medium">{values.year}</p>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
  function Skills(context) {
    return (
      <div className="skills">
        <h5 className="title_h5">Skills</h5>
        <div className="web_devoloper">
          <p className="body_18_medium skill_title">Web Developer</p>
          <span className="body_14_regular">
            {context.skills.web_devoloper}
          </span>
        </div>
        <div className="other_skills">
          <p className="body_18_medium skill_title">Other Skills</p>
          <span className="body_14_regular">{context.skills.other_skills}</span>
        </div>
      </div>
    );
  }
  function Projects(context) {
    const projectsValues = Object.values(context.projects);
    const projectsKeys = Object.keys(context.projects);
    return (
      <div className="projects">
        <h5 className="title_h5">Project</h5>
        {projectsValues?.map((values, index) => {
          return (
            <React.Fragment key={projectsKeys[index]}>
              {projectsKeys[index] !== "other_projects" && (
                <div className="project_item">
                  {values?.time && (
                    <p className="body_16_medium project_time">
                      {values?.time}
                    </p>
                  )}
                  {values?.name && (
                    <p className="body_18_medium project_name">
                      {values?.name}
                    </p>
                  )}
                  {values?.link && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="body_14_regular project_link"
                      href={values?.link}
                    >
                      Link : {values?.link}
                    </a>
                  )}
                  {values?.code && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="body_14_regular project_link"
                      href={values?.code}
                    >
                      Code : {values?.code}
                    </a>
                  )}
                  {values?.api && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="body_14_regular project_link"
                      href={values?.api}
                    >
                      Api : {values?.api}
                    </a>
                  )}
                  {values?.more && (
                    <p className="body_14_regular project_info">
                      {values?.more}
                    </p>
                  )}
                </div>
              )}
            </React.Fragment>
          );
        })}
        <div className="project_item">
          <p className="body_18_medium project_name">My Other projects</p>
          <a
            target="_blank"
            rel="noreferrer"
            className="body_14_regular project_link"
            href={context.projects.other_projects}
          >
            Github Link : {context.projects.other_projects}
          </a>
        </div>
      </div>
    );
  }
  function Hobby(context) {
    return (
      <div className="hobby">
        <h5 className="title_h5 hobby_title">Sở thích</h5>
        <div className="hobby_item">
          <i className="bi bi-music-note icon info_icon" />
          <p className="body_18_regular">{context.hobby.music}</p>
        </div>
        <div className="hobby_item">
          <i className="bi bi-book icon info_icon" />
          <p className="body_18_regular">{context.hobby.learn}</p>
        </div>
        <div className="hobby_item">
          <i className="bi bi-book icon info_icon" />
          <p className="body_18_regular">{context.hobby.read}</p>
        </div>
      </div>
    );
  }
  return (
    <GlobalContext.Consumer>
      {(context) => {
        return (
          <div className="container">
            <hr className="hr" />
            <div className="column col1">
              {Social_media(context)}
              {Education(context)}
              {Skills(context)}
            </div>
            <div className="column col2">
              {Projects(context)}
              {Hobby(context)}
            </div>
          </div>
        );
      }}
    </GlobalContext.Consumer>
  );
}

export default Container;
