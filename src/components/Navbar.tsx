import { Container } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-center md:justify-between items-center p-4">
      <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
        <Container className="mr-2" />
        <span className="text-accent">T</span>.Mushamuka
      </a>
      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#" className="btn btn-sm btn-ghost font-bold">
            Accuiel
          </a>
        </li>
        <li>
          <a href="#" className="btn btn-sm btn-ghost font-bold">
            A propos
          </a>
        </li>
        <li>
          <a href="#" className="btn btn-sm btn-ghost font-bold">
            Experience
          </a>
        </li>
        <li>
          <a href="#" className="btn btn-sm btn-ghost font-bold">
            Projets
          </a>
        </li>
      </ul>
    </div>
  );
}
