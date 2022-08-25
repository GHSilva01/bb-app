import React, { useEffect, useState } from 'react'
import Page from "../components/Page"
import apiBreakingBad from "../services/api/apiBreakingBad"

export default (props) => {



    return (

        <Page titulo="Home">

            <h1 class="ml-20">About</h1>
            <p class="ml-20">Breaking Bad is an American crime drama television series created and produced by Vince Gilligan. Set and filmed in Albuquerque, New Mexico, the series follows Walter White (Bryan Cranston), an underpaid, overqualified, and dispirited high-school chemistry teacher who is struggling with a recent diagnosis of stage-three lung cancer. White turns to a life of crime and partners with a former student, Jesse Pinkman (Aaron Paul), to produce and distribute crystal meth to secure his family's financial future before he dies, while navigating the dangers of the criminal underworld. The show aired on AMC from January 20, 2008, to September 29, 2013, consisting of five seasons for a total of 62 episodes.</p>

        </Page>

    )
}