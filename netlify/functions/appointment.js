const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    personalizations: [{ to: [{ email: process.env.APPT_TO_EMAIL }] }],
    from: { email: process.env.APPT_FROM_EMAIL },
    subject: "New Appointment Request",
    content: [{ type: "text/plain", value: message }],
  }),
});

if (!res.ok) {
  const text = await res.text();
  return {
    statusCode: res.status,
    body: text || "Email failed",
  };
}

return {
  statusCode: 200,
  body: JSON.stringify({ status: "ok" }),
};
