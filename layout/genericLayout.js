import Navbar from "../components/Navbar";

const GenericLayout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default GenericLayout