import { useRouter } from "next/router";

const TeamMember = () => {
    const router = useRouter();
    const {name} = router.query

    return <p>Ciao {name}</p>
}

export default TeamMember
