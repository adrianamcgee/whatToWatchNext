import { useState } from "react";

function UserForm({setUser, onAddUser}) {
    const [formState, setFormState] = useState({
        name: "",
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
        .then((newUser) => {onAddUser(newUser); 
                setFormState ({
                    name: "",
                });
                });
            
    };

    return(
        <div className="adduser">
            <form onSubmit={handleSubmit} autoComplete="off" className="adduser">
                    <h2 className="h2Form">User Login </h2>

                    <div className="formitem">                
                        <input onChange={handleChange} type="text" id="yourname" placeholder="User Name" style={{height:25, width:250}} name="user" value={formState.name}/>
                    </div>

                    <div className="formitem">
                        <button type="submit">Login</button> 
                    </div>   
                </form>
        </div>
    );

}
export default UserForm;