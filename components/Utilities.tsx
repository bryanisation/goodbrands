import { ReactNode } from "react";

export function Section({ children, styles }: { children: ReactNode, styles?: string | [string] }) {
  return (
    <section className={`w-screen min-h-[70vh] px-5 py-10 bg-cyan-400 ${styles}`}>{children}</section>
  )
}

export function Container({ children }: { children: ReactNode }) {
  return (
    <div>{children}</div>
  )
}
