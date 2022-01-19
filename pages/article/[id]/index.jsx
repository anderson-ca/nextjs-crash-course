import {useRouter} from 'next/router';

const article = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const {id} = router.query;

    return (
        <div>
            <h1>article root {id}</h1>
        </div>
    )
}

export default article
