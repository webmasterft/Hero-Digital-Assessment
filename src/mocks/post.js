import { createServer } from "miragejs";

createServer({
    routes() {
        this.namespace = "api";
        this.post('sendForm', (schema, request) => {
            let body = JSON.parse(request.requestBody);
            return {
                "status": "success",
                "message": "Thank you. You are now subscribed."
            }
        });
    }
})