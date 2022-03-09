import React from 'react'
import {DiFirebase,DiReact, DiHtml5, DiJavascript1, DiNpm} from 'react-icons/di'
import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents'
import {List, ListContainer, ListItem, ListParagraph, ListTitle} from './TechnologiesStyles'

const Technologies = () => {
  return (
    <Section id="tech">
      <SectionDivider/>
      <br />
      <SectionTitle>Tecnologias</SectionTitle>
      <SectionText>
        Tecnologias y herramientas las cuales aprendi para poder desarrollarme como programador
      </SectionText>
      <List>
        <ListItem>
          <DiJavascript1 size="3rem"/>
          <ListContainer>
            <ListTitle>Lenguajes</ListTitle>
            <ListParagraph>
              JavaScript <br />
              HTML5 <br />
              CSS3 <br />
              SASS <br/>
              TypeScript <br />
              XML
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiReact size="3rem"/>
          <ListContainer>
            <ListTitle>Librerias</ListTitle>
            <ListParagraph>
              React.js<br/>
              React-Router-Dom <br/>
              Material-ui <br/>
              Tailwindcss<br/> 
              Bootstrap<br/>
              Ant-Design <br />
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiNpm size="3rem"/>
          <ListContainer>
            <ListTitle>Herramientas</ListTitle>
            <ListParagraph>
              Npm <br/>
              Visual Studio Code <br />
              Firebase <br/>
              Node.js <br />
              Axios <br />
              Sanity <br/>
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  )
}

export default Technologies