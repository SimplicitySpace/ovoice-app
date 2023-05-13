import React from 'react'
import classes from './Hero.module.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>

            <section className={classes.section}>
                <nav>
                    <div>
                        <img src='https://res.cloudinary.com/dt9f36crx/image/upload/v1681585048/O-VOICE_uvew8q.png' />
                    </div>
                    {/* <div>
                        <h3>0 - Voice</h3>
                    </div> */}

                </nav>
                <main className={classes.heroMain}>
                    <Link to='/translate'>
                        <div className={classes.box}>
                            <div className={classes.layer}>

                            </div>
                            <h3>
                                Translate your video to language of your choice
                            </h3>
                        </div>
                    </Link>
                    <Link to='/voicechat'>
                        <div className={classes.box}>
                            <div className={classes.layer}>
                            </div>
                            <h3>
                                Chat with O-voice and get response in your preferred language
                            </h3>
                        </div>
                    </Link>
                    <a target='_blank' href='https://theideabased-sign-language-recognition-web-app-3oqw6a.streamlit.app'>

                        <div className={classes.box}>
                            <div className={classes.layer}>

                            </div>

                            <h3>
                                Convert Sign Language to voice
                            </h3>

                        </div>
                    </a>

                </main>
            </section>
        </>
    )
}


export default Hero