import {Card, Row, Input, Button, Grid} from "@geist-ui/react";
import { useRouter } from 'next/router'
import {supabase} from "../utils/supabaseClient";
import {useState} from "react"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()
    //get data
    const register = async () => {
        console.log(username, password)
        const { data, error } = await supabase
            .from('Users')
            .insert([
                { username, password },
            ])
        console.log(data)
    }

    const login = async () => {
        sessionStorage.setItem("username", "John Doe");
        await router.push('/dashboard')
    }
    return (
        <Grid.Container justify="center">
            <Grid xs={12} md={6}>
                <Card style={{margin: '2rem'}}>
                    <Row style={{ marginBottom: '10px' }}> <Input onChange={(e) => setUsername(e.target.value)} placeholder="Username" /> </Row>
                    <Row style={{ marginBottom: '10px' }}> <Input onChange={(e) => setPassword(e.target.value)} placeholder="Password" /></Row>
                    <Button onClick={async () => await login()}>Log In</Button>
                    <Button onClick={async () => register() }> Register</Button>
                </Card>
            </Grid>
        </Grid.Container>
    )
}

export default Login