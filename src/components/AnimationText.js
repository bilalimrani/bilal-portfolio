import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Bilal Imrani",
          "a software engineer",
          "a full-stack developer",
          "a freelancer",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
