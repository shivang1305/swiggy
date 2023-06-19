import { useState } from "react";

const Section = ({ name, description, isVisible, setIsVisible }) => {
  return (
    <div className="mt-4">
      <div className="border-black border-solid border-2">
        <h2 className="font-bold text-xl">{name}</h2>
        {isVisible ? (
          <div>
            <button onClick={() => setIsVisible(false)}>Hide</button>
            <p>{description}</p>
          </div>
        ) : (
          <button onClick={() => setIsVisible(true)}>Show</button>
        )}
      </div>
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div>
      <h1 className="font-bold text-2xl">Instamart</h1>
      <Section
        name={"About"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => {
          if (visibleSection === "about") {
            setVisibleSection("");
          } else {
            setVisibleSection("about");
          }
        }}
      />
      <Section
        name={"Team"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => {
          if (visibleSection === "team") {
            setVisibleSection("");
          } else {
            setVisibleSection("team");
          }
        }}
      />
      <Section
        name={"Careers"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
        }
        isVisible={visibleSection === "careers"}
        setIsVisible={() => {
          if (visibleSection === "careers") {
            setVisibleSection("");
          } else {
            setVisibleSection("careers");
          }
        }}
      />
    </div>
  );
};

export default Instamart;
