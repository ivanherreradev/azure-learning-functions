import { app, InvocationContext } from "@azure/functions";

export async function funcLearning(queueItem: unknown, context: InvocationContext): Promise<void> {
    context.log('Storage queue function processed work item:', queueItem);
}

app.storageQueue('func-learning', {
    queueName: 'js-queue-items',
    connection: 'AzureWebJobsStorage',
    handler: funcLearning
});
