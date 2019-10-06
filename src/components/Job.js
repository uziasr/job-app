import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'  

const TextWrap = styled.div`
display:flex;
justify-content:center;
align-content: center;
align-items: center;
margin: auto;
@media (max-width: 768px) {
  flex-direction: column;
}

`
const RightWrap = styled.div`
width: 60%;
margin: 3% 3% 3% 1.5%;
@media (max-width: 768px) {
  width: 90%;
  margin: 2% auto;

}
`
const LeftWrap = styled.div`
width: 35%;
margin: 3% 1.5% 3% 3%;
@media (max-width: 768px) {
  width: 90%;
  margin: 4% auto;

}

`

export default function Job(props){
    const [jobObj, setJobObj] = useState([])
    
    // const [job,city, id] = url.split('-')
    useEffect(() => {
        const [job,city, id] = (props.match.params.id).split('-')
        console.log(job, city, id)
        
            // setUrl(props.match.params.id)
            // console.log(url)
            console.log('outside axios')
          axios
            .get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${job}&full_time=true&location=${city}`)
            .then(response => {
              setJobObj(response.data[id])
            })
            .catch(error => {
              console.error('Server Error', error);
            });
       
        
      }, []);
    console.log(jobObj)
    console.log(props)
    function noHTML(text){
      if (text){
      return text.replace(/<[^>]*>?/gm, '');
      }
    }

    return(
      <TextWrap>
        <LeftWrap>
        <h1>{jobObj.title}</h1>
        <p>{noHTML(jobObj.how_to_apply)}</p>
        </LeftWrap>
        <RightWrap>
        {noHTML(jobObj.description)}
        </RightWrap>
      </TextWrap>
    )
}