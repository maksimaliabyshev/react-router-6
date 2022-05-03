import { useParams, useNavigate, useLocation, useRoutes } from 'react-router-dom';

function Movie() {
    const params = useParams();
    console.log('params', params);
	let navigate = useNavigate();
	const location = useLocation();
	console.log('location', location);
    return (
        <>
            <h1>Movie Page</h1>
            <button className="btn" onClick={() => navigate(-1)}> Go back page</button>
            <button className="btn" onClick={() => navigate(1)}> Go forward page</button>
        </>
    );
}

export default Movie;
