import './Contacts.css'

const Contacts = () =>{
    return(
        <>
            <div class="mainblock5">
                <div class="mainblock5inside">
                    <div class="block5title">
                        <h1>
                            Contact us
                        </h1>
                        
                        <div class="inputs">
                            <input type="text" value="Your name" />
                            <input type="text" value="Your e-mail" />
                            <input type="text" value="Your phone" />
                        </div>
                        <textarea >Your message</textarea>
                        <a href="">SEND</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts;