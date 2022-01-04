import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    context.log(context, req);
    const user = req.body || {};
    console.log(user);
    context.res = {
        body: user
    }
};

export default httpTrigger;