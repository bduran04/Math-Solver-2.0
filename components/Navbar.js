import {Button, Divider, Grid, Text} from "@geist-ui/react";
import {User} from "@geist-ui/react-icons";
import {useRouter} from 'next/router'

const Navbar = () => {
    const router = useRouter()

    return (
        <div >
            <Grid.Container justify="space-between" alignItems="center" style={{margin: "0 0.25rem"}}>
                <Grid>
                    <Text h2>Math Solver</Text>
                </Grid>
                <Grid>
                    <Button icon={<User/>} onClick={async () => {
                        await router.push('/login')
                    }}>Login</Button>
                </Grid>
            </Grid.Container>
                <Divider h={5} type="dark" />
        </div>

    )
}

export default Navbar;