import Link from "next/link"

const Timeline = ({ userName }) => {
    return (
        <>
            <h1>This is de timeline of {userName}</h1>  
            <Link href='/'>
                <a>
                  Go Home
                </a>
            </Link>

        <style jsx>{`
            h1 {
                font-size: 36px;
                color: red
            }
        `}</style>
        </>
    )
}

Timeline.getInitialProps = () => {
    return fetch('http://localhost:3000/api/hello')
        .then(res => res.json())
}

export default Timeline
