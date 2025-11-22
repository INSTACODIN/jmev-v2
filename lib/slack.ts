export interface SlackMessage {
  type: "contact" | "booking";
  name: string;
  email: string;
  phone: string;
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
}

export async function sendToSlack(data: SlackMessage): Promise<boolean> {
  const webhookUrl = process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("Slack webhook URL is not configured");
    return false;
  }

  const title = data.type === "contact" ? "New Contact Form Submission" : "New Test Drive Booking";
  
  const fields = [
    {
      title: "Name",
      value: data.name,
      short: true,
    },
    {
      title: "Email",
      value: data.email,
      short: true,
    },
    {
      title: "Phone",
      value: data.phone,
      short: true,
    },
  ];

  if (data.type === "booking") {
    if (data.preferredDate) {
      fields.push({
        title: "Preferred Date",
        value: data.preferredDate,
        short: true,
      });
    }
    if (data.preferredTime) {
      fields.push({
        title: "Preferred Time",
        value: data.preferredTime,
        short: true,
      });
    }
  }

  if (data.message) {
    fields.push({
      title: "Message",
      value: data.message,
      short: false,
    });
  }

  const payload = {
    text: title,
    attachments: [
      {
        color: data.type === "booking" ? "#36a64f" : "#0066cc",
        fields,
        footer: "JMEV Website",
        ts: Math.floor(Date.now() / 1000),
      },
    ],
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return response.ok;
  } catch (error) {
    console.error("Error sending to Slack:", error);
    return false;
  }
}

