import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger for GetRoles');
    context.log("context: " + JSON.stringify(context));
    context.log("req: " + JSON.stringify(req));
    const user = req.body || {};
    context.log("user: " + JSON.stringify(user));
    context.res.json(['admin', 'reader', "yapper"]);
};
