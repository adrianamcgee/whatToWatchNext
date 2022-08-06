import { useState } from "react";

function MovieForm({setShows, onAddMovie}) {
    const [formState, setFormState] = useState({
        title: "",
        poster: "",
        releaseYear: "",
        summary: "",
        genre: "",
        runtime: "",
        trailer: ""
      });

    function handleChange(event){
        setFormState((prevFormState) => { 
            return {
                ...prevFormState,
                [event.target.name]: event.target.value,
            };
        });
    }
    function handleSubmit(e){
        e.preventDefault();
        fetch ("http://localhost:9292/Shows", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
            body: JSON.stringify({...formState}),
        })
        .then (res => res.json())
        .then((newMovie) => {onAddMovie(newMovie); 
                setFormState ({
                    title: "",
                    poster: "",
                    releaseYear: "",
                    summary: "",
                    genre: "",
                    runtime: "",
                    trailer: ""
                });
                });
            
    };


    return(
        <div className="addmovie">
            <form onSubmit={handleSubmit} autoComplete="off" className="addresto">
                    <h2 className="h2Form">Add a Movie to the Collection </h2>

                    <div className="formitem">                
                        <input onChange={handleChange} type="text" id="yourname" placeholder="Movie title..." style={{height:25, width:250}} name="title" value={formState.title}/>
                    </div>

                    <div className="formitem">                
                        <input type="text" id="name" placeholder="Poster Url..." name="poster" style={{height:25, width:250}} value={formState.poster} onChange={handleChange}/>
                    </div>

                    <div className="formitem">                        
                        <input type="text" id="image" placeholder="Release year..." style={{height:25, width:250}} name="releaseYear" value={formState.releaseYear} onChange={handleChange}/>
                    </div>

                    <div className="formitem">                        
                        <input type="text" id="address" placeholder="Genre..." name="genre" style={{height:25, width:250}} value={formState.genre} onChange={handleChange}/>
                    </div>


                    <div className="formitem">                        
                        <input type="text" id="runtime" placeholder="Movie runtime..." name="runtime" style={{height:25, width:250}} value={formState.runtime} onChange={handleChange}/>
                    </div>

                    <div className="formitem">                        
                        <input type="text" id="trailer" placeholder="Movie trailer..." name="trailer"  style={{height:25, width:250}} value={formState.trailer} onChange={handleChange}/>
                    </div>
                    <div className="formitem">                        
                        <textarea id="review" name="summary" placeholder="Summary.." style={{height:40, width: 250}} value={formState.summary} onChange={handleChange}></textarea>
                    </div>
                

                    <div className="formitem">
                        <button type="submit">Add Movie</button> 
                    </div>   
                </form>
        </div>
    );

}
export default MovieForm;