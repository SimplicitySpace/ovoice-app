import React, { useEffect, useState } from 'react'
import classes from './Voicechat.module.css'


const Voicechat = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const [transcript, setTranscript] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [response, setResponse] = useState('')
    const [typingIndex, setTypingIndex] = useState(0);
    const [languageDisplay, setlanguageDisplay] = useState(false)

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    const PAUSE_THRESHOLD = 2000; // Pause threshold in milliseconds

    useEffect(() => {
        let pauseTimer = null;
        let lastTimestamp = null;

        if (isListening) {
            recognition.start();
            recognition.onresult = event => {
                const isFinal = event.results[event.resultIndex].isFinal;
                const currentTranscript = Array.from(event.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('');

                if (isFinal) {
                    const now = new Date().getTime();
                    const elapsed = lastTimestamp ? now - lastTimestamp : 0;
                    lastTimestamp = now;

                    if (elapsed > PAUSE_THRESHOLD) {
                        setTranscript(prevTranscript => prevTranscript + ', ');
                    }

                    setTranscript(prevTranscript => prevTranscript + currentTranscript);
                }
            };
        } else {
            recognition.stop();
        }
        return () => {
            recognition.stop();
        };
    }, [isListening, recognition]);
    const toggleIsListening = () => {
        setIsListening(prevState => !prevState);
    };

    const transcriptResponse = {
        hello: 'Hi, how are you doing?',
        'Hello.': 'Hi, how are you doing?',
        hey: 'How can i help you today?',
    }

    useEffect(() => {
        const Response = () => {
            Object.keys(transcriptResponse).forEach((item) => {
                if (transcript.includes(item)) {
                    setResponse(transcriptResponse[item]);
                }
            });
        };

        if (isListening) {
            Response();
        }

        return () => {
            // any cleanup logic here
        };
    }, [isListening, transcript, transcriptResponse]);
    useEffect(() => {
        let timeout;
        if (response && typingIndex < response.length) {
            timeout = setTimeout(() => {
                setTypingIndex(prevTypingIndex => prevTypingIndex + 1);
            }, 100);
        }

        return () => clearTimeout(timeout);
    }, [typingIndex, response]);

    const typedResponse = response ? response.slice(0, typingIndex) : '';




    return (
        <section className={classes.section}>
            <nav>
                <div>
                    <img src='https://res.cloudinary.com/dt9f36crx/image/upload/v1681585048/O-VOICE_uvew8q.png' />
                </div>
                <div className={classes.settings}>
                    <svg onClick={() => setlanguageDisplay(!languageDisplay)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7F39F9" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                    {languageDisplay && <select>
                        <option value="">Select a language</option>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="ja">Japanese</option>
                    </select>}

                </div>

            </nav>

            <main>
                <div className={classes.input}>

                    <div className={classes.transcript}>
                        <textarea row='50' readOnly value={transcript} />
                    </div>
                    <div className={classes.btnBox}>
                        <button onClick={toggleIsListening}>
                            {isListening ? 'Stop Recording' : 'Start Recording'}
                        </button>
                    </div>

                </div>

                <div className={classes.reponseBox}>
                    <h2>Ovoice Response :</h2>
                    <h4 className={classes.response}>{typedResponse}</h4>
                </div>

            </main>
        </section>
    )
}

export default Voicechat