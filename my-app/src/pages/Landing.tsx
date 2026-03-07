import { useNavigate } from 'react-router-dom'

function Landing() {
    const navigate = useNavigate()

    return (
        <main>
            <section>
                <p className="landing-kicker m-10 font-bold text-5xl">Hackathon 2026</p>
                <h1 className='m-10 text-2xl'>Validate business decisions before you commit.</h1>
                <p className='m-10 text-2xl'>
                    Unsure about making changes to your business? Run simulations to see whether your
                    idea is likely to help growth, hurt margins, or create hidden risk.
                </p>
                <div className="landing-actions">
                    <button type="button" className='m-10 p-2 bg-blue-500 rounded-lg text-white' onClick={() => navigate('/simulation')}>
                        Start your simulation
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Landing