import { useInView } from "react-intersection-observer"

function Footer() {
  const [inView, ref, entry] = useInView({ threshold: .45 })
  return (
    <footer className="flex justify-center items-center">
      <div className="w-11/12 py-5">
        This is the Footer
      </div>
    </footer>
  )
}

export default Footer
