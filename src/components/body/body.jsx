import React from 'react';
import Input from '../input/input';
import FormTextarea from '../textarea/textarea';
import FormButton from '../button/button';
import bodystyle from './body.module.css'
import { useState } from 'react';
const Body = () => {
    const [isH2, setIsH2] = useState("Welcome to the dashboard");
    return (
        <main className={bodystyle.mymain}>

            <h2>{isH2}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur totam vel aspernatur provident nostrum exercitationem facilis, odio dicta eius quibusdam ipsa dolores, ut, officia nam veritatis tenetur. Nulla accusantium eius deleniti at placeat tempore cum tenetur quas et? Earum tempore iusto molestiae. Facilis eum et debitis a rerum eveniet natus.</p>
            <form action="">
                <Input
                    id="contact-name"
                    name="name"
                    label="Name"
                    placeholder="Jane Doe"
                    autoComplete="name"
                />
                <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="you@example.com"
                    autoComplete="email"
                />
                <FormTextarea
                    id="contact-message"
                    name="message"
                    label="Message"
                    placeholder="Say hello…"
                />
                <FormButton type="button" xyz={() => { setIsH2("My React Application changed using useState") }}>Send</FormButton>
            </form>

        </main>
    );
};

export default Body;