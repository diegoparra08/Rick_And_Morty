import { AboutContainer, AutorName, TextAbout } from "./About.style";

function About() {

    return (
        <AboutContainer>
            <AutorName>Diego Parra</AutorName>
            <TextAbout>
                This project was created as a result of the knowledge acquired throughout the Henry bootcamp.
                This is my first project, and it uses all the tools seen in the classes. The project was created starting
                from the frontend with the use of React and Redux mainly, and with the Backend, 
                we created a server with the use of promises and Express.

                The project was formed by adding little things every day throughout the course of the bootcamp to practice the 
                topics reviewed in class. So, it includes different ways of doing similar processes in different files. 
                The purpose of this is to be able to practice and get familiar with them.
            </TextAbout>

            <TextAbout>
                Este proyecto fue creado con ayuda del conocimiento adquirido a lo largo del bootcamp de Henry.
                Este es mi primer proyecto y utiliza todas las herramientas vistas en las clases. El proyecto fue creado
                comenzando desde el frontend con el uso de React y Redux principalmente, y con
                el Backend creamos un servidor utilizando promesas y Express.

                El proyecto se fue formando al agregar pequeñas cosas cada día a lo largo del bootcamp
                para practicar los temas revisados en clase, por lo que incluye diferentes formas de
                realizar procesos similares en los diferentes archivos. El propósito de esto es poder
                practicar y familiarizarse con ellos.

            </TextAbout>


        </AboutContainer>
    )

}

export default About;

