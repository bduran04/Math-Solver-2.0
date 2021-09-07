import {Row, Grid, Input, Spacer, Button, Image} from "@geist-ui/react";
import {Search} from '@geist-ui/react-icons'
import {useRouter} from 'next/router'
import {useState} from 'react'
import GenericLayout from "../layout/genericLayout";

const Home = () => {
    const [answer, setAnswer] = useState('')
    const [equation, setEquation] = useState('')
    const [image, setImage] = useState('')
    const submitEquation = async () => {
        const wolframAnswer = await fetch('/api/wolfram', {
            method: 'POST',
            body: JSON.stringify({equation})
        })
        const a = await wolframAnswer.json()
        console.log(a)
        setAnswer(a.answer.pods[4].subpods[0].plaintext)
        setImage(a.answer.pods[1].subpods[0].img.src)
    }
    const router = useRouter()
    return (
        <GenericLayout>
            <Grid.Container align="center" justify="center" direction="column" gap={2}>
                <Grid>
                    <Input onChange={(e) => setEquation(e.target.value)} placeholder="2x + 3 = 10"/>
                    <Button iconRight={<Search/>} auto padding={0} type="success"
                            onClick={() => submitEquation()}></Button>
                </Grid>
                <Grid>
                    {answer && <div>{answer}</div>}
                </Grid>
                {image && <Image src={image}/>}
                <Grid>
                    <Button onClick={async () => {
                        await router.push('/study-guides')
                    }}>Study Guides</Button>
                </Grid>
            </Grid.Container>
        </GenericLayout>
    )
}

export default Home
