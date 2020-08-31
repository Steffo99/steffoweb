import style from './Footer.less';
import {concatClass} from 'bluelib';
import Link from "./Link";


export default function(props) {
	return (
		<div class={concatClass(style.footer, props.class)}>
			© {new Date().getFullYear()} - Stefano Pigozzi -&nbsp;
			<Link href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</Link>
			&nbsp;-&nbsp;
			<Link href="https://github.com/Steffo99/uni.steffo.eu">steffo.eu {process.env.RELEASE}</Link>
		</div>
	);
}
