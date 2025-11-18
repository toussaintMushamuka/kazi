import type { ReactNode } from "react";

type ContenantProps = {
  children: ReactNode;
};

export default function ContactCard({ children }: ContenantProps) {
  return (
    <div className="rounded-box border border-base-content/5 bg-base-100 w-1/2">
      {children}
    </div>
  );
}
