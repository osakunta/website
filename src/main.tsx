import { h, render } from "preact";
import App from "./components/App";

const root = document.getElementById("root")
if (root === null) {
    console.error("Failed to find root element (#root)")
} else {
    render(<App />, root) 
}