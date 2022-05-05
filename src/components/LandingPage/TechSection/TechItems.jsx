import React from "react";

const TechItems = ({ data }) => {
  return (
    <>
      <div className="parallax parallax-tech_img"></div>
      <section className="tech-content" id="tech">
        <h2 id="java">-- Tech --</h2>
        {data
          .filter((item) => {
            if (item.item_type === "tech") return item;
          })
          .map((item) => (
            <div
              className="tech-horizontal tech-item--006 blob"
              id="tech-006"
              key={item.id}
            >
              <h3>{item.title}</h3>
              <a href={item.item_link} target="_blank" rel="noreferrer">
                <div className="img-container_hover">
                  <img
                    loading="lazy"
                    src={item.img}
                    alt="Ecommerce landing page"
                    className="tech_img"
                  />

                  <div className="descriptions">
                    <p>{item.description}</p>
                  </div>
                </div>
              </a>

              <div className="link-group">
                <a
                  href={item.item_link}
                  target="_blank"
                  rel="noreferrer"
                  className="second-nav"
                  id={`${item.item_link ? "" : "hidden"}`}
                >
                  Website Link
                </a>
                <a
                  href={item.github_link}
                  target="_blank"
                  rel="noreferrer"
                  className="second-nav"
                >
                  GitHub Link
                </a>
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default TechItems;
