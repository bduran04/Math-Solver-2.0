import {Grid, Input, Button, Image, Spacer} from "@geist-ui/react";
import {Search} from '@geist-ui/react-icons'
import { supabase } from '../utils/supabaseClient'
import Login from "./login";
import Auth from '../utils/Auth'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import GenericLayout from "../layout/genericLayout";

const Home = () => {
    const [session, setSession] = useState(null)
    const [answer, setAnswer] = useState('')
    const [equation, setEquation] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        setSession(supabase.auth.session())

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

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
            <Grid.Container style={{ padding: "2rem"}} align="center" justify="center" direction="column" >
               <div>
                   {!session ? <Auth /> : <Login key={session.user.id} session={session} />}
               </div>
                <Grid>
                    <Input onChange={(e) => setEquation(e.target.value)} placeholder="Ex. 2x + 3 = 10" width="50%"/>
                    <Spacer h={.5} />
                    <Button icon={<Search/>} type="success" onClick={() => submitEquation()}>Calculate</Button>
                </Grid>
                <Grid>
                    {answer && <div> Answer: {answer}</div>}
                </Grid>
                {image && <Image.Browser>
                    <Image src={image}/>
                </Image.Browser>}
            </Grid.Container>
        </GenericLayout>
    )
}

export default Home
