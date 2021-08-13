import {Card, Row, Input, Button, Grid} from "@geist-ui/react";
import { useRouter } from 'next/router'

const Home = () => {
    const router = useRouter()
    return (
        <Grid.Container justify="center">
            <Grid xs={12} md={6}>
                <Card style={{margin: '2rem'}}>
                    <Row style={{ marginBottom: '10px' }}> <Input placeholder="Username" /> </Row>
                    <Row style={{ marginBottom: '10px' }}><Input placeholder="Password" /></Row>
                    <Button onClick={async () => {await router.push('/dashboard')}}>Log In</Button>
                </Card>
            </Grid>
        </Grid.Container>
    )
}

export default Home