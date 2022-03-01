import dotenv from 'dotenv'
import { JiraClient } from "./generated/JiraClient";

(async (): Promise<void> => {
  dotenv.config()
  const appClient = new JiraClient({
    BASE: 'https://postc-massgov.atlassian.net',
    PASSWORD: process.env.JIRA_SERVICE_USER_TOKEN,
    USERNAME: process.env.JIRA_SERVICE_USER_EMAIL,
  });

  const issueKey = "RI-148";
  console.log(`Fetching ${issueKey}`);
  const issue = await appClient.issues.getIssue(issueKey);
  console.log(JSON.stringify(issue, undefined, 2));
})()