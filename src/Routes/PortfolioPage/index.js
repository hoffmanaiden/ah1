import './PortfolioPage.css'
import {useState, useEffect} from 'react'
import {DataStore} from 'aws-amplify'
import {Project} from '../../models'
import {useParams} from 'react-router-dom'
import {FaGithub} from 'react-icons/fa'

export default function PortfolioPage(){
  const [state, setState] = useState({
    projects: [],
    selectedProject: null
  })
  let params = useParams();

  async function fetchData(){
    try{
      const projects = await DataStore.query(Project)
      let foundProject = projects.find(el => el.id === params.workId)
      setState((state) => (
        {
          ...state,
          projects,
          selectedProject: foundProject
        }
      ))
    }catch(err){
      console.log(err)
    }
  }

  

  console.log(state.selectedProject)

  useEffect(() => {
    fetchData()
  },[])

  console.log(state.selectedProject)
  if (state.selectedProject){
    return(
      <div className="PortfolioPage">
        <div className="PortfolioTitle">{state.selectedProject.name}</div>
        <div className="portfolioDescription">{state.selectedProject.briefDescription}</div>
        <div className="content">
          <div className="button">See project</div>
          <div className="button"><FaGithub/> See repo</div>
          <br/>
          <br/>
          <img src={state.selectedProject.img1} alt={state.selectedProject.img1}/>
          <br/>
          <br/>
          <div>{state.selectedProject.fullDescription}</div>
        </div>
      </div>
    )
  } else{
    return(
      <div className="PortfolioPage">
        Loading...
      </div>
    )
  }

}