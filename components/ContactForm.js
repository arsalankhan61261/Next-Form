import formStyles from "@/app/form.module.css"

export default function Form() {
    return (
        <>
            <form className={formStyles.form}>
                <div>
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" id="fullname" placeholder="Your name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="abc@example.com" />
                </div>
                <div>
                    <label htmlFor="msg">Message</label>
                    <textarea id="msg" placeholder="Type your message here..."></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </>
    )
}