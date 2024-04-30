import react from 'react';
import {Redirect} from '@docusaurus/router';

export default function Home(): react.JSX.Element {
    return <Redirect to="docs/getting_started/overview"/>;
}