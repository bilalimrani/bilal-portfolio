import Link from "next/link";
import { useContext } from "react";
import NavContext from "../context/navContext";

const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">
          I design and code beautiful things, and I love what I do.
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/profile.jpg"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
              {`I'm`} a Freelance UI/UX Designer and Developer based in London,
              England. I strives to build immersive and beautiful web
              applications through carefully crafted code and user-centric
              design.
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">First Name</span>
                    Bilal
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Last Name</span>
                    Imrani
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Birthdate</span>17 Nov
                    1993                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Nationality</span>
                    Pakistani
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Experience</span>7+ years
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Address</span>
                    Lahore, Pakistan
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Freelance</span>
                    Available
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Languages</span>
                    English, Urdu
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Phone</span>+92 315 6745522
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    bimrani816@gmail.com
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Github</span>
                    https://github.com/bilalimrani
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">LinkedIn</span>
                    linkedin.com/in/bilal-imrani-722281103/
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-12 resume-btn-container">
              <a download href='../resume-bilal.pdf' className="btn btn-resume">
                <span>
                  <i className="fa fa-download" />
                  download my cv
                </span>
                {/* <Link href='../resume-bilal.pdf' target='_blank' download={true} locale={false} >
                  
                </Link> */}
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experience
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        May 2021 - present
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        senior software engineer
                        <span className="separator" />
                        <span className="font-weight-700">Systems Limited</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <div className="text-white">
                        <span className="h6">Responsibilities :</span>
                        <ul className="workExperience-list small">
                          <li>Analyze, design and develop complex frontend systems to fit client and business
                            requirements.</li>
                          <li>Oversee frontend development, maintain and merge code from team members</li>
                          <li>Coordinate with back-end team and assist frontend team members</li>
                        </ul>
                        <span className="small font-weight-bold">Environment :</span>
                        <span className="small"> ReactJS, Redux, GraphQL, NodeJS, MongoDB, AWS Services</span>
                      </div>
                      <br />
                      <div className="text-white">
                        <span className="h6">Applications :</span>
                        <br />
                        <span className="small font-weight-bold">Application :</span>
                        <span className="small">  (TAMM, a comprehensive single point access portal for all Abu Dhabi
                          government services)
                        </span>
                        <ul className="workExperience-list small">
                          <li>Worked as a Full Stack developer from April 2021 to February 2022</li>
                          <li>Developed TAMM services and tools for Industrial Business Journey</li>
                          <li>Developed REST APIs using ExpressJS and created documentation using
                            Swagger
                          </li>
                        </ul>
                        <span className="small font-weight-bold">Environment :</span>
                        <br />
                        <span className="small">Technologies :</span>
                        <span className="small"> ExpressJS (TypeScript), Camunda, ReactJS, Git</span>
                        <br />
                        <span className="small">Development Tools :</span>
                        <span className="small"> VS Code, GitLab, Jira, Camunda Modeler and Cockpit</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        August 2018 - April 2021
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        senior software engineer
                        <span className="separator" />
                        <span className="font-weight-700">NorthBay Solutions</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <div className="text-white">
                        <span className="h6">Responsibilities :</span>
                        <ul className="workExperience-list small">
                          <li>Analyze, design and develop complex frontend systems to fit client and business
                            requirements.</li>
                          <li>Deploy front on AWS</li>
                          <li>Analyze the system for possible business solutions/bugs/upgrades</li>
                        </ul>
                        <span className="small font-weight-bold">Environment :</span>
                        <span className="small"> ReactJS, Redux, GraphQL, NodeJS, MongoDB, AWS Services</span>
                      </div>
                      <br />
                      <div className="text-white">
                        <span className="h6">Applications :</span>
                        <br />
                        <span className="small font-weight-bold">Application :</span>
                        <span className="small"> (Intelligize app used by hundreds of customers) </span>
                        <ul className="workExperience-list small">
                          <li>Integrated stripe - payment processing system</li>
                          <li>Integrated GTM for analytics and Klaviyo for tracking users’ behavior</li>
                        </ul>
                        <span className="small font-weight-bold">Environment :</span>
                        <span className="small"> ReactJS, Redux, AWS, Git</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        September 2016 - March 2018
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        senior software engineer
                        <span className="separator" />
                        <span className="font-weight-700">CrewLogix</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <div className="text-white">
                        <span className="h6">Responsibilities :</span>
                        <ul className="workExperience-list small">
                          <li>Analyze, design and develop complex frontend systems to fit client and business
                            requirements.</li>
                          <li>Manage GitHub repositories including maintaining README files</li>
                        </ul>
                        <span className="small font-weight-bold">Environment :</span>
                        <span className="small"> ReactJS, Redux, Angular, NodeJS(Express) MUI, Amazon Web Services</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Education
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2012 - 2016
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        BS Computer Science
                        <span className="separator" />
                        <span className="font-weight-700">
                          Islamia University Bahawalpur
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        diam nonummy.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2005 - 2007
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Masters Degree
                        <span className="separator" />
                        <span className="font-weight-700">
                          Paris University
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        diam nonummy.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2001 - 2005
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Bachelor Degree
                        <span className="separator" />
                        <span className="font-weight-700">
                          Moscow High School
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        diam nonummy.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">javascript/typescript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}

            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">React (Redux, NextJS)</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "85%" }}
                />
                <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">angular</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={65}
                  style={{ width: "85%" }}
                />
                <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Node JS (Nest Js, Express Js) </span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">WebPack</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={85}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">AWS (S3, EC2, CloudFront)</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "85%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">GraphQl, Apollo</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "70%" }}
                />
                <span className="percent" style={{ right: "calc(30% - 21px)" }}>
                  70%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Html, CSS</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Styled Components, Bootstrap</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Tailwind Css, Mui</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
