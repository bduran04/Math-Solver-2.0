import {Card, Row, Input, Button, Grid, Link} from "@geist-ui/react";
import { useRouter } from 'next/router'
import {supabase} from "../utils/supabaseClient";
import {useState} from "react"

//create a toast that notifies when a User has successfully registered to the database

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()
    //when the user logs in, it not only obtains data from sessionStorage but also the database
    const register = async () => {
        console.log(username, password)
        const { data, error } = await supabase
            .from('Users')
            .insert([
                { username, password },
            ])
    }

    const login = async () => {
        sessionStorage.setItem("username", username);
        await router.push('/dashboard')
    }

    return (
        <Grid.Container style={{paddingTop: '4rem', justifyContent: 'center'}}>
            <Grid gap={1.5} xs={12} md={6}>
                <Card shadow style={{margin: '3rem', padding: '1rem'}}>
                    <Row style={{marginBottom: '1rem'}}> <Input onChange={(e) => setUsername(e.target.value)} placeholder="Username" width="100%" /></Row>
                    <Row style={{marginBottom: '1rem'}}> <Input.Password onChange={(e) => setPassword(e.target.value)} placeholder="Password" width="100%"/></Row>
                    <Row style={{marginBottom: '1rem'}}> <Button type="success" onClick={async () => await login()}>Log In</Button></Row>
                    <Row style={{justifyContent: "center"}}> <Link href="/register" color>Need an account?</Link> </Row>
                </Card>
            </Grid>
        </Grid.Container>
    )
}

export default Login