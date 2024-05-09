import './index.css';
import { useEffect } from 'react';

export default function Footer() {

    useEffect(() => {
        getYear();
    }, []);

    const getYear = () => {
        document.querySelector('#year').innerText = (new Date().getFullYear());
    }

    return (
        <div className="row mt-5 mx-0">
            <footer>
                <strong><p className="text-center text-body-secondary">© <span id="year"></span>. Designed by <a  href="https://github.com/jonas-holanda" target="_blank" >Jonas Holanda.</a> All Rights Reserved.</p></strong>
            </footer>
        </div>    
    );
}