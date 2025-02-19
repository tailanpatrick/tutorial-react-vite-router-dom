import { useLocation } from "react-router-dom";

export const About = () => {
  const { state } = useLocation()
  return (<>
    <h1>Sobre</h1>
    <p>{state}</p>
  </>
  );
}

