import EditBttn from './EditBttn';
import { NavLink } from 'react-router-dom'

function Home() {
    return(
        <div className='row'>
                <div className='logo'>
                <img  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5DceUxLcDW9teN3vo5-yR5FwT9RblHWG0XA&usqp=CAU"} alt="Logo" />;
                    
                </div>
            
            <section className='column-column1'>
                <h1>Movie Fanatics</h1>
                <div className='typing-slider'>
                    <h2 className='subheader'></h2>
                </div>
            </section>
            <section className='column column2'>               
                <NavLink exact className="button" to="/" style= { { textDecoration: 'none' }}>
                    <div className='card-card1'>
                        <h5>Home</h5>
                    </div>
                </NavLink>
                
                <NavLink exact className="button" to="/shows" style= { { textDecoration: 'none' }}>
                    <div className='card-card2'>
                        <h5>Movies and Shows</h5>
                    </div>
                </NavLink>                
                
                <NavLink exact className="button" to="/shows/new" style= { { textDecoration: 'none' }}>
                    <div className='card-card3'>
                        <h5>Add a Movie</h5>
                    </div>
                </NavLink>                
            
                <NavLink exact className="button" to="/weeksmovie" style= { { textDecoration: 'none' }}>
                        <div className='card-card4'>
                        <h5>Login</h5>
                    </div>
                </NavLink>
                
            </section>
        </div>
    );
}

export default Home;