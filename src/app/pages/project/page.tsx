"use client"
import ProjectCards from "../../../components/cards/ProjectCards"
import {Meteors} from "../../../components/ui/meteors"

const project = () => {

  return(
    <div style={{height : "1000px"}}> 
      <div className="flex justify-center items-center">
        <ProjectCards texts="Biomedical NER + Feature Extraction" href="https://compbio-8n8zx3xfw5dvye36owcgzw.streamlit.app/"/>
        <ProjectCards texts="Stock Analysis PintarSaham" href="https://stock-analysis-pintarsaham-aj5644turzjjrfornmcnv8.streamlit.app/"/>
        <ProjectCards texts="Customer Support Chatbot" href="https://customer-support-2-bmw2q4thx442oiyeixyyta.streamlit.app/"/>
      </div>
      <div className="flex justify-center items-center my-20">
        <div className="relative w-full max-w-xl flex justify-center items-center">
          <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
          <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
            <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
              Here is my project, it&apos;ll be updated soon...
            </h1>
  
            {/* <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
              Here is my project, it'll be updated soon...
            </p> */}
  
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default project;