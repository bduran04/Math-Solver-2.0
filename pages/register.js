import {Card, Row, Input, Button, Grid, useToasts} from "@geist-ui/react";
import { useRouter } from 'next/router'
import {supabase} from "../utils/supabaseClient";
import {useState} from "react"

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const [, setToast ] = useToasts()
    const click = () => setToast({ text: 'Registration Successful!', delay: 2000, type: "success" })

    const register = async () => {
        const { data, error } = await supabase
            .from('Users')
            .insert([
                { username, password },
            ]); if (!error) {
            click();
           await router.push('/login')
        }
    }

    return (
        <Grid.Container style={{paddingTop: '4rem', justifyContent: 'center' }}>
            <Grid gap={1.5} xs={12} md={6}>
                <Card shadow style={{margin: '3rem', padding: '1rem'}}>
                    <Row style={{marginBottom: '1rem'}}> <Input onChange={(e) => setUsername(e.target.value)} placeholder="Username" width="100%" /> </Row>
                    <Row style={{marginBottom: '1rem'}}> <Input.Password onChange={(e) => setPassword(e.target.value)} placeholder="Password" width="100%"/></Row>
                    <Button type="success" width="0.5rem" mx="1rem" style={{marginBottom: '1rem'}} onClick={async () => await register()}>Register</Button>
                </Card>
            </Grid>
        </Grid.Container>
    )
}

export default Register;