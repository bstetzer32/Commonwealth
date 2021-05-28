import React from "react";
import { useSelector } from "react-redux";
import SearchPageBar from "./SearchPageBar";
import SearchTile from "./SearchTile";

export default function SearchPage() {
  const projects = useSelector((state) => {
    const projectList = Object.values(state.search);
    return projectList?.map((project) => (
      <SearchTile
        key={project.id}
        className="searchPage__project--scrollTile"
        project={project}
      />
    ));
  });

  return (
    <div>
      <SearchPageBar />
      <div className="searchPage__projects--container">{projects}</div>
    </div>
  );
}
