import React, {Fragment} from 'react'

export default function Header(props) {
  return (
    <Fragment>
        <header className="top">
            <h1>Catch <span className="ofThe"><span className="of">of</span><span className="the">the</span></span> Day</h1>
            <h3 className="tagline">
                <span>{props.tagline}</span>
            </h3>
        </header>
    </Fragment>
  )
}
