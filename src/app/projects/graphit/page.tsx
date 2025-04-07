"use client"
import Image from "next/image";
import styles from "../projectpage.module.scss";

export default function Projects() {

  return (
    <div className={styles.page}>
        <h1 className={styles.title}>Graphit</h1>
        <div className={styles.content}>

            <h2 className={styles.section}>-- Motivation --</h2>
            <p>In my transition from middle to high school, I started to learn how to code. At the time, I only knew Python and HTML/CSS/JS and I was very happy with the power they gave me. I could already make my own simple applications and impress some friends and family members with that.</p>
            <p>From that time, I was also very competitive. I enjoyed to participate in academic olympiads, especially maths competitions, which were the most popular ones. I didn't really practice too much for them, though. To be honest, I didn't know anyone who did, so I never realised I should do that to perform better, but I still liked the experience.</p>
            <p>However, in high school, I first came across the Brazilian Olympiad in Informatics (OBI, from Portuguese 'Olimpíada Brasileira de Informática'). For the first time, I found this intersection between my two main interests at that moment. Of course, I decided to give it a try. Long story short, I realised I like programming competitions much more than maths, and I also did much better on these. These olympiads allowed me to meet many incredible people and visit many places, but that is a story for another day.</p>
            <p>One of the main things I got from this endeavor was some early knowledge about data structures and algorithms. From all of the algorithms and techniques I had to learn for the competitions, <a className={styles.inTextLink} href="https://en.wikipedia.org/wiki/Graph_theory">graph theory</a> was the field I liked the most. Its ideas were usually quite simple, but immensely powerful. The idea of nodes and edges could be explained to anyone in about 5 minutes, but the subsequent algorithms and applications were so broad and ubiquitous.</p>
            <p>The only downside of such a beautiful maths/computer science field is that drawing tons of circles and lines is often a tedious task -- especially when you only have 20 minutes left in a competition or when you're trying to lecture other students about this topic. You might appreciate that drawing every single edge in the correct position, while not creating a mess of intersections and roundabouts is not a pleasant activity.</p>
            <p>So, I decided to code my own digital canvas, with all the tools I would need to draw all my pretty little graphs easily. That way, I hoped I could overcome my only restriction when solving graph theory problems and maybe not look as bad when drawing graphs for a live audience.</p>

            <h2 className={styles.section}>-- The project --</h2>
            <p>For this project, my main goal was to have a quick way to draw graphs on the web using my mouse and keyboard. Additionally, in programming contests, it's usual to represent graphs as a set of strings in the form 'a b', indicating that the nodes a and b are connected by an edge. So, it was also important that this website could directly convert these set of strings into a good looking graph.</p>
            <p>I remember that when I first started studying graph theory, I struggled a bit to understand how to actually implement a graph in my code, since there are many possible ways to represent these structures. Thus, it would also be a good idea to add a way to see how the computer might store the graphs that are drawn on the canvas. Hopefully, this could help other people understanding this faster than I did.</p>
            <p>Lastly, being able to add annotations to the graph and to export it as an image file would also be very useful feature, especially during lectures or problem-solving sessions.</p>
            <p>I wanted it to be as simple as possible, so that I could have a useful product before too long. I kept it as a single-page static application, using mostly vanilla Javascript. I thought using a framework like React was too much, but also I wanted to test and hone my pure Javascript abilities.</p>
            <p>For the canvas, however, I decided to use a lightweight library I had first met as a child. <a className={styles.inTextLink} href="https://p5js.org/">p5.js</a> allows to create simple interactive drawings and animations. Back in the time, I could draw some circles and rectangles to build a house under a yellow sun. Now, I wanted to add more animations and mouse interactions that should be integrated with the Javascript data flow.</p>
            <p>I was not very creative with the name, but I was blessed by its accidental similarity to 'graphite', which in turn has a very graph-esque carbon structure. So, the choice for the carbon-like color and for the <a className={styles.inTextLink} href="https://en.wikipedia.org/wiki/Carbon#/media/File:Eight_Allotropes_of_Carbon.svg">hexagonal</a> logo was not too hard.</p>

            <h2 className={styles.section}>-- Implementation --</h2>
            <p>From my previous experience with vanilla JS web development and with p5.js, I realised that I should take extra care with code organisation to avoid a huge mess.</p>
            <p>My main approach for this was applying code modularisation and object oriented programming from the very start, even though I was not too familiar with the latter at the time. The code for the UI was completely separated from the code for the p5.js canvas. The p5.js logic was also subdivided, so that nodes and edges were implemented as classes in different files. Although it seemed exaggerated at first, I found that the coding process was much smoother because of this choice.</p>
            <p>I could write the logic for each node and edge in separate files, avoiding getting lost in lots of functions or global variables. Also, the updates and fixes were always simple, since the changes did not create side effects all over the code.</p>

            <h2 className={styles.section}>-- Result --</h2>
        </div>
        
    </div>

  );
}
