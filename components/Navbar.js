import {Button, Divider, Grid, Text} from "@geist-ui/react";
import {User} from "@geist-ui/react-icons";
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import {supabase} from "../utils/supabaseClient";

//create a route where if logged in, hide the logout button, if logged in, show the button

const Navbar = () => {
    const router = useRouter()
    const [userToken, setUserToken] = useState("");
    useEffect(() => {
        setUserToken(sessionStorage.getItem("username"))
    }, [])
    console.log(userToken)

    //be sure to delete sessionStorage

    return (
        <div >
            <Grid.Container justify="space-between" alignItems="center" style={{margin: "0 0.25rem"}}>
                <Grid>
                    <Text h2>Math Solver</Text>
                </Grid>
                <Grid>
                    {userToken}
                    {!userToken && <Button icon={<User/>} onClick={async () => {
                        await router.push('/login')
                    }}>Login</Button>}
                    {userToken && <Button icon={<User/>} onClick={async () => {
                        await router.push('/')
                    }}>Logout</Button>}
                </Grid>
            </Grid.Container>
                <Divider h={5} type="dark" />
        </div>

    )
}

export default Navbar;