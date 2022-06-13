import { ReactNode } from "react";

export function Section({ children }: { children: ReactNode }) {
  return (
    <section className="w-screen min-h-[70vh] px-5 py-10 bg-cyan-400">{children}</section>
  )
}

export function Container({ children }: { children: ReactNode }) {
  return (
    <div>{children}</div>
  )
}
