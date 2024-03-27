import React from "react";
import styled from "styled-components";

import Content from "components/Content";

const A = styled.a`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.text};
  font-weight: 300;
  text-decoration: none;
  letter-spacing: -1px;
  word-spacing: -1px;
  display: block;
  width: auto;
  text-align: right;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const projectsList = [
  {
    name: "Showcase",
    link: "https://portaldev.touchcast.io/showcase/big-beautiful-showcase#/",
  },
  {
    name: "Touchcast",
    link: "https://tc.touchcast.com/",
  },
  {
    name: "Touchcast Microsoft Teams App",
    link: "https://teams.microsoft.com/l/app/770b1319-9940-412b-8828-a26b45aaec42?source=app-details-dialog",
  },
  {
    name: "Cogcache",
    link: "https://demoassets.touchcast.com/cogcache-demo/index.html",
  },
  {
    name: "Pioneer (Joystream)",
    link: "https://pioneerapp.xyz/",
  },
  {
    name: "Gearbox App",
    link: "https://app.gearbox.fi/",
  },
  {
    name: "Gearbox Trading App",
    link: "https://pure.gearbox.fi/trade",
  },
  {
    name: "Gearbox Analytics",
    link: "https://charts.gearbox.finance/overview",
  },
  {
    name: "Gearbox Landing",
    link: "https://gearbox.fi/",
  },
];

const Projects = () => {
  return (
    <Content>
      {projectsList.map((project) => (
        <A href={project.link} target="_blank" rel="noopener norefferer">
          {project.name}
        </A>
      ))}
    </Content>
  );
};

export default Projects;
