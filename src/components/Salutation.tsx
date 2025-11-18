type SalutationProps = {
  nom: string;
  age: number;
};

export default function Salutation({ nom, age }: SalutationProps) {
  return (
    <p>
      bonjour {nom} vous avez{" "}
      {age >= 18 ? age + " ans vous etes majeur" : age + "ans vous etes mineur"}
    </p>
  );
}
