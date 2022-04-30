import Button from "./Button";

const Greetings = ({ name, color }) => {
  //console.log(language);

  const greetingStyle = {
    border: `2px solid ${color}`,
    height: '10rem',
    margin: '2rem',
  };
  return (
    <div style={greetingStyle}>
      <p>Hello Ironhackers, Lets Learn {name}</p>
      <Button name={name} />
    </div>
  );
};
export default Greetings;
// 61dafb
//Yellow
//Green
