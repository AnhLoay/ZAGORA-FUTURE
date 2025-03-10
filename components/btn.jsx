        import './btn.css';
import Link from 'next/link';
        function Boutoun() {
        return (
        <div className="btn-wrapper">
            <button className="btn">
                &#8592; <Link href='./createCompt'>Create a compte</Link>
            </button>
            <button className="btn">
                <Link href={'./login'}>I have already</Link> &#8594;
            </button>
        </div>
        );
        }

        export default Boutoun;