import "./index.css";
import Typical from 'react-typical';

const Body = () => {
    return(
        <div className="body">
            <div className="image">
                <img alt={''} src={"src/catGPT/photos/avatar.png"} width="30" height="30"/>
            </div>
            <div className="chat">
                <p>
                    <Typical steps={['Meow, meow meow meow, meow meow?']}
                    />
                </p>

            </div>
        </div>
    )
}

export default Body
