import {Button, Divider, Grid, Text} from "@geist-ui/react";
import {User} from "@geist-ui/react-icons";
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'

const Navbar = () => {
    const router = useRouter()
    const [userToken, setUserToken] = useState("");
    useEffect(() => {
        setUserToken(sessionStorage.getItem("username"))
    }, [])

    //to delete session storage use command: sessionStorage.clear();
    const logout = async () => {
        sessionStorage.clear();
        await router.push('/')
    }

    return (
        <div >
            <Grid.Container justify="space-between" alignItems="center" style={{margin: "0 0.25rem"}}>
                <Grid>
                    <Text h2>Algebra Solver</Text>
                </Grid>
                <Grid>
                    {/*{userToken}*/}
                    {!userToken && <Button style={{marginRight: '2rem'}} icon={<User/>} onClick={async () => {
                        await router.push('/login')
                    }}>Login</Button>}
                    {userToken && <Button style={{marginRight: '2rem'}}  icon={<User/>} onClick={async () => logout()
                    }>Logout</Button>}
                </Grid>
            </Grid.Container>
                <Divider h={5} />
        </div>

    )
}

export default Navbar;