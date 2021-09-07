import {Card, Row, Input, Button, Grid} from "@geist-ui/react";
import { useRouter } from 'next/router'
import {supabase} from "../utils/supabaseClient";

const Login = () => {
    const router = useRouter()
    //get data
    const register = async () => {
        const { data, error } = await supabase
            .from('Users')
            .insert([
                { name: 'Mittens', password: 'mittensisamazing' },
            ])
        console.log(data)
    }
    return (
        <Grid.Container justify="center">
            <Grid xs={12} md={6}>
                <Card style={{margin: '2rem'}}>
                    <Row style={{ marginBottom: '10px' }}> <Input placeholder="Username" /> </Row>
                    <Row style={{ marginBottom: '10px' }}><Input placeholder="Password" /></Row>
                    <Button onClick={async () => {await router.push('/dashboard')}}>Log In</Button>
                    <Button onClick={async () => register() }> Register</Button>
                </Card>
            </Grid>
        </Grid.Container>
    )
}

export default Login