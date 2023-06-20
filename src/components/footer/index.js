import "./index.css";

const Footer = () => {
    return(
        <>
            <div className="footer">
                <div className="inputArea">
                    <input className="input" type="text" placeholder="Type your message here"/>
                    <button className="enterButton"/>
                </div>
                <div>
                    <p className="footerTextOne">
                        This site was created by
                        <a href="https://twitter.com/woutervd"> Wouter van Dijke </a>
                        (with some help from ChatGPT) |
                        <a href="#"> click here to learn more about this site </a>
                    </p>
                </div>
                <div>
                    <p className="footerTextTwo">
                        Did CatGPT make you smile? Donate to a charity for
                        <a href="https://secure.petsmartcharities.org/give/219478/#!/donation/checkout"> normal sized cats </a>
                        or
                        <a href="https://support.worldwildlife.org/site/Donation2?df_id=12391&12391.donation=form1"> really big cats </a>
                        .
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
