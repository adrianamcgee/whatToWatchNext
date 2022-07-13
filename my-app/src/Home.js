
import {NavLink} from 'react-router-dom'

function Home() {
    return(
        <div className='row'>
            <section className='column column1'>
                <h1>Movie Fanatics</h1>
                <div className='typing-slider'>
                    <p className='subheader'>Need Help Finding A Movie To Watch?</p>
                </div>
            </section>
            <section className='column column2'>               
                <NavLink exact className="button" to="/" style= { { textDecoration: 'none' }}>
                    <div className='card card1'>
                        <h5>Home</h5>
                    </div>
                </NavLink>
                
                <NavLink exact className="button" to="/shows" style= { { textDecoration: 'none' }}>
                    <div className='card card2'>
                        <h5>Movies and Shows</h5>
                    </div>
                </NavLink>                
                
                <NavLink exact className="button" to="/shows/new" style= { { textDecoration: 'none' }}>
                    <div className='card card3'>
                        <h5>Add a Movie or Show</h5>
                    </div>
                </NavLink>                
            
                <NavLink exact className="button" to="/weeksmovie" style= { { textDecoration: 'none' }}>
                        <div className='card card4'>
                        <h5>Movie of the Week</h5>
                    </div>
                </NavLink>
                
            </section>
        </div>
    );
}

export default Home;