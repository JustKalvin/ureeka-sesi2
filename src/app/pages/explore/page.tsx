'use client';

import { ContainerScroll } from "../../../components/ui/container-scroll-animation";
import BackButon from "../../../components/button/BackButton"

const explore = () => {

  return(
    <div>
      <BackButon/>
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl font-bold text-black">
            Scroll to Reveal Card
          </h1>
        }
      >
        <div className="flex flex-col items-center justify-center h-full text-white text-xl">
          <p>This is a 3D Card</p>
          <p>Uhh, IDK what to write, hehe</p>
        </div>
      </ContainerScroll>
    </div>
  )
}
export default explore;