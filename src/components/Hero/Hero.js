import React from 'react'

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import {LeftSection} from './HeroStyles'

const Hero = () => (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle>Bienvenido a <br/>
        Mi Portafolio Personal
        </SectionTitle>
        <SectionText>
          Mi proposito general es subir proyectos personales, mejorar mis habilidades personales y lograr desarrollarme como programador en una empresa.
        </SectionText>
        <Button onClick={()=> window.location = 'https://github.com/JohnnyMzq'}>Leer Mas.</Button>
      </LeftSection>
    </Section>
  )


export default Hero