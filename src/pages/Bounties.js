import { Link } from 'react-router-dom'

const Bounties =(props) => {
    return (
        <section>
            <h2>List of bounties!</h2>
            <ul>

            </ul>
            <Link to="/bounties/new">Add a New Bounty</Link>
        </section>
    );
}

export default Bounties