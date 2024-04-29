import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const NotFoundPage = () => {
    return (
        <div class="text-center mt-44">
            <Helmet>
                <title>404</title>
            </Helmet>
            <h1 class="mb-4 text-6xl font-semibold text-red-500">404</h1>
            <p class="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>
            <div class="animate-bounce">
                <svg class="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
            </div>
            <p class="mt-4 text-gray-600">Let's get you back <Link to='/' class="btn btn-link text-blue-500">home</Link>.</p>
        </div>

    
    );
};



export default NotFoundPage;