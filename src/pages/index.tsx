import react from 'react';
import {Redirect} from '@docusaurus/router';


export default function Home(): react.JSX.Element {
    return <Redirect to="docs/1.20.5/getting_started/overview"/>;
}