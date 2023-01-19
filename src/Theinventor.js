import React from "react";
import ReactPlayer from "react-player";
import Footer from "./Footer";


function Theinventor()
{   return(
    <>
    <div id="d1">
        <br></br>
        <h2>THE INVENTOR</h2>
        <p id="p1">Acclaimed as the “Godfather of the Modern Recording Studio,” Les Paul is known for numerous inventions and innovations that changed the way musicians play music, the way engineers record music and the way fans hear music. Arguably, Les Paul is the most important individual in the history of the modern music industry. His influence is profound, having been a pioneer in the development of the solid body electric guitar as well as numerous recording techniques including multi-track recording, digital delay, reverb, and more.
<br></br><br></br>
At 12 years old, Les used a wire hanger to create a harmonica holder that could change keys. As a teen in the 1920s, he experimented with various designs for a solid-body electric guitar. He strung a two-foot piece of rail from a train track like a guitar. Eventually, he created the first playable solid body electric guitar using a solid 4” x 4” piece of wood, that he affectionately dubbed “The Log”. That invention led to the world-renowned Les Paul solid-body electric guitar. This iconic instrument changed the face of modern music.
<br></br><br></br>
According to <a href="https://www.guitarworld.com/artists/top-10-les-paul-moments">Guitar World magazine</a>, “Les Paul’s influence on the development of the guitar is incalculable. To say Les Paul was an innovator would be the greatest of understatements. Although we might take his inventions and ideas for granted, his influence on the development of music – and the way it is recorded – is immense. He saw the technological limitations of his day not as an impediment, but as a source of motivation to think outside the box and find his own solution.”
<br></br><br></br>
Celebrated record executive and producer, Don Was, adds, “(Les Paul) was really trying to make sure that everyone had a unique voice and he melded the technology with the music, I think really for the first time. He made the technology a musical instrument. I think we’re all deeply in his debt…”</p>

<h2>Les Paul</h2>
<ReactPlayer url="https://youtu.be/RIV--WfCGMg"
        width="90%" height="500px"    playing={true}  controls={true}
        loop={true} muted autoplay/>
<br/><br/>
</div>
<Footer/>
</>
)
}

export default Theinventor;