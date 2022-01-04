import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger for Test');
    context.log("context: " + JSON.stringify(context));
    context.log("req: " + JSON.stringify(req));
    var headers = req["headers"];
    var user = [ headers["authorization"], headers["x-ms-client-principal"], headers["x-ms-client-principal-id"] ]
    context.log("user: " + JSON.stringify(user));
    context.res = {
        body: user
    }
};

export default httpTrigger;