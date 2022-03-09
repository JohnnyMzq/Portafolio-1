import React from 'react'

import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents'
import {Box, Boxes, BoxNum, BoxText} from './AcomplishmentsStyles'

const data =[
  {number:20, text: "Open Source Projects"},
  {number:1000, text:"students",},
  {number:1000, text:"github followers",},
  {number:1000, text:"githun stars",},
];

const Acomplishments = () => {
  return (
    <Section>
      <SectionTitle>Personal Acomplishments</SectionTitle>
      <Boxes>
        {data.map((card,index)=> (
          <Box key={index}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  )
}

export default Acomplishments