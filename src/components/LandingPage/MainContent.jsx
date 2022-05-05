import React from "react";

const MainContent = ({ logos }) => {
  return (
    <main className="main-content">
      <div className="horizontal-scale_main-content">
        <img
          loading="lazy"
          src="./img/Author/IMG_9433.png"
          alt="Harold"
          className="home-port_img"
        />
        <div className="content-container_grid">
          <h2>Hello World!</h2>
          <p>
            I was born in Mexico, raised in the United States. I have always
            loved gaming, I played Little Big Planet, The God of war series,
            Call of Duty, Skyrim, Minecraft etc... And that love for gaming
            eventually grew into a curiousity for gaming mechanics. around 2016
            I started to really research how games were made and I started
            learning Java to make Minecraft Mods; although it wasn't until 2018
            when I made my first mod, all it did was add new tools and some farm
            items and blocks. From this I decided I wanted to do more, so I went
            into a coding bootcamp and I knew I had found my passion for
            programming.
          </p>
          <div className="logo-container">
            {logos
              .filter((item) => {
                if (item.item_type === "logos") return item;
              })
              .map((item) => (
                <div key={item.id}>
                  <img
                    src={item.img}
                    alt="tech logo"
                    className="main-logo_section"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
