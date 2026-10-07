import { useState, useEffect } from 'react'
import axios from 'axios'


const About = props => {
  const [about, setAbout] = useState({})

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_HOSTNAME}/about`)
      .then(response => {
        setAbout(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <h1>About Us</h1>

      <h2>{about.name}</h2>

      {about.paragraphs &&
        about.paragraphs.map(paragraph => (
          <p>{paragraph}</p>
        ))}

      <img
        src={about.imageUrl}
        alt="Eline Son"
        width="300"
      />
    </>
  )
}

export default About