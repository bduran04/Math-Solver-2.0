import {Button, Divider, Page} from "@geist-ui/react";
import {User} from "@geist-ui/react-icons";
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()

    return (
        <div style={{height: "76px"}}>
            <Button icon={<User />} onClick={async () => {await router.push('/login')}} >Login</Button>
            <Divider/>
        </div>

    )
}

export default Navbar;