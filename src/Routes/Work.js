import PortfolioItem from '../Components/PortfolioItem/PortfolioItem';
import {DataStore} from 'aws-amplify'
import {Project} from '../models'
import {useEffect, useState} from 'react'

export default function Work() {

  const [state, setState] = useState({
    projects: []
  })

  async function fetchData(){
    try{
      const gotProjects = await DataStore.query(Project)
      setState((state) => (
        {
          ...state,
          projects: gotProjects
        }
      ))
    }catch(err){
      console.log('Not getting the datas')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  let newList = [];
  state.projects.map(project => newList.push(project))
  let reversedList = newList.reverse();
  return (
    <div>
      <div className="portfolioList">
        {reversedList.map( project => (
          <PortfolioItem key={project.id} project={project}/>
        ))}
      </div>
    </div>
  )
}