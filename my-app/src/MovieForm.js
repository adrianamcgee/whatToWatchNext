import { useState } from "react";

function MovieForm({setShows}) {
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
        const config = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
            body: JSON.stringify(formState),
        }
        fetch ("http://localhost:3000/Shows", config)
        .then (res => res.json())
        .then(show => {
            setShows((prevShowsState) => {
                return {
                    ...prevShowsState,
                    show,
                };
            });
    });
}

    return(
        <div className="addmovie">
            <form onSubmit={handleSubmit} autoComplete="off" className="addresto">
                    <h2 className="h2Form">Add a Movie to the Collection </h2>

                    <div className="formitem">                
                        <input onChange={handleChange} type="text" id="yourname" placeholder="Movie title..." style={{height:20}} name="title" value={formState.title}/>
                    </div>

                    <div className="formitem">                
                        <input type="text" id="name" placeholder="Poster Url..." name="poster" style={{height:20}} value={formState.poster} onChange={handleChange}/>
                    </div>

                    <div className="formitem">                        
                        <input type="text" id="image" placeholder="Release year..." style={{height:20}} name="releaseYear" value={formState.releaseYear} onChange={handleChange}/>
                    </div>

                    <div className="formitem">                        
                        <input type="text" id="address" placeholder="Genre..." name="genre" style={{height:20}} value={formState.genre} onChange={handleChange}/>
                    </div>


                    <div className="formitem">                        
                        <input type="text" id="runtime" placeholder="Movie runtime..." name="runtime" style={{height:20}} value={formState.runtime} onChange={handleChange}/>
                    </div>

                    <div className="formitem">                        
                        <input type="text" id="trailer" placeholder="Movie trailer..." name="trailer"  style={{height:20}} value={formState.trailer} onChange={handleChange}/>
                    </div>
                    <div className="formitem">                        
                        <textarea id="review" name="summary" placeholder="Summary.." style={{height:30, width: 140}} value={formState.summary} onChange={handleChange}></textarea>
                    </div>
                    {/* <StarRating onChange={log}/> */}

                    <div className="formitem">
                        <input type="submit" value="Add Movie" />
                    </div>   
                </form>
        </div>
    );
}

export default MovieForm;