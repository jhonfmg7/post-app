import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

// Google Login
import { GoogleLogin } from 'react-google-login';

// Actions
import { LoginAction } from "../redux/actions/authActions";

export default function Home() {

    // Dispatch Instance
    const dispatch = useDispatch();

    // Router Instance
    const router = useRouter();

    const handleSuccess = (response) => {
        if (response) {
            dispatch(LoginAction(true, response));
            return router.push('/home');
        }
    }

    const handleFailure = (error) => {
        dispatch(LoginAction(false, error));
    }

    return (
        <main className="container">
            <section className="box-login">
                <article className="writer-animation">
                    <h2>Bienvenido a la mejor página.</h2>
                    <h4 className="text-gray">Para revisar los posts y el mejor contenido, inicia sesión y disfruta la experiencia</h4>
                </article>
                <GoogleLogin
                    clientId={ process.env.NEXT_PUBLIC_GOOGLE_ID }
                    buttonText="Iniciar Sesión con Google"
                    onSuccess={ handleSuccess }
                    onFailure={ handleFailure }
                    cookiePolicy={'single_host_origin'}
                    className="google-button"
                    isSignedIn={ true }
                />
            </section>
        </main>
    )
}
