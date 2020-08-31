import style from "./Home.less";
import {BaseLink, Panel, Section} from "bluelib";
import Link from "../components/Link";
import MenuList from "../components/MenuList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAward, faMedal} from "@fortawesome/free-solid-svg-icons";

export default function (props) {
    return (
        <div>
            <Section>
                <Panel title={"About me"}>
                    <p>
                        I am <b>Stefano Pigozzi</b>, a Computer Science student at <Link href={"http://unimore.it/"}>Unimore</Link>!
                    </p>
                    <p>
                        In my free time, I enjoy <b>programming</b>, <b>playing videogames</b> and eating <b>gelato</b>!
                    </p>
                </Panel>
            </Section>
            <Section>
                <Panel title={"My projects"}>
                    <MenuList>
                        <li><Link href={"https://github.com/Steffo99/greed"}>greed</Link><small>, a customizable, multilanguage Telegram shop bot with Payments support</small></li>
                        <li><Link href={"https://github.com/Steffo99/royalnet"}>royalnet</Link><small>, a multipurpose bot and web framework for internet communities</small></li>
                        <li><Link href={"https://github.com/Steffo99/lihzahrd"}>lihzahrd</Link> <small>and</small> <Link href={"https://github.com/Steffo99/flyingsnake"}>flyingsnake</Link><small>, Terraria utilities for Python</small></li>
                        <li><Link href={"https://github.com/Steffo99/bluelib"}>bluelib</Link><small>, the library my websites are based on</small></li>
                        <li><small>and many more on <Link href={"https://github.com/Steffo99"}>my GitHub profile</Link>!</small></li>
                    </MenuList>
                </Panel>
                <Panel title={"My accounts"}>
                    <MenuList>
                        <li><Link rel={"me"} href={"https://github.com/Steffo99"}>Steffo99</Link></li>
                        <li><Link rel={"me"} href={"mailto:ste.pigozzi@gmail.com"}>ste.pigozzi@gmail.com</Link></li>
                        <li><Link rel={"me"} href={"https://t.me/Steffo"}>@Steffo</Link></li>
                        <li><Link rel={"me"} href={"https://discordapp.com/channels/@me/77703771181817856/"}>Steffo#4036</Link></li>
                        <li><Link rel={"me"} href={"https://steamcommunity.com/id/steffo1999/"}>Steffo</Link></li>
                    </MenuList>
                </Panel>
            </Section>
            <Section>
                <Panel title={"My websites"}>
                    <MenuList>
                        <li><Link href={"https://uni.steffo.eu"}>Appuntiweb</Link><small>, where I publish my university notes</small></li>
                        <li><Link href={"https://ryg.steffo.eu"}>RYGweb</Link><small>, the website of a community I manage</small></li>
                    </MenuList>
                </Panel>
                <Panel title={"My achievements"}>
                    <MenuList>
                        <li><BaseLink href={"https://ldjam.com/events/ludum-dare/46/keep-everything-alive-1"}><FontAwesomeIcon icon={faAward}/> 9th place</BaseLink><small> in the <i>Theme</i> category at the</small> <Link href={"https://en.wikipedia.org/wiki/Ludum_Dare"}>Ludum Dare 46</Link> <small>game jam</small></li>
                        <li><span style={"color: lightgray"}><FontAwesomeIcon icon={faMedal}/> Silver medal</span><small> at </small><Link href={"https://it.wikipedia.org/wiki/Olimpiadi_europee_delle_scienze"}>EUSO 2016</Link></li>
                    </MenuList>
                </Panel>
            </Section>
        </div>
    );
}
