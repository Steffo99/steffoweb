import {Panel, Section} from "bluelib";

export default function (props) {
    return (
        <div>
            <h1>
                Steffo<small>'s website</small>
            </h1>
            <Panel title={"Hello there!"}>
                Hi! Welcome to my website!
            </Panel>
            <Panel title={"Under construction"}>
                This website is currently under (re)construction. Come back another time!
            </Panel>
        </div>
    );
}
