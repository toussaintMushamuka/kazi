import { useState } from "react";

type Props = {};

export default function Compteur({}: Props) {
  const [compteur, setCompteur] = useState(0);

  const handeleClick = () => {
    setCompteur(compteur + 1);
  };
  return (
    <div>
      <h2>Nombre de fois: {compteur}</h2>
      <button onClick={handeleClick} className="btn btn-primary">
        incrementer
      </button>
    </div>
  );
}
