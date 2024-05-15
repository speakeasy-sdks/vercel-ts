import { Vercel } from ".";

import { expect, test } from "bun:test";

const vercel = new Vercel({
    security: {
        bearerToken: process.env.VERCEL_API_KEY,
    },
});


test("Get Authenticated User", async () => {
    const result = await vercel.user.getAuthUser()
    expect(result.httpMeta.response.status).toBe(200);
    expect(result.object).toBeDefined();
});

test("List Teams", async () => {
    const result = await vercel.teams.getTeams()
    expect(result.httpMeta.response.status).toBe(200);
    expect(result.object).toBeDefined();
});

test("List Webhooks", async () => {
    const result = await vercel.webhooks.getWebhooks()
    expect(result.httpMeta.response.status).toBe(200);
    expect(result.responseBodies).toBeDefined();
});

test("List Deployments", async () => {
    const result = await vercel.deployments.getDeployments({})
    expect(result.httpMeta.response.status).toBe(200);
    expect(result.object).toBeDefined();
});

test("List Secrets", async () => {
    const result = await vercel.secrets.getSecrets()
    expect(result.httpMeta.response.status).toBe(200);
    expect(result.object).toBeDefined();
});