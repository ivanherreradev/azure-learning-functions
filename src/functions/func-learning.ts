import { app, InvocationContext, output } from "@azure/functions";

export async function funcLearning(queueItem: unknown, context: InvocationContext): Promise<void> {
    context.log('Storage queue function processed work item:', queueItem);
    context.log(context)
    const outputMessage = `Mensaje procesado ${queueItem}`
    context.extraOutputs.set(outputQueue, outputMessage)
}

const outputQueue = output.storageQueue({queueName:'output-queue', connection:'AzureWebJobsStorage'})

app.storageQueue('func-learning', {
    queueName: 'js-queue-items',
    connection: 'AzureWebJobsStorage',
    extraOutputs: [outputQueue],
    handler: funcLearning
});
