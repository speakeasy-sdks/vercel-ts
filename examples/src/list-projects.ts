import { VercelCore } from "vercel/core.js";
import { projectsGetAll } from "vercel/funcs/projectsGetAll.js";
import { SDKValidationError } from "vercel/models/sdkvalidationerror.js";

const vercel = new VercelCore({
  bearerToken: process.env["VERCEL_BEARER_TOKEN"] || "",
});

async function run() {
  const iterator = await projectsGetAll(vercel, {
    teamId: "speakeasyapi",
  });

  for await (const result of iterator) {
    switch (true) {
      case result.ok:
        break;
      case result.error instanceof SDKValidationError:
        console.log(result.error.pretty());
        return;
      case result.error instanceof Error:
        console.log(result.error.message);
        return;
      default:
        result.error satisfies never;
        throw new Error("error check was not exhaustive");
    }

    const page = result.value;

    page.result.projects.forEach((proj) => {
      console.group("Project: " + proj.name);
      console.log("ID:", proj.id);
      console.log("Live:", !!proj.live);
      console.log("Paused:", !!proj.paused);
      if (proj.createdAt) console.log("Created at:", new Date(proj.createdAt));
      console.groupEnd();
    });
  }
}

run();
