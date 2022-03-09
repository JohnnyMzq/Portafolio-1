import React from 'react'
import Link from 'next/link'
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import {DiCssdeck} from 'react-icons/di'

import {Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles'

const Header = () => {
  return (
    <Container>
        <Div1>
            <Link href="/">
            <a style={{display:"flex", alignItems: "center", color: "white", marginBottom:"20px"}}>
                <DiCssdeck size="3rem" /> <Span>Portafolio</Span>
            </a>
            </Link>
        </Div1>
        <Div2>
            <li>
                <Link href="#projects">
                   <NavLink>Proyectos</NavLink>         
                </Link>
            </li>
            <li>
                <Link href="#tech">
                   <NavLink>Tecnologias</NavLink>         
                </Link>
            </li>
            <li>
                <Link href="#about">
                   <NavLink>Acerca</NavLink>         
                </Link>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href="https://github.com/JohnnyMzq">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/jonathan-lucero-885baa229/">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/johnnymzq_/?hl=es-la">
                <AiFillInstagram size="3rem" />
            </SocialIcons>
        </Div3>
    </Container>
  )
}

export default Header