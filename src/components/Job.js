import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import JsxParser from 'react-jsx-parser'


const TextWrap = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-content: center;
align-items: center;
margin: auto;
width: 100%;
@media (max-width: 768px) {
  flex-direction: column;
}

`
const BottomWrap = styled.div`
width: 80%;
margin: 2%;
@media (max-width: 768px) {
  width: 95%;
  margin: 2% auto;
}
`
const TopWrap = styled.div`
width: 100%;
margin: 1.5%;
marginTop: 3%;
@media (max-width: 768px) {
  width: 90%;
  margin: 4% auto;
}

`

const Link = styled.a`
color: blue;
`

export default function Job(props){
    const [jobObj, setJobObj] = useState([])
    
    // const [job,city, id] = url.split('-')
    useEffect(() => {
        const [job,city, id] = (props.match.params.id).split('-')
          axios
            .get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${job}&full_time=true&location=${city}`)
            .then(response => {
              setJobObj(response.data[id])
            })
            .catch(error => {
              console.error('Server Error', error);
            });
       
        
      }, []);

    function noHTML(text){
      if (text){
      return text.replace(/<[^>]*>?/gm, '');
      }
    }


    return(
      <TextWrap>
        <TopWrap>
        <h1>{jobObj.title}</h1>
        <Link href={noHTML(jobObj.how_to_apply)}>{noHTML(jobObj.how_to_apply)}</Link>
        </TopWrap>
        <BottomWrap>
        <JsxParser
          jsx={jobObj.description}
          />
        </BottomWrap>
      </TextWrap>
    )
}