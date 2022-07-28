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
    const subscription = DataStore.observe(Project).subscribe(() => {
      fetchData()
    })
    return () => subscription.unsubscribe()
  },[])

  console.log(state.selectedProject)
  if (state.selectedProject){
    return(
      <div className="PortfolioPage">
        <div className="PortfolioTitle">{state.selectedProject.name}</div>
        <div className="portfolioDescription">{state.selectedProject.briefDescription}</div>
        <div className="content">
          {state.selectedProject.projectLink ? <div className="button"><a target="_blank" href={state.selectedProject.projectLink}>See project</a></div> : null }
          <div className="button"><a target="_blank" href={state.selectedProject.repo}><FaGithub/> See repo</a></div>
          <br/>
          <br/>
          {state.selectedProject.img1 ? <a href={state.selectedProject.img1}><img src={state.selectedProject.img1} alt={state.selectedProject.img1}/><br/><br/></a> : null }
          {state.selectedProject.img2 ? <a href={state.selectedProject.img2}><img src={state.selectedProject.img2} alt={state.selectedProject.img2}/><br/><br/></a> : null }
          {state.selectedProject.img3 ? <a href={state.selectedProject.img3}><img src={state.selectedProject.img3} alt={state.selectedProject.img3}/><br/><br/></a> : null }
          {state.selectedProject.img4 ? <a href={state.selectedProject.img4}><img src={state.selectedProject.img4} alt={state.selectedProject.img4}/><br/><br/></a> : null }
          {state.selectedProject.fullDescription ? <div className="text-box">{state.selectedProject.fullDescription}</div> : null}
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