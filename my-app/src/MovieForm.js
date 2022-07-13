import { useState } from "react";

function MovieForm({ onAddWatch }) {
    const [rating, setRating] = useState(0)
    
    const [formData, setFormData] = useState({
        title: "",
        poster: "",
        releaseYear: "",
        summary: "",
        genre: "",
        runtime: "",
        trailer: ""
      });

    function handleChange(e){
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:3000/Shows", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
            body: JSON.stringify({ ...formData, rating: rating}),
        })
        .then((resp) => resp.json())
        .then((newMovie) => {onAddWatch(newMovie);
        setFormData({
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

    function log(value) {
        setRating(value);
        console.log(value)
    }

    return(
        <section>         
            
            <form onSubmit={handleSubmit} autoComplete="off" className="addresto">
                    
                    <h2>Add a Movie or Show</h2>

                    <div className="formitem">                
                        <input type="text" id="yourname" placeholder="Movie title..." name="addedBy" value={formData.title} onChange={handleChange}/>
                    </div>

                    <div className="formitem">                
                        <input type="text" id="name" placeholder="Poster Url..." name="name" value={formData.poster} onChange={handleChange}/>
                    </div>

                    <div className="formitem">                        
                        <input type="text" id="image" placeholder="Release year..." name="image" value={formData.releaseYear} onChange={handleChange}/>
                    </div>

                    <div className="formitem">                        
                        <input type="text" id="address" placeholder="Genre..." name="address" value={formData.genre} onChange={handleChange}/>
                    </div>

                    <div className="formitem">                        
                        <textarea id="review" name="review" placeholder="Summary.." value={formData.summary} onChange={handleChange} style={{height:200}}></textarea>
                    </div>

                    <div className="formitem">                        
                        <input type="text" id="runtime" placeholder="Movie runtime..." name="address" value={formData.runtime} onChange={handleChange}/>
                    </div>

                    <div className="formitem">                        
                        <input type="text" id="trailer" placeholder="Movie trailer..." name="address" value={formData.trailer} onChange={handleChange}/>
                    </div>

                    <input type="hidden" id="additionalReviews" name="additionalReviews" value={formData.additionalReviews} onChange={handleChange}/>

                    {/* <StarRating onChange={log}/> */}

                    <button type="submit">Submit</button>
                </form>
        </section>
    );
}

export default MovieForm;