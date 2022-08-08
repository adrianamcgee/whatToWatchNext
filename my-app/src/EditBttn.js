import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function EditBttn ({ handleEditShow }){
    const [formData, setFormData] = useState({
        title: "",
        poster: "",
        runtime: "",
        trailer: "",  
        releaseYear: "",
        genre: "",
        summary: "",
    })

    const { title, poster, runtime, trailer, releaseYear, genre, summary } = formData;

    // const { id } = useParams()
    // console.log(id)

    // useEffect(() => {
    // fetch(`http://localhost:9292/shows/${id}`)
    //     .then((res) => res.json())
    //     .then((show) => setFormData(show));
    // }, []);

    const history = useHistory()
    console.log(history)

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     const configObj = {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type" : "application/json",
    //             Accept: "application/json",
    //         },
    //         body: JSON.stringify(formData)
    //     }

        // fetch(`http://localhost:9292/shows/${id}`, configObj)
        //     .then((r) => r.json())
        //     .then((editedShow) => {
        //         handleEditShow(editedShow);
        //         history.push(`/Shows/${id}`)
        //      });
    // };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value })
    };

    
    return (
        <div> blahahahahhahaha
        <form  className="form" autoComplete="on">
            
            <h3>Edit</h3>

            <ul>
            <label htmlFor="title">Title</label>
            <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
            /> 
            
           <label htmlFor="releaseYear">Release Year</label>
            <input
            type="text"
            id="image"
            name="image"
            value={releaseYear}
            onChange={handleChange}
            />

            <label htmlFor="Poster">Poster</label>
                <input
                type="text"
                id="poster"
                name="poster"
                value={poster}
                onChange={handleChange}
            />
            <label htmlFor="summary">Summary</label>
                <input
            type="text"
            id="summary"
            name="summary"
            value={summary}
            onChange={handleChange}
            />
            <label htmlFor="genre">Genre</label>
                <input
            type="text"
            id="genre"
            name="genre"
            value={genre}
            onChange={handleChange}
            />
            <label htmlFor="runtime">Runtime</label>
                <input
            type="text"
            id="runtime"
            name="runtime"
            value={runtime}
            onChange={handleChange}
            />
             <label htmlFor="trailer">Trailer</label>
                <input
            type="text"
            id="trailer"
            name="trailer"
            value={trailer}
            onChange={handleChange}
            />
            </ul>
            <input type="submit" value="edit" placeholder="Edit Entry" />
        </form>
        </div>
    )
}

export default EditBttn;