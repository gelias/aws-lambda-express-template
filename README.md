# umovme-ses-bounce

## Installing

Install project dependencies

```bash
npm install
```

## Testing

To run functional tests:

```bash
npm run functional-test
```

## Running

This project uses nodemon for hot reload development

```bash
npm i -g nodemon
```

To run a local server:

```bash
npm run dev
```

## Deploying

\*\*This project uses aws cli (python module), so first you have to configure your local aws cli with proper credentials

To build (zip generation in /dist):

```bash
npm run build
```

To deploy it on AWS lambda (generated zip deployment):

```bash
npm run deploy
```

To build and deploy (all-in-one):

```bash
npm run build-deploy
```

SNS JSON examples(Bounce/Complaint)

```javascript
{
        "Records": [
          {
            "EventSource": "aws:sns",
            "EventVersion": "1.0",
            "EventSubscriptionArn": "arn:aws:sns:us-east-1:033633542725:SESBounces:e8f17499-6db5-4824-ba2f-b2b3fac096dc",
            "Sns": {
              "Type": "Notification",
              "MessageId": "95055205-5948-508f-97ee-06f60d668b97",
              "TopicArn": "arn:aws:sns:us-east-1:033633542725:SESBounces",
              "Subject": null,
              "Message": "{\"notificationType\":\"Bounce\",\"bounce\":{\"bounceType\":\"Permanent\",\"bounceSubType\":\"General\",\"bouncedRecipients\":[{\"emailAddress\":\"teste@test.com\",\"action\":\"failed\",\"status\":\"5.1.1\",\"diagnosticCode\":\"smtp; 550-5.1.1 The email account that you tried to reach does not exist. Please try\\n550-5.1.1 double-checking the recipient's email address for typos or\\n550-5.1.1 unnecessary spaces. Learn more at\\n550 5.1.1  https://support.google.com/mail/?p=NoSuchUser h23si379880qkk.46 - gsmtp\"}],\"timestamp\":\"2019-03-01T15:38:22.889Z\",\"feedbackId\":\"0100016939e80cfa-37e051ce-dfdd-4578-819a-3c0453521bd4-000000\",\"remoteMtaIp\":\"172.217.197.27\",\"reportingMTA\":\"dsn; a8-34.smtp-out.amazonses.com\"},\"mail\":{\"timestamp\":\"2019-03-01T15:38:22.000Z\",\"source\":\"no-reply@umov.me\",\"sourceArn\":\"arn:aws:ses:us-east-1:033633542725:identity/no-reply@umov.me\",\"sourceIp\":\"107.23.59.153\",\"sendingAccountId\":\"033633542725\",\"messageId\":\"0100016939e80b88-f0370a1b-570d-4f7e-8402-dca3983d917e-000000\",\"destination\":[\"portaldohacana346@gmail.com\"]}}",
              "Timestamp": "2019-03-01T15:38:22.914Z",
              "SignatureVersion": "1",
              "Signature": "dR4xsHCU2EI9WS3J4VdFzxIjDiSFcznNJzX4bUrPYryibGTJpQgBdXd2C7q4voVeumoGkMc7zxtBAC0CoXnzsAHrF5odUnYFCwo3Ffn6//gdiXkcsw/ZPEvZpWd1auIOJVj+g5QMtDjtED4J+9tim6+uEkZN1LuAcQN9w5xMRInsWNbLeOcASwZ+V9u9YAEMSBN6Om9dcxewSrnuCI/L5CdlWjJ7IHLqv8KCgbSw73lsXRnYTpTxEmehTwnPZQxRZAbsv+XGXwvdq8JUTF8x/bwGjPfKtNDhHvDs/VTCbu6/0D+/vWNqpB8uWoH5EP8wXDpDQq437EzvBYdtLkei+A==",
              "SigningCertUrl": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-6aad65c2f9911b05cd53efda11f913f9.pem",
              "UnsubscribeUrl": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:033633542725:SESBounces:e8f17499-6db5-4824-ba2f-b2b3fac096dc",
              "MessageAttributes": {}
            }
          }
        ]
      }
```

```javascript
{
        "Records": [
          {
            "EventSource": "aws:sns",
            "EventVersion": "1.0",
            "EventSubscriptionArn": "arn:aws:sns:us-east-1:033633542725:SESBounces:e8f17499-6db5-4824-ba2f-b2b3fac096dc",
            "Sns": {
              "Type": "Notification",
              "MessageId": "95055205-5948-508f-97ee-06f60d668b97",
              "TopicArn": "arn:aws:sns:us-east-1:033633542725:SESBounces",
              "Subject": null,
              "Message": "{ \"notificationType\":\"Complaint\", \"complaint\":{ \"userAgent\":\"AnyCompany Feedback Loop (V0.01)\", \"complainedRecipients\":[ { \"emailAddress\":\"richard@example.com\" } ], \"complaintFeedbackType\":\"abuse\", \"arrivalDate\":\"2016-01-27T14:59:38.237Z\", \"timestamp\":\"2016-01-27T14:59:38.237Z\", \"feedbackId\":\"000001378603177f-18c07c78-fa81-4a58-9dd1-fedc3cb8f49a-000000\" }, \"mail\":{ \"timestamp\":\"2016-01-27T14:59:38.237Z\", \"messageId\":\"000001378603177f-7a5433e7-8edb-42ae-af10-f0181f34d6ee-000000\", \"source\":\"john@example.com\", \"sourceArn\": \"arn:aws:ses:us-west-2:888888888888:identity\/example.com\", \"sourceIp\": \"127.0.3.0\", \"sendingAccountId\":\"123456789012\", \"destination\":[ \"jane@example.com\", \"mary@example.com\", \"richard@example.com\" ],  \"headersTruncated\":false, \"headers\":[  {  \"name\":\"From\", \"value\":\"\\\"John Doe\\\" \" }, {  \"name\":\"To\", \"value\":\"\\\"Jane Doe\\\" , \\\"Mary Doe\\\" , \\\"Richard Doe\\\" \" }, {  \"name\":\"Message-ID\", \"value\":\"custom-message-ID\" }, {  \"name\":\"Subject\", \"value\":\"Hello\" }, {  \"name\":\"Content-Type\", \"value\":\"text\/plain; charset=\\\"UTF-8\\\"\" }, {  \"name\":\"Content-Transfer-Encoding\", \"value\":\"base64\" }, {  \"name\":\"Date\", \"value\":\"Wed, 27 Jan 2016 14:05:45 +0000\" } ], \"commonHeaders\":{  \"from\":[  \"John Doe \" ], \"date\":\"Wed, 27 Jan 2016 14:05:45 +0000\", \"to\":[  \"Jane Doe , Mary Doe , Richard Doe \" ], \"messageId\":\"custom-message-ID\", \"subject\":\"Hello\"}}}",
              "Timestamp": "2019-03-01T15:38:22.914Z",
              "SignatureVersion": "1",
              "Signature": "dR4xsHCU2EI9WS3J4VdFzxIjDiSFcznNJzX4bUrPYryibGTJpQgBdXd2C7q4voVeumoGkMc7zxtBAC0CoXnzsAHrF5odUnYFCwo3Ffn6//gdiXkcsw/ZPEvZpWd1auIOJVj+g5QMtDjtED4J+9tim6+uEkZN1LuAcQN9w5xMRInsWNbLeOcASwZ+V9u9YAEMSBN6Om9dcxewSrnuCI/L5CdlWjJ7IHLqv8KCgbSw73lsXRnYTpTxEmehTwnPZQxRZAbsv+XGXwvdq8JUTF8x/bwGjPfKtNDhHvDs/VTCbu6/0D+/vWNqpB8uWoH5EP8wXDpDQq437EzvBYdtLkei+A==",
              "SigningCertUrl": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-6aad65c2f9911b05cd53efda11f913f9.pem",
              "UnsubscribeUrl": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:033633542725:SESBounces:e8f17499-6db5-4824-ba2f-b2b3fac096dc",
              "MessageAttributes": {}
            }
          }
        ]
      }
```
