import {Row, Grid, Input, Button} from "@geist-ui/react";
import { useRouter } from 'next/router'
import {useState} from 'react'
import GenericLayout from "../layout/genericLayout";

const Home = () => {
    const [answer, setAnswer] = useState('')
    const [equation, setEquation] = useState('')
    const submitEquation = async () => {
        const wolframAnswer = await fetch('/api/wolfram', {
            method: 'POST',
            body: JSON.stringify({equation})
        })
        const a = await wolframAnswer.json()
        console.log(a)
        setAnswer(a.answer.pods[4].subpods[0].plaintext)
    }
    const router = useRouter()
    return (
        <GenericLayout>
            <Grid.Container justify="center" gap={2}>
                    <Grid xs={12} md={6} direction="column" style={{margin: '4rem'}}>
                        <Input onChange={(e) => setEquation(e.target.value)} placeholder="2x + 3 = 10" />
                    <Button onClick={() => submitEquation()}>Submit</Button>
                    {answer && <div>{answer}</div>}
                    <Button onClick={async () => {await router.push('/study-guides')}}>Study Guides</Button>
                    </Grid>
            </Grid.Container>
        </GenericLayout>
    )
}

export default Home
