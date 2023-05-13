import React, { useState } from 'react'
import classes from './Translate.module.css'

const Translate = () => {
    const [fileUrl, setFileUrl] = useState(null);
    const [fileType, setFileType] = useState('');
    const [display, setDisplay] = useState(false)


    const [languageDisplay, setlanguageDisplay] = useState(false)

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     const fileType = file.type;
    //     setFileType(fileType);
    //     if (fileType.startsWith('image/')) {
    //         const fileUrl = URL.createObjectURL(file);
    //         setFileUrl(fileUrl);
    //         setFileUrl(fileUrl);
    //         setTimeout(() => {
    //             setDisplay(!display);
    //         }, 200);
    //     } else if (fileType.startsWith('video/')) {
    //         const fileUrl = URL.createObjectURL(file);
    //         setFileUrl(fileUrl);
    //     } else {
    //         alert('Unsupported file type');
    //     }

    // };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const fileType = file.type;
        setFileType(fileType);

        if (fileType.startsWith('image/')) {
            const fileUrl = URL.createObjectURL(file);
            setFileUrl(fileUrl);
            setTimeout(() => {
                setDisplay(true);
            }, 2000);
        } else if (fileType.startsWith('video/')) {
            const fileUrl = URL.createObjectURL(file);
            setFileUrl(fileUrl);
            setTimeout(() => {
                setDisplay(true);
            }, 5000);
        } else {
            alert('Unsupported file type');
        }
    };






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
            <main className={classes.main}>
                <div>
                    <div className={classes.uploadBox}>

                        <h2>Please Upload Video To Translate</h2>
                        <input type='file' accept='image/*,video/*' onChange={handleFileChange} />
                        {fileUrl && (
                            <div >
                                {fileType.startsWith('image/') ? (
                                    <img className={classes.imageBox} src={fileUrl} alt='Selected file' />
                                ) : (
                                    <video src={fileUrl} controls />
                                )}
                            </div>
                        )}


                    </div>
                    {display && <div className={classes.downloadBox}>
                        {/* <label />
                        <input type='file' /> */}
                        <div>
                            <h2>Your Translated Video :</h2>
                            <video controls>
                                <source src="https://res.cloudinary.com/dt9f36crx/video/upload/v1681581944/WhatsApp_Video_2023-04-10_at_10.39.44_AM_qgnmmj.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>}
                </div>
            </main>
        </section>
    )
}

export default Translate