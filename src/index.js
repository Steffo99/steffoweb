// Import debugging tools
import {useState} from "preact/hooks";

let Sentry = null;
if(process.env.NODE_ENV === "development") {
	console.debug("Initializing Preact Debugger...")
	require("preact/debug");
}
else if(process.env.NODE_ENV === "production") {
	console.debug("Initializing Sentry...")
	Sentry = require("@sentry/browser");
	let SentryIntegrations = require("@sentry/integrations")
	// noinspection JSUnresolvedVariable
	Sentry.init({
		// TODO: Sentry DSN goes here
		dsn: "https://05965b0d953049f493ddca387c1e4c90@o40131.ingest.sentry.io/5300173",
		release: process.env.RELEASE,
		environment: "production",
		beforeSend(event, hint) {
			if (event.exception) {
				Sentry.showReportDialog({ eventId: event.event_id });
			}
			return event;
		}
	});
}

import Home from "./routes/Home";

// noinspection ES6UnusedImports
import "bluelib/dist/index.css";
import './meta/manifest.json';
import './meta/CNAME';
import './meta/.nojekyll';
import './meta/favicon.ico';

import Router from 'preact-router';
import {createHashHistory} from "history";

import { theme, BasicContainer } from 'bluelib';

// noinspection JSUnusedGlobalSymbols
export default function(props) {
	let [currentPage, setCurrentPage] = useState(window.location.hash.substr(1));
	const onPageChange = (event) => {
		setCurrentPage(event.url);
	};

	return (
		<div id="app" className={theme.bluelib}>
			<Router history={createHashHistory()} onChange={onPageChange}>
				<Home path={"/"}/>
			</Router>
		</div>
	);
}
