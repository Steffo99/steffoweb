import Document, {Html, Head, Main, NextScript} from "next/document"

export default class extends Document {
    render() {
        return (
            <Html>
                <Head/>
                <body className={"layout-center"}>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
