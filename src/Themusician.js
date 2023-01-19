import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Footer from "./Footer";


function Themusician()
{ 
    return(
        <>
<div id="d1">
            <br></br>
            <h2>THE MUSICIAN</h2>
            <hr/>
            <p id="p1">Les Paul's impact on countless artists from Paul McCartney, Eddie Van Halen, and Slash to Bing Crosby, Tony Bennett, and Chet Atkins speaks to his status as a music legend whose virtuosic playing extended across all genres including jazz, country, R&B, and Rock.
<br/><br/>
As an artist, his breakthrough recording, “Lover” (1948), showcased a number of his studio innovations. These innovations led to hits with his wife Mary Ford including “How High The Moon” and 16 Top Ten songs between 1950 and 1954. His achievements are in stark contrast to an early letter from a teacher to his mother, which said: “Your boy, Lester, will never learn music.”
<br/><br/>
Les Paul's musical career started in the Midwest as a teen playing in country bands as Red Hot Red and in his subsequent incarnation as Rhubarb Red. Before WWII, he formed the Les Paul trio. In the 1950s and early 1960s, Les Paul had a highly successful, performance and television career with Mary Ford.
<br/><br/>
After a lifetime of recordings, his final 2005 multi-Grammy award-winning album, American Made, World Played, featured Keith Richards, Jeff Beck, Sting, and Eric Clapton. The album demonstrated his continued influence on many of the world's greatest musicians.</p>

   
    <h2>Awards</h2>
    <hr/>
    <p>Les Paul is the only person in both the National Inventors Hall of Fame and the Rock and Roll Hall of Fame. Although the list of awards Les Paul received is far-reaching, he remained ever gracious and eager to please his audience.
To see more of Les Paul's awards <Link to="/Awards">click here</Link>.</p>
    <br></br>
    
<div className="row">
    <div className="col-3">
        <img src="https://www.les-paul.com/wp-content/uploads/2021/03/Les-with-Grammy-816x1024.jpg" width="90%" height="300px" ></img>
        <br/><br/>
    <h4>The Grammys</h4>
    <p>Les Paul's Grammy wins include Country Instrumental Performance in 1977 with Chet Atkins (Chester and Lester album), Hall of Fame for “How High The Moon” in 1979, Trustees Award in 1983, Technical Award in 2002, Pop Instrumental Performance for “Caravan” in 2006, and Rock Instrumental Performance for 69 Freedom Special in 2006.</p>
    </div>

    <div className="col-3">
        <img src="https://www.les-paul.com/wp-content/uploads/2021/03/Les-With-Emmy.jpg" width="90%" height="400px" ></img>
        <br/><br/>
    <h4>The Emmys</h4>
    <p>Les Paul won a Lifetime Achievement Award Emmy in 2004.</p>
    </div>

    <div className="col-3">
        <img src="img1.png" width="90%" height="200px" ></img>
        <br/><br/>
    <p>Les accepting his Les Paul Trustees Lifetime Achievement Awards at 25th Grammys</p>
        <img src="https://th.bing.com/th/id/OIP.0EUF86or97rlTgdd1vPQdAHaFj?pid=ImgDet&rs=1" width="90%" height="200px" ></img>
        <br/><br/>
        <h4>Rock & Roll Hall Of Fame</h4>
    <p>Les Paul was inducted into the Rock and Roll Hall of Fame in 1978.</p>
    </div>

    <div className="col-3">
        <img src="https://www.les-paul.com/wp-content/uploads/2021/03/Songwriters-Hall-of-Fame-1.jpg" width="90%" height="200px" ></img>
        <br/><br/>
        <img src="https://www.les-paul.com/wp-content/uploads/2021/03/Songwriters-Hall-of-Fame-2.jpg" width="90%" height="200px" ></img>
        <br/><br/>
        <h4>Song Writers Hall Of Fame</h4>
    <p>Les Paul won the Sammy Cahn Lifetime Achievement Award in 2005.</p>
    </div>
</div>  
</div>  
  

<div id="d2">
<div id="d1">
    <br/>
<h3>From the Archives...</h3>
<hr/>
<div className="row">
    <div className="col-4">
<h4>Les Paul and Mary Ford</h4>
<ReactPlayer className="react-player" url="https://player.vimeo.com/video/556495769?h=14bb80741b"
        width="80%" height="200px" playing={false}  controls={true}
        loop={true} muted />
    </div>
    <div className="col-4">
<h4>Fat Tuesdays</h4>
<ReactPlayer className="react-player" url="https://player.vimeo.com/video/557465849?h=678b56a6e4"
        width="80%" height="200px" playing={false}  controls={true}
        loop={true} muted />
    </div>
    <div className="col-4">
<h4>The Iridium</h4>
<ReactPlayer className="react-player" url="https://player.vimeo.com/video/557463825?h=45498d9115"
        width="80%" height="200px" playing={false}  controls={true}
        loop={true} muted />
    </div>
</div>
<br/>
<div className="row">
    <div className="col-4">
<h4>Les Concert Solo</h4>
<ReactPlayer className="react-player" url="https://player.vimeo.com/video/557466636?h=f11de6220d"
        width="80%" height="200px" playing={false}  controls={true}
        loop={true} muted />
    </div>
    <div className="col-4">
<h4>The Golden Era of Musicians</h4>
<ReactPlayer className="react-player" url="https://player.vimeo.com/video/557031077?h=549d9dbf99"
        width="80%" height="200px" playing={false}  controls={true}
        loop={true} muted />
    </div>
    <div className="col-4">
<h4>The Father of Modern Music</h4>
<ReactPlayer className="react-player" url="https://player.vimeo.com/video/557461314?h=cfb564b7f6"
        width="80%" height="200px" playing={false}  controls={true}
        loop={true} muted />
    </div>
</div>

<div className="row">
    <div className="col-4">
<h4>Million Dollar Hits</h4>
<ReactPlayer className="react-player" url="https://player.vimeo.com/video/555970514?h=f380879452"
        width="80%" height="200px" playing={false}  controls={true}
        loop={true} muted />
    </div>
    <div className="col-4">
<h4>College Concert Performance</h4>
<ReactPlayer className="react-player" url="https://player.vimeo.com/video/556008742?h=52d058406b"
        width="80%" height="200px" playing={false}  controls={true}
        loop={true} muted />
    </div>
    <div className="col-4">
<h4>Magic Fingers</h4>
<ReactPlayer className="react-player" url="https://player.vimeo.com/video/555808534?h=688cbd2ad0"
        width="80%" height="200px" playing={false}  controls={true}
        loop={true} muted />
    </div>
</div>
<br></br>
</div>     

</div>
<Footer/>
    </>
    )
    }
    


export default Themusician;