import React from 'react';

export function Contact() {
  return (
    <div id="outer">
        <div id='inner'>
            <form action='/'>
                 <h1 >Contact us</h1>
                <input type="text" placeholder='Enter Your Name'></input>
                <input type="Email" placeholder='Enter Your Email'></input>
                <input type="text" placeholder='Write to us'></input>
                <button type='submit'>Send</button>
            </form>
        </div>
    </div>
  )
}

