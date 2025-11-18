type Props = {
  utilisateur: {
    id: number;
    nom: string;
    age: number;
  };
};
export default function CartUtilisateur({ utilisateur }: Props) {
  return (
    <div className="flex flex-col mb-2 p-2 bg-gray-700">
      <p>
        {utilisateur.nom} - {utilisateur.age}{" "}
        {utilisateur.age > 1 ? "ans" : "ans"}{" "}
      </p>
    </div>
  );
}
